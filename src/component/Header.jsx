import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useState } from 'react';
import Container from '../container/Container';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  let navigate = useNavigate();
  let [active, setActive] = useState(false);
  let [CartOpen, setCartOpen] = useState(false);
  let [Total, setTotal] = useState(0);
  let [count, setCount] = useState(0);
  let [isScroll, setIsScroll] = useState(false);

  let FixedCategory = [
    {
      id: 1,
      name: 'নতুন শিপিং আসা শীতকালীন বীজ',
      image: '/image.1.jpg',
    },
    {
      id: 2,
      name: 'দেশি-বিদেশী সবজি',
      image: '/image.2.jpg',
    },
    {
      id: 3,
      name: 'বরবটি-সিম',
      image: '/image.3.jpg',
    },
    {
      id: 4,
      name: 'মরিচের বীজ',
      image: '/image.4.jpg',
    },
    {
      id: 5,
      name: 'শসা ও করলা',
      image: '/image.5.jpg',
    },

    {
      id: 6,
      name: 'টমেটোর বীজ',
      image: '/image.6.jpg',
    },
    {
      id: 7,
      name: 'কুমড়ার বীজ',
      image: '/image.7.jpg',
    },
    {
      id: 8,
      name: 'বেগুনের বীজ',
      image: '/image.8.jpg',
    },
    {
      id: 9,
      name: 'তরমুজের বীজ',
      image: '/image.9.jpg',
    },
    {
      id: 10,
      name: 'ফুলের বীজ',
      image: '/image.10.jpg',
    },
  ];

  useEffect(() => {
    let scrollhandler = () => {
      if (window.scrollY > 70) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', scrollhandler);
    return () => {
      window.removeEventListener('scroll', scrollhandler);
    };
  }, []);

  useEffect(() => {
    const updateTotal = () => {
      const summary = JSON.parse(localStorage.getItem('cartSummary')) || [];

      const totalQty = summary.reduce((acc, item) => acc + item.qty, 0);
      const totalPrice = summary.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );

      setCount(totalQty);
      setTotal(totalPrice);
    };

    updateTotal();

    window.addEventListener('cartUpdated', updateTotal);

    return () => {
      window.removeEventListener('cartUpdated', updateTotal);
    };
  }, []);

  useEffect(() => {
    if (CartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [CartOpen]);

  let handleCart = () => {
    setCartOpen(prev => !prev);
  };
  return (
    <>
      <section
        className={`${
          isScroll ? 'fixed top-0 left-0 right-0 w-full ' : ''
        } bg-green-300 py-4 transition-all duration-500 z-50 mobile:px-2 tablet:px-2 laptop:px-4 computer:px-4 `}
      >
        <Container>
          <div className="w-full">
            <div className="flex items-center mobile:justify-between tablet:justify-between laptop:justify-between computer:justify-between mb-2.5 relative z-0  ">
              <button
                onClick={() => setActive(prev => !prev)}
                aria-expanded={active}
                aria-controls="mobile-menu"
                className=" mobile:block tablet:block laptop:hidden computer:hidden tablet:text-[20px] mobile:text-[20px]"
              >
                {active ? <GrClose /> : <FaBars />}
              </button>
              <a
                href="/"
                className="mobile:text-[24px] tablet:text-[24px] laptop:text-[32px] computer:text-[32px] font-bold text-green-800"
              >
                এ.বি. সিড
              </a>

              <div
                onClick={handleCart}
                className="flex items-center gap-4 border border-gray-600 mobile:px-[10px] tablet:px-[26px] laptop:px-[26px] computer:px-[26px] py-[5px] rounded-md cursor-pointer relative"
              >
                <div className="flex items-center ">
                  <span className="text-[16px] font-bold text-gray-600">
                    {Total}
                  </span>
                  <TbCurrencyTaka className="text-[20px] font-bold text-gray-600" />
                </div>
                <FaShoppingBag className="text-[20px] font-bold text-gray-600" />
                <div className="absolute top-0 right-[15px] bg-red-500 w-5 h-5 z-30 rounded-full flex items-center justify-center">
                  {count}
                </div>
              </div>
              <div
                onClick={() => navigate('/order-form')}
                className=" mobile:bg-none tablet:bg-none computer:bg-green-500 laptop:bg-green-500 text-white mobile:w-[80px] tablet:w-[230px] laptop:w-[230px] computer:w-[230px] h-[50px] rounded-md cursor-pointer hover:bg-green-600 gap-[5px] active:scale-[70%] transition-all duration-300"
              >
                <span className="mr-2 text-[20px] mobile:block tablet:block computer:hidden laptop:hidden">
                  <img
                    className="w-[40px] h-[40px]"
                    src="/shopicon.png"
                    alt=""
                  />
                </span>
                <span className="mobile:hidden tablet:hidden laptop:block computer:block">
                  অর্ডার কনফার্ম করুন
                </span>
              </div>
            </div>
            <div className="absolute top-[65px] left-0 w-full h-[2px] z-30 bg-red-500 "></div>
            <div
              className={`transition-all ease-in-out duration-300 w-full ${
                isScroll
                  ? 'flex gap-3 py-2 items-center overflow-x-auto whitespace-nowrap '
                  : 'grid grid-cols-5 items-center gap-2'
              }  mt-2`}
            >
              {FixedCategory.map((item, index) => (
                <div key={index} className="shrink-0">
                  <img
                    className={`active:scale-[80%] ${
                      isScroll ? 'w-[40px] h-[40px]' : 'w-[30px] h-[30px]'
                    } rounded-md object-cover bg-no-repeat`}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
          {active && (
            <>
              <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-40"></div>

              <h3
                onClick={() => setActive(false)}
                className="fixed mobile:top-[10px] tablet:top-[80px] laptop:hidden computer:hidden mobile:right-[30px] tablet:right-[165px] text-white text-3xl z-[60]"
              >
                <GrClose />
              </h3>
            </>
          )}
          <div
            id="mobile-menu"
            className={`fixed top-0 left-0 z-50 mobile:w-[300px] tablet:w-[400px] h-screen bg-white transform origin-left transition-all duration-500 ease-in-out overflow-y-auto overflow-x-hidden ${
              active
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <div className="p-[20px] bg-green-600">
              <h3 className="mb-[-12px] text-[20px] font-semibold text-white text-left">
                Welcome
              </h3>
              <span className="text-[26px] font-bold  text-white">
                to Ab Seed Company
              </span>
            </div>
            <div className="p-[8px]">
              <ul className="block">
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">নতুন শিপিং আসা শীতকালীন বীজ</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">দেশি-বিদেশী সবজি</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">বরবটি-সিম</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">মরিচের বীজ</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">শসা ও করলা</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">টমেটোর বীজ</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">কুমড়ার বীজ</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">বেগুনের বীজ</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">তরমুজের বীজ</a>
                </li>
                <li className="text-[16px] font-semibold hover:text-green-500 mb-2.5 cursor-pointer text-left">
                  <a href="#">ফুলের বীজ</a>
                </li>
              </ul>
            </div>
          </div>
          {CartOpen && (
            <>
              <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-40"></div>
              <h3
                onClick={() => setCartOpen(false)}
                className="fixed top-[10px] mobile:right-[280px] tablet:right-[300px] laptop:right-[340px] computer:right-[340px] text-black text-3xl z-[60] cursor-pointer"
              >
                <GrClose />
              </h3>
            </>
          )}
          {CartOpen && <ProductCard />}
        </Container>
      </section>
    </>
  );
}
