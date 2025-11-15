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
  let [cartData, setcartData] = useState([]);

  useEffect(() => {
    const updateTotal = () => {
      const summary = JSON.parse(localStorage.getItem('cartSummary')) || [];

      const totalQty = summary.reduce((acc, item) => acc + item.qty, 0);
      const totalPrice = summary.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );

      setCount(totalQty);
      setcartData(summary);
      setTotal(totalPrice);
    };

    updateTotal();

    window.addEventListener('selectItem', updateTotal);

    return () => {
      window.removeEventListener('selectItem', updateTotal);
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

  const actionbuttons = [
    { name: 'কমিউনিটি', href: '/comunity', icon: '/comunity.svg' },
    { name: 'সকল পণ্য', href: '/allproduct', icon: '/allproduct.svg' },
    { name: 'অর্ডার কার্ট', href: '/ordercart', icon: '/ordercart.svg' },
    { name: 'নতুন অফার', href: '/newoffer', icon: '/newoffer.svg' },
    { name: 'নোটিফিকেশন', href: '/notifaction', icon: '/notifaction.svg' },
    { name: 'প্রোফাইল', href: '/profile', icon: '/profile.svg' },
  ];

  let handleCart = () => {
    setCartOpen(prev => !prev);
  };
  return (
    <>
      <section className="bg-green-300 py-4 border-b-2 border-red-600">
        <Container>
          <div>
            <div className="mobile:flex tablet:flex laptop:flex computer:flex  mobile:flex-wrap tablet:flex-wrap laptop:flex-row computer:flex-row items-center justify-between ">
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
                className="flex items-center gap-4 border border-gray-600 px-[26px] py-[10px] rounded-md cursor-pointer relative"
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
                className="flex items-center bg-green-700 text-white mobile:px-[68px] tablet:px-[100px] laptop:px-[100px] mobile:mt-5 tablet:mt-5 laptop:mt-0 computer:mt-0 mobile:mx-auto tablet:mx-auto laptop:mx-0 computer:mx-0 computer:px-[100px] py-[10px] rounded-md cursor-pointer hover:bg-green-600"
              >
                <span className="mr-2 text-[20px]">
                  <MdOutlineShoppingCartCheckout />
                </span>
                <span>অডার কনফার্ম করুন</span>
              </div>
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
                {actionbuttons.map((action, index) => (
                  <li key={index}>
                    <a
                      className="text-[16px] flex items-center gap-4 mb-2 font-bold text-black"
                      href="#"
                    >
                      <div className="w-[30px] h-[30px]">
                        <img
                          className="w-full h-full object-cover"
                          src={action.icon}
                          alt=""
                        />
                      </div>
                      {action.name}
                    </a>
                  </li>
                ))}
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
          {CartOpen && <ProductCard cart={cartData} />}
        </Container>
      </section>
    </>
  );
}
