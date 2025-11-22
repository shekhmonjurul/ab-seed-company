// import React, { useEffect, useState } from 'react';
// import Container from '../container/Container';
// import Header from '../component/Header';
// import Fotter from '../component/Footer';
// import { TbCurrencyTaka } from 'react-icons/tb';
// import { FaCheck, FaSpinner } from 'react-icons/fa';

// const categories = ['fruits', 'vegetables', 'seeds'];

// const generateProducts = categoryName => {
//   const products = [];
//   const total = Math.floor(Math.random() * 12) + 8;
//   for (let i = 1; i <= total; i++) {
//     products.push({
//       id: i,
//       subPoint: 'ইমপোর্টকৃত',
//       name: `${categoryName} Product ${i}`,
//       href: `#/${categoryName}/${i}`,
//       price: Math.floor(Math.random() * 300) + 100,
//       DisCountPrice: Math.floor(Math.random() * 300) + 150,
//       image: `https://via.placeholder.com/300x300?text=${categoryName}+${i}`,
//     });
//   }
//   return products;
// };

// const CategoryPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const [loadCount, setLoadCount] = useState(10);
//   const [statusMap, setStatusMap] = useState({});

//   useEffect(() => {
//     const products = generateProducts(selectedCategory);
//     setAllProducts(products);
//     setDisplayedProducts(products.slice(0, 10));
//     setLoadCount(10);
//   }, [selectedCategory]);

//   const handleLoadMore = () => {
//     const nextCount = loadCount + 10;
//     setDisplayedProducts(allProducts.slice(0, nextCount));
//     setLoadCount(nextCount);
//   };

//   const handleCartItem = id => {
//     if (statusMap[id] === 'added') return;

//     setStatusMap(prev => ({ ...prev, [id]: 'loading' }));

//     let selectItem = allProducts.find(item => item.id === id);
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     const exist = cart.find(item => item.id === id);

//     if (!exist) {
//       cart.push(selectItem);
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));

//     let summary = JSON.parse(localStorage.getItem('cartSummary')) || [];

//     const found = summary.find(item => item.id === id);

//     if (found) {
//       found.qty += 1;
//       found.totalPrice = found.qty * found.price;
//     } else {
//       summary.push({
//         ...selectItem,
//         qty: 1,
//         totalPrice: selectItem.price,
//       });
//     }

//     localStorage.setItem('cartSummary', JSON.stringify(summary));

//     window.dispatchEvent(new Event('cartUpdated'));

//     setTimeout(() => {
//       setStatusMap(prev => ({ ...prev, [id]: 'added' }));
//     }, 1000);
//   };

//   return (
//     <>
//       <Header />
//       <section className="tablet:py-[100px] laptop:py-[100px] computer:py-[100px] mobile:pt-[150px] mobile:pb-[100px]">
//         <Container>
//           <div className="my-4 w-[400px] flex flex-col items-center rounded-lg text-black bg-white mobile-card shadow-[inset_1px_1px_8px_rgba(34,197,94,0.6)]">
//             <img
//               src={
//                 imgsrc ||
//                 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce'
//               }
//               alt="Product Image"
//               className="w-full h-[280px] object-cover rounded-t-md img-size"
//             />

//             <div className="flex flex-col gap-2 justify-center items-center  my-4 p-2">
//               <h5 className="text-[#737373]">
//                 {catagoryname || `দেশি, হাইব্রিড, উচ্চফলনশীল`}
//               </h5>
//               <h3 className="text-2xl font-semibold ">হাইব্রিড সুবর্ণ লাউ</h3>
//               <p className="text-center text-[#737373]">
//                 {shortdecription ||
//                   `(১০ গ্রাম/ ৫০-৬০ বীজ) বৈশিষ্ট্য: ফল লম্বাটে সবুজ ও সুষম আকৃতির, গায়ে সাদা ছোপ ছোপ দাগ, ৪০-৪৫ দিনে ফল সংগ্রহযোগ্য, গড় ওজন ২.৫-৩ কেজি, দৈর্ঘ্য ৪০-৪৫ সেমি, খেতে নরম ও সুস্বাদু।`}
//               </p>
//               <div className="flex justify-around items-center">
//                 <del className="text-md font-bold text-[#CA7572] mx-4">
//                   320 BDT
//                 </del>
//                 <h4 className="text-md font-bold ">{`${price || 120} BDT`}</h4>
//               </div>

//               <div className="flex items-center justify-between mt-3">
//                 <button className="">
//                   <img src="/heart.svg" width={35} alt="cart" />
//                 </button>
//                 {showquntity ? (
//                   <QuantitySelector />
//                 ) : (
//                   <button
//                     className="flex justify-center items-center  mx-2 p-2 bg-[#d9ffd1]"
//                     style={{
//                       fontSize: '12px',
//                       borderRadius: 8,
//                       border: '2px solid #097b0a',
//                     }}
//                     onClick={handelCart}
//                   >
//                     <img
//                       src="/ordercart.svg"
//                       alt="order cart"
//                       width={35}
//                       className="mx-2"
//                     />
//                     <span className="size-font"> কার্টে যুক্ত করুন</span>
//                   </button>
//                 )}
//                 <button
//                   className="bg-[#097b0a] text-[#dbffcc] flex items-center p-1 mt-2"
//                   style={{
//                     border: '1px solid #dbffcc ',
//                     outline: '2px solid #097b0a',
//                     borderRadius: 8,
//                     fontSize: '12px',
//                   }}
//                 >
//                   <span className="size-font">বিস্তারিত</span>
//                   <Icon
//                     component={IoIosArrowDropright}
//                     sx={{
//                       fontSize: 30,
//                     }}
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* my-code */}
//           {/* <h1 className="text-[30px] font-bold text-green-700 w-full mx-auto mb-[50px]">
//             নতুন শিপিংয়ে আসা {selectedCategory} ও অন্যান্য বীজ
//           </h1>
//           <div className="flex items-center flex-wrap gap-5">
//             {displayedProducts.map((item, index) => (
//               <div
//                 key={index}
//                 className="computer:w-[23%] mobile:w-[47%] tablet:w-[48%] laptop:w-[32%] h-auto group"
//               >
//                 <div className="image w-full h-auto object-cover border-2 border-green-800 cursor-pointer relative">
//                   <img className="w-full h-full" src={item.image} alt="" />
//                   <button className="text-[16px] font-semibold text-gray-800 bg-white py-[6px] px-2.5 rounded-full absolute top-[15px] left-[20px]">
//                     Sale !
//                   </button>
//                 </div>
//                 <div className="text bg-green-500/30 group-hover:bg-white transition-all ease-in-out duration-300 p-[10px] rounded-b-[12px]">
//                   <h3 className="text-[13px] font-semibold text-gray-500 mb-[10px]">
//                     {item.subPoint}
//                   </h3>
//                   <h4 className="text-[16px] font-normal text-gray-600 text-center mb-[10px] cursor-pointer mobile:h-[190px] tablet:h-auto laptop:h-auto computer:h-auto mobile:w-[132px] tablet:w-[270px] laptop:w-[295px] computer:w-[295px] mx-auto">
//                     {item.name}
//                   </h4>
//                   <div className="flex items-center justify-center mb-[8px]">
//                     <h5 className="text-[20px] font-semibold text-orange-500 line-through flex items-center">
//                       {item.DisCountPrice} <TbCurrencyTaka />
//                     </h5>
//                     <h5 className="text-[20px] font-semibold text-black flex items-center">
//                       {item.price} <TbCurrencyTaka />
//                     </h5>
//                   </div>
//                   <button
//                     onClick={() => handleCartItem(item.id)}
//                     className="text-[16px] font-semibold text-white mobile:px-[20px] tablet:px-[30px] laptop:px-[30px] computer:px-[30px] py-[8px] bg-green-800 hover:text-green-800 hover:bg-transparent transition ease-in-out duration-300 rounded-md"
//                   >
//                     {statusMap[item.id] === 'loading' ? (
//                       <div className="flex items-center gap-[10px]">
//                         Adding <FaSpinner className="animate-spin" />
//                       </div>
//                     ) : statusMap[item.id] === 'added' ? (
//                       <div className="flex items-center gap-[10px]">
//                         Added <FaCheck />
//                       </div>
//                     ) : (
//                       'Add To Cart'
//                     )}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {displayedProducts.length < allProducts.length && (
//             <div className="mt-5 text-center">
//               <button
//                 onClick={handleLoadMore}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-md"
//               >
//                 Load More
//               </button>
//             </div>
//           )} */}
//         </Container>
//       </section>
//       <Fotter />
//     </>
//   );
// };

// export default CategoryPage;

// // use this product card for show product detalis:

// // import Icon from "@mui/material/Icon";
// // import { useState } from "react";
// // import { IoIosArrowDropright } from "react-icons/io";
// // import QuantitySelector from "./QuantitySelector";
// // export default function ProductCard({ imgsrc, catagoryname, shortdecription, price }) {

// //   const [showquntity, setShowquntity] = useState(false)

// //   const handelCart = () => {
// //     setShowquntity(true)
// //   }

// //   return (
// //
// //   );
// // }

import React, { useEffect, useState } from 'react';
import Container from '../container/Container';
import Header from '../component/Header';
import Fotter from '../component/Footer';
import { FaCheck, FaSpinner } from 'react-icons/fa';
import QuantitySelector from '../component/QuantitySelector';
import ProductDetails from '../component/product/ProductDetails';

const categories = ['fruits', 'vegetables', 'seeds'];

const generateProducts = categoryName => {
  const products = [];
  const total = Math.floor(Math.random() * 12) + 8;
  for (let i = 1; i <= total; i++) {
    products.push({
      id: i,
      subPoint: 'ইমপোর্টকৃত',
      name: `${categoryName} Product ${i}`,
      href: `#/${categoryName}/${i}`,
      price: Math.floor(Math.random() * 300) + 100,
      DisCountPrice: Math.floor(Math.random() * 300) + 150,
      image: `https://via.placeholder.com/300x300?text=${categoryName}+${i}`,
      shortDes: `(১০ গ্রাম/ ৫০-৬০ বীজ) বৈশিষ্ট্য: লম্বাটে সবুজ ও সুষম আকৃতির, খেতে নরম ও সুস্বাদু।`,
    });
  }
  return products;
};

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loadCount, setLoadCount] = useState(10);
  let [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const products = generateProducts(selectedCategory);
    setAllProducts(products);
    setDisplayedProducts(products.slice(0, 10));
    setLoadCount(10);
  }, [selectedCategory]);

  const handleLoadMore = () => {
    const nextCount = loadCount + 10;
    setDisplayedProducts(allProducts.slice(0, nextCount));
    setLoadCount(nextCount);
  };

  // const handleCartItem = id => {
  //   if (statusMap[id] === 'added') return;

  //   setStatusMap(prev => ({ ...prev, [id]: 'loading' }));

  //   let selectItem = allProducts.find(item => item.id === id);
  //   let cart = JSON.parse(localStorage.getItem('cart')) || [];

  //   const exist = cart.find(item => item.id === id);

  //   if (!exist) cart.push(selectItem);
  //   localStorage.setItem('cart', JSON.stringify(cart));

  //   let summary = JSON.parse(localStorage.getItem('cartSummary')) || [];
  //   const found = summary.find(item => item.id === id);

  //   if (found) {
  //     found.qty += 1;
  //     found.totalPrice = found.qty * found.price;
  //   } else {
  //     summary.push({
  //       ...selectItem,
  //       qty: 1,
  //       totalPrice: selectItem.price,
  //     });
  //   }

  //   localStorage.setItem('cartSummary', JSON.stringify(summary));

  //   setQtyVisible(prev => ({ ...prev, [id]: true }));

  //   window.dispatchEvent(new Event('cartUpdated'));

  //   setTimeout(() => {
  //     setStatusMap(prev => ({ ...prev, [id]: 'added' }));
  //   }, 1000);
  // };

  return (
    <>
      <Header />

      <section className="pt-[150px] pb-[100px]">
        <Container>
          <div className="flex gap-4 justify-center mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md font-semibold ${
                  selectedCategory === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 computer:grid-cols-4 mobile:gap-2 tablet:gap-3 laptop:gap-4 computer:gap-5">
            {displayedProducts.map(item => {
              return (
                <div
                  key={item.id}
                  className=" mobile:w-auto tablet:w-auto laptop:w-[400px] computer:w-[400px] flex flex-col items-center rounded-lg text-black bg-white shadow-md border-2 "
                >
                  <img
                    src="/img.jpg"
                    alt="Product"
                    className="w-full h-auto object-cover rounded-t-md"
                  />

                  <div className="flex flex-col gap-2 justify-center items-center mt-4 mb-2 p-2">
                    <h5 className="text-[#737373]">{item.subPoint}</h5>
                    <h3 className="mobile:text-[16px] tablet:text-[18px] laptop:text-2xl computer:text-2xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-center w-auto text-[#737373]">
                      {item.shortDes}
                    </p>

                    <div className="flex items-center">
                      <del className="text-md font-bold text-red-500 mx-4">
                        {item.DisCountPrice} BDT
                      </del>
                      <h4 className="text-md font-bold">{item.price} BDT</h4>
                    </div>

                    <div className="mobile:flex mobile:flex-wrap tablet:flex laptop:flex computer:flex flex-nowrap items-center mobile:justify-center tablet:justify-between laptop:justify-between computer:justify-between mt-3 gap-3 mx-auto">
                      <button
                        onClick={() => setModalOpen(true)}
                        className="bg-[#097b0a] text-[#dbffcc] px-[50px] py-2 mobile:block tablet:hidden laptop:hidden computer:hidden"
                        style={{
                          border: '1px solid #dbffcc',
                          outline: '2px solid #097b0a',
                          borderRadius: 8,
                          fontSize: '12px',
                        }}
                      >
                        বিস্তারিত
                      </button>
                      <QuantitySelector
                        id={item.id}
                        allProducts={allProducts}
                      />
                      <div>
                        {' '}
                        {/* {qtyVisible[item.id] ? (
                      <QuantitySelector
                        productId={item.id}
                        price={item.price}
                      />
                    ) : (
                      <button
                        onClick={() => handleCartItem(item.id)}
                        className="flex justify-center items-center px-3 py-2 bg-green-100"
                        style={{
                          fontSize: '12px',
                          borderRadius: 8,
                          border: '2px solid #097b0a',
                        }}
                      >
                        {statusMap[item.id] === 'loading' ? (
                          <FaSpinner className="animate-spin mr-2" />
                        ) : statusMap[item.id] === 'added' ? (
                          <FaCheck className="text-green-600 mr-2" />
                        ) : (
                          <img
                            src="/ordercart.svg"
                            width={30}
                            className="mr-2"
                          />
                        )}

                        <span>কার্টে যুক্ত করুন</span>
                      </button>
                    )} */}
                      </div>

                      {/* Details Button */}
                      <button
                        onClick={() => setModalOpen(true)}
                        className="bg-[#097b0a] text-[#dbffcc]  px-3 py-2 mobile:hidden tablet:block laptop:block computer:block"
                        style={{
                          border: '1px solid #dbffcc',
                          outline: '2px solid #097b0a',
                          borderRadius: 8,
                          fontSize: '12px',
                        }}
                      >
                        বিস্তারিত
                      </button>

                      {modalOpen && (
                        <ProductDetails
                          productId={item.id}
                          allProducts={allProducts}
                          open={modalOpen}
                          onClose={() => setModalOpen(false)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          {loadCount < allProducts.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold"
              >
                Load More
              </button>
            </div>
          )}
        </Container>
      </section>

      <Fotter />
    </>
  );
};

export default CategoryPage;
