import React from 'react';
import { GrClose } from 'react-icons/gr';

const ProductCard = ({ cart }) => {
  return (
    <>
      <section className="absolute top-0 right-0 bg-white w-[400px] h-screen z-[50] pt-[60px] pl-[20px]">
        <div className="h-[400px] overflow-y-scroll overflow-hidden">
          {cart.map((item, index) => (
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
                  <h5 className="text-[16px] font-normal text-gray-600 w-[220px]">
                    {item.name}
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-[4px] justify-center my-[20px]">
                <h5 className="text-2xl font-semibold text-gray-600">3</h5>
                <span className="text-2xl font-semibold text-gray-600">x</span>
                <h5 className="text-2xl font-semibold text-gray-600">
                  {item.price}
                </h5>
                <span
                  onClick={() => {
                    const cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const updatedCart = cart.filter(
                      cartItem => cartItem.id !== item.id
                    );
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                    window.dispatchEvent(new Event('cartUpdated'));
                  }}
                  className="w-[35px] h-[35px] font-semibold text-2xl text-gray-800 rounded-full border border-gray-600 flex items-center justify-center ml-[50px]"
                >
                  <GrClose />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-2xl font-bold text-gray-600 border-b border-gray-700 p-[10px]">
            Subtotal : <span> 45৳</span>
          </h4>
          <button className="text-[16px] font-semibold text-white bg-green-500 py-[10px] px-[120px] cursor-pointer rounded-md mt-[20px]">
            Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
