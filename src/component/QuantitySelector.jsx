// import { useState, useEffect } from 'react';

// export default function QuantitySelector({ allProducts }) {
//   const [quantity, setQuantity] = useState(1);
//   const [statusMap, setStatusMap] = useState({});
//   const [qtyVisible, setQtyVisible] = useState({});

//   useEffect(() => {
//     const summary = JSON.parse(localStorage.getItem('cartSummary')) || [];
//     const found = summary.find(item => item.id === id);
//     if (found) {
//       setQuantity(found.qty);
//     }
//   }, [id]);

//   const updateLocalStorage = newQty => {
//     let summary = JSON.parse(localStorage.getItem('cartSummary')) || [];
//     const found = summary.find(item => item.id === id);

//     if (found) {
//       found.qty = newQty;
//       found.totalPrice = newQty * price;
//     }

//     localStorage.setItem('cartSummary', JSON.stringify(summary));
//     window.dispatchEvent(new Event('cartUpdated'));
//   };

//   const handelMinus = () => {
//     if (quantity > 1) {
//       const newQty = quantity - 1;
//       setQuantity(newQty);
//       updateLocalStorage(newQty);
//     }
//   };

//   const handelPlus = () => {
//     const newQty = quantity + 1;
//     setQuantity(newQty);
//     updateLocalStorage(newQty);
//   };

//   // const handelMinus = () => {
//   //   if (quantity > 1) {
//   //     const newQty = quantity - 1;
//   //     setQuantity(newQty);
//   //     updateLocalStorage(newQty);
//   //   }
//   // };

//   // const handelPlus = () => {
//   //   const newQty = quantity + 1;
//   //   setQuantity(newQty);
//   //   updateLocalStorage(newQty);
//   // };

//   return (
//     <div className="text-black border-green-700 border-2 mobile:m-0 tablet:m-4 laptop:m-4 computer:m-4 mobile:w-auto tablet:w-[200px] laptop:w-[200px] computer:w-[200px] rounded-[8px] h-10 flex items-center justify-around font-bold mobile:p-[5px] mobile:py-0 tablet:py-2 laptop:py-4 computer:py-4  mobile-quntity">
//       <span>পরিমাণ </span>
//       <button className="text-3xl" onClick={handelMinus}>
//         -
//       </button>
//       <input
//         type="number"
//         name="quantity"
//         id="quantity"
//         className="w-[35px] h-[30px] px-1 bg-[#dbffcc] text-black rounded-[5px] text-center"
//         min={1}
//         value={quantity}
//         onChange={e => {
//           const val = Math.max(1, parseInt(e.target.value) || 1);
//           setQuantity(val);
//           updateLocalStorage(val);
//         }}
//       />
//       <button className="text-3xl" onClick={handelPlus}>
//         +
//       </button>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';

export default function QuantitySelector({ id, allProducts }) {
  const product = allProducts.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let summary = JSON.parse(localStorage.getItem('cartSummary')) || [];
    const found = summary.find(item => item.id === id);
    if (found) {
      setQuantity(found.qty);
      setVisible(true);
    }
  }, [id]);

  const handleAddToCart = () => {
    let summary = JSON.parse(localStorage.getItem('cartSummary')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(id);
    const exist = cart.find(item => item.id === id);
    console.log('exist', exist);
    if (!exist) cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    const found = summary.find(item => item.id === id);
    console.log(found);
    if (!found) {
      summary.push({
        ...product,
        qty: 1,
        totalPrice: product.price,
      });
    }

    localStorage.setItem('cartSummary', JSON.stringify(summary));
    setVisible(true);

    window.dispatchEvent(new Event('cartUpdated'));
  };

  const updateQty = newQty => {
    let summary = JSON.parse(localStorage.getItem('cartSummary')) || [];
    const found = summary.find(item => item.id === id);

    if (found) {
      found.qty = newQty;
      found.totalPrice = newQty * found.price;
    }

    localStorage.setItem('cartSummary', JSON.stringify(summary));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleMinus = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      updateQty(newQty);
    }
  };

  const handlePlus = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateQty(newQty);
  };

  return (
    <>
      {!visible ? (
        <button
          onClick={handleAddToCart}
          className="flex justify-center items-center mobile:w-full tablet:w-[230px] laptop:w-[230px] computer:w-[230px] h-[50px] bg-green-100 font-semibold "
          style={{
            fontSize: '16px',
            borderRadius: 8,
            border: '2px solid #097b0a',
          }}
        >
          <img src="/ordercart.svg" width={30} className="mr-2" />

          <span>কার্টে যুক্ত করুন</span>
        </button>
      ) : (
        <div
          className="text-black border-green-700 border-2 
          rounded-[8px] h-[50px] flex items-center justify-around font-bold p-2.5 mobile:w-full tablet:w-[230px] laptop:w-[230px] computer:w-[230px]"
        >
          <span>পরিমাণ</span>

          <button className="text-3xl" onClick={handleMinus}>
            -
          </button>

          <input
            type="number"
            className="w-[40px] h-[30px] bg-[#dbffcc] text-center rounded-md"
            min={1}
            value={quantity}
            onChange={e => {
              const val = Math.max(1, parseInt(e.target.value) || 1);
              setQuantity(val);
              updateQty(val);
            }}
          />

          <button className="text-3xl" onClick={handlePlus}>
            +
          </button>
        </div>
      )}
    </>
  );
}
