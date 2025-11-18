import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { FaMinus, FaPlus } from 'react-icons/fa';

const ProductCard = () => {
  let [summary, setSummary] = useState([]);
  let [cart, setCartData] = useState([]);

  useEffect(() => {
    const load = () => {
      const data = JSON.parse(localStorage.getItem('cartSummary')) || [];
      setSummary(data);
    };

    load();

    window.addEventListener('cartUpdated', load);

    return () => {
      window.removeEventListener('cartUpdated', load);
    };
  }, []);

  function removeFromCart(id) {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cartData.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartData(updatedCart);

    const summaryData = JSON.parse(localStorage.getItem('cartSummary')) || [];
    const updatedSummary = summaryData.filter(item => item.id !== id);
    localStorage.setItem('cartSummary', JSON.stringify(updatedSummary));
    setSummary(updatedSummary);

    window.dispatchEvent(new Event('cartUpdated'));
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart')) || [];
    setCartData(data);
  }, []);

  let handleIncrement = (id, action) => {
    const summaryData = JSON.parse(localStorage.getItem('cartSummary')) || [];

    let updated = summaryData.map(item => {
      if (item.id === id) {
        let qty = item.qty;

        if (action === 'Increment') {
          qty += 1;
        }

        if (action === 'Decrement' && qty > 1) {
          qty -= 1;
        }

        return {
          ...item,
          qty,
          totalPrice: qty * item.price,
        };
      }
      return item;
    });

    localStorage.setItem('cartSummary', JSON.stringify(updated));
    setSummary(updated);

    window.dispatchEvent(new Event('cartUpdated'));
  };

  const getQty = id => {
    const found = summary.find(item => item.id === id);
    return found ? found.qty : 0;
  };
  return (
    <>
      <section className="absolute top-0 right-0 bg-white mobile:w-full tablet:w-full laptop:w-[400px] computer:w-[400px] h-screen z-[50] pt-[60px] pl-[20px]">
        <div className="h-[400px] overflow-y-scroll overflow-hidden">
          {cart.length === 0 ? (
            <h1 className="text-[24px] font-semibold text-gray-600">
              Cart is Empty
            </h1>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="border-b border-gray-700 p-[10px]">
                <div className="flex gap-[10px]">
                  <div className="w-[120px] h-[120px] object-cover">
                    <img
                      className="w-full h-full"
                      src={item.image}
                      alt="productImage"
                    />
                  </div>
                  <div>
                    <h5 className="mobile:text-[13px] tablet:text-[16px] laptop:text-[16px] computer:text-[16px] font-normal text-gray-600 mobile:w-[155px] tablet:w-[200px] laptop:w-[220px] computer:w-[220px]">
                      {item.name}
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-center my-[20px]">
                  <h5
                    onClick={() => handleIncrement(item.id, 'Decrement')}
                    className="text-black text-2xl cursor-pointer mr-2.5"
                  >
                    <FaMinus />
                  </h5>
                  <h5 className="text-2xl font-semibold text-gray-600">
                    {getQty(item.id)}
                  </h5>
                  <span className="text-2xl font-semibold text-gray-600">
                    x
                  </span>
                  <h5 className="text-2xl font-semibold text-gray-600">
                    {item.price}
                  </h5>
                  <h5
                    onClick={() => handleIncrement(item.id, 'Increment')}
                    className="text-black text-2xl cursor-pointer ml-2.5"
                  >
                    <FaPlus />
                  </h5>
                  <span
                    onClick={() => removeFromCart(item.id)}
                    className="w-[35px] h-[35px] font-semibold text-2xl text-gray-800 rounded-full border border-gray-600 flex items-center justify-center ml-[50px] cursor-pointer"
                  >
                    <GrClose />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <h4 className="text-2xl font-bold text-gray-600 border-b border-gray-700 p-[10px]">
            Subtotal :
            <span>
              {summary.reduce((acc, item) => acc + item.totalPrice, 0)}৳
            </span>
          </h4>
          <button
            disabled={cart.length === 0}
            type="button"
            onClick={() => {
              window.location.href = '/order-form';
            }}
            className="text-[16px] font-semibold text-white bg-green-500 py-[10px] px-[120px] cursor-pointer rounded-md mt-[20px]"
          >
            Checkout ({summary.reduce((acc, item) => acc + item.totalPrice, 0)}
            ৳)
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductCard;






// use this product card for show product detalis:

// import Icon from "@mui/material/Icon";
// import { useState } from "react";
// import { IoIosArrowDropright } from "react-icons/io";
// import QuantitySelector from "./QuantitySelector";
// export default function ProductCard({ imgsrc, catagoryname, shortdecription, price }) {

//   const [showquntity, setShowquntity] = useState(false)

//   const handelCart = () => {
//     setShowquntity(true)
//   }

//   return (
//     <div className="my-4 w-[400px] flex flex-col items-center rounded-lg text-black bg-white mobile-card shadow-[inset_1px_1px_8px_rgba(34,197,94,0.6)]">
//       <img
//         src={imgsrc || "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"}
//         alt="Product Image"
//         className="w-full h-[280px] object-cover rounded-t-md img-size"
//       />

//       <div className="flex flex-col gap-2 justify-center items-center  my-4 p-2">
//         <h5 className="text-[#737373]">{catagoryname || `দেশি, হাইব্রিড, উচ্চফলনশীল
// `}</h5>
//         <h3 className="text-2xl font-semibold ">হাইব্রিড সুবর্ণ লাউ</h3>
//         <p className="text-center text-[#737373]">{shortdecription || `(১০ গ্রাম/ ৫০-৬০ বীজ) বৈশিষ্ট্য: ফল লম্বাটে সবুজ ও
// সুষম আকৃতির, গায়ে সাদা ছোপ ছোপ দাগ, ৪০-৪৫ দিনে
// ফল সংগ্রহযোগ্য, গড় ওজন ২.৫-৩ কেজি, দৈর্ঘ্য ৪০-৪৫
// সেমি, খেতে নরম ও সুস্বাদু।`}</p>
//         <div className="flex justify-around items-center">
//           <del className="text-md font-bold text-[#CA7572] mx-4">320 BDT</del>
//           <h4 className="text-md font-bold ">{`${price || 120} BDT`}</h4>
//         </div>

//         <div className="flex items-center justify-between mt-3">
//           <button className="">
//             <img src="/heart.svg" width={35} alt="cart" />
//           </button>
//           {
//             showquntity ? <QuantitySelector /> : <button className="flex justify-center items-center  mx-2 p-2 bg-[#d9ffd1]" style={{
//               fontSize: "12px",
//               borderRadius: 8,
//               border: "2px solid #097b0a"
//             }} onClick={handelCart}>
//               <img src="/ordercart.svg" alt="order cart" width={35} className="mx-2" />
//               <span className="size-font"> কার্টে যুক্ত করুন</span>
//             </button>
//           }
//           <button className="bg-[#097b0a] text-[#dbffcc] flex items-center p-1 mt-2" style={{
//             border: "1px solid #dbffcc ",
//             outline: "2px solid #097b0a",
//             borderRadius: 8,
//             fontSize: "12px"
//           }}>
//             <span className="size-font">বিস্তারিত</span>
//             <Icon component={IoIosArrowDropright} sx={{
//               fontSize: 30
//             }} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
