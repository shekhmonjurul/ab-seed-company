import React from 'react';
import Container from '../container/Container';
import Header from '../component/Header';
import Fotter from '../component/Footer';
import { TbCurrencyTaka } from 'react-icons/tb';

const CategoryPage = () => {
  return (
    <>
      <Header />
      <section className="py-[100px]">
        <Container>
          <h1 className="text-[30px] font-bold text-green-700 w-full mx-auto">
            নতুন শিপিংয়ে আসা শীতকালীন ও অন্যান্য বীজ
          </h1>
          <div>
            <div className="w-[320px] h-auto group">
              <div className="image w-full h-auto object-cover border-2 border-green-800 cursor-pointer">
                <img
                  className="w-full h-full"
                  src="/productImage.1.jpg"
                  alt=""
                />
              </div>
              <div className="text bg-green-500/30 group-hover:bg-white transition-all ease-in-out duration-300 p-[10px] rounded-b-[12px]">
                <h3 className="text-[13px] font-semibold text-gray-500 mb-[10px]">
                  ইমপোর্টকৃত
                </h3>
                <h4 className="text-[16px] font-normal text-gray-600 text-center mb-[10px] cursor-pointer">
                  শালগম, অনন্য গঠন, চকচকে সবুজ রঙ, বাজারের জন্য পারফেক্ট মানের
                  সবজির জাত শালগম (আনুমানিক এক হাজার বীজ)
                </h4>
                <div className="flex items-center justify-center mb-[8px]">
                  <h5 className="text-[20px] font-semibold text-orange-500 line-through flex items-center">
                    200 <TbCurrencyTaka />
                  </h5>
                  <h5 className="text-[20px] font-semibold text-black flex items-center">
                    200 <TbCurrencyTaka />
                  </h5>
                </div>
                <button className="text-[16px] font-semibold text-white px-[30px] py-[10px] bg-green-800 hover:text-green-800 hover:bg-transparent transition ease-in-out duration-300 rounded-md">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Fotter />
    </>
  );
};

export default CategoryPage;
