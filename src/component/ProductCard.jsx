import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import QuantitySelector from './QuantitySelector';

const ProductCard = ({ cart }) => {
  let [summary, setSummary] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cartSummary')) || [];
    setSummary(data);
  }, []);

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
                  <QuantitySelector productId={item.id} />
                  <h5 className="text-2xl font-semibold text-gray-600">
                    {getQty(item.id)}
                  </h5>
                  <span className="text-2xl font-semibold text-gray-600">
                    x
                  </span>
                  <h5 className="text-2xl font-semibold text-gray-600">
                    {item.price}
                  </h5>
                  <span
                    onClick={() => {
                      const cart =
                        JSON.parse(localStorage.getItem('cart')) || [];
                      const updatedCart = cart.filter(
                        cartItem => cartItem.id !== item.id
                      );
                      localStorage.setItem('cart', JSON.stringify(updatedCart));

                      const summary =
                        JSON.parse(localStorage.getItem('cartSummary')) || [];
                      const updatedSummary = summary.filter(
                        cartItem => cartItem.id !== item.id
                      );
                      localStorage.setItem(
                        'cartSummary',
                        JSON.stringify(updatedSummary)
                      );

                      window.dispatchEvent(new Event('cartUpdated'));
                    }}
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
