import React from 'react';
import Container from '../container/Container';
import Header from '../component/Header';
import Fotter from '../component/Footer';
import { TbCurrencyTaka } from 'react-icons/tb';

const CategoryPage = () => {
  let cartItem = [
    {
      id: 1,
      subPoint: 'ইমপোর্টকৃত',
      name: 'শালগম, অনন্য গঠন, চকচকে সবুজ রঙ, বাজারের জন্য পারফেক্ট মানের সবজির জাত শালগম (আনুমানিক এক হাজার বীজ)',
      href: '#',
      price: 200,
      DisCountPrice: 250,
      image: '/productImage.1.jpg',
    },
    {
      id: 2,
      subPoint: 'ইমপোর্টকৃত',
      name: 'বেগুনি শালগম, মাত্র ৪৫ দিনে ফসল, চকচকে বেগুনি শালগম (আনুমানিক ৬০০ বীজ)  (⛔️ জার্মিনেশন ঝুঁকি) গ্যারান্টি নেই',
      href: '#',
      price: 150,
      DisCountPrice: 180,
      image: '/productImage.1.jpg',
    },
    {
      id: 3,
      subPoint: 'ইমপোর্টকৃত',
      name: 'বাঁধাকপি 🥬 কম দিনে মাথা বাঁধে! সুন্দর গোলাকৃতি বাঁধাকপি — উচ্চ ফলনশীল HRQ.S কাবেজ (২০০ বীজ)',
      href: '#',
      price: 110,
      DisCountPrice: 150,
      image: '/productImage.1.jpg',
    },
    {
      id: 4,
      subPoint: 'ইমপোর্টকৃত',
      name: 'বেগুনি বাঁধাকপি, 🟣 মনোমুগ্ধকর রঙ ও বলিষ্ঠ গঠন—এক কথায় প্রিমিয়াম ক্লাসের বেগুনি বাঁধাকপি (২০০ বীজ)',
      href: '#',
      price: 250,
      DisCountPrice: 300,
      image: '/productImage.1.jpg',
    },
    {
      id: 5,
      subPoint: 'ইমপোর্টকৃত',
      name: 'ব্রোকলি, ২০০ বীজ (এই ব্রোকলি জাতের গাছ মাঝারি উচ্চতা সম্পন্ন এবং কুঁড়ি সেমি-গোল গঠনবিশিষ্ট, সুগঠিত ও টাইট)',
      href: '#',
      price: 220,
      DisCountPrice: 250,
      image: '/productImage.1.jpg',
    },
    {
      id: 6,
      subPoint: 'ইমপোর্টকৃত',
      name: 'বেগুনি রঙের অনন্য ফুলকপি, যা স্বাদে-গুণে সমৃদ্ধ এবং বাজারে বাড়তি দামে বিক্রি হয় (আনুমানিক ১০০ বীজ)',
      href: '#',
      price: 120,
      DisCountPrice: 150,
      image: '/productImage.1.jpg',
    },
  ];

  let handleCartItem = id => {
    let selectItem = cartItem.find(item => item.id === id);
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(selectItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    window.dispatchEvent(new Event('selectItem'));
    console.log('Added to cart:', selectItem);
  };
  return (
    <>
      <Header />
      <section className="py-[100px]">
        <Container>
          <h1 className="text-[30px] font-bold text-green-700 w-full mx-auto mb-[50px]">
            নতুন শিপিংয়ে আসা শীতকালীন ও অন্যান্য বীজ
          </h1>
          <div className="flex items-center flex-wrap gap-5">
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="computer:w-[310px] mobile:w-[310px] tablet:w-[285px] laptop:w-[305px] h-auto group"
              >
                <div className="image w-full h-auto object-cover border-2 border-green-800 cursor-pointer relative">
                  <img className="w-full h-full" src={item.image} alt="" />
                  <button className="text-[16px] font-semibold text-gray-800 bg-white py-[6px] px-2.5 rounded-full absolute top-[15px] left-[20px]">
                    Sale !
                  </button>
                </div>
                <div className="text bg-green-500/30 group-hover:bg-white transition-all ease-in-out duration-300 p-[10px] rounded-b-[12px]">
                  <h3 className="text-[13px] font-semibold text-gray-500 mb-[10px]">
                    {item.subPoint}
                  </h3>
                  <h4 className="text-[16px] font-normal text-gray-600 text-center mb-[10px] cursor-pointer">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-center mb-[8px]">
                    <h5 className="text-[20px] font-semibold text-orange-500 line-through flex items-center">
                      {item.DisCountPrice} <TbCurrencyTaka />
                    </h5>
                    <h5 className="text-[20px] font-semibold text-black flex items-center">
                      {item.price} <TbCurrencyTaka />
                    </h5>
                  </div>
                  <button
                    onClick={() => handleCartItem(item.id)}
                    className="text-[16px] font-semibold text-white px-[30px] py-[8px] bg-green-800 hover:text-green-800 hover:bg-transparent transition ease-in-out duration-300 rounded-md"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Fotter />
    </>
  );
};

export default CategoryPage;
