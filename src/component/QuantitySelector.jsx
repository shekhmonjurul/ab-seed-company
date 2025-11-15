import { useState, useEffect } from 'react';

export default function QuantitySelector({ productId }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cartSummary = JSON.parse(localStorage.getItem('cartSummary')) || [];
    const product = cartSummary.find(item => item.id === productId);
    if (product) {
      setQuantity(product.qty);
    }
  }, [productId]);

  const updateLocalStorage = newQty => {
    const cartSummary = JSON.parse(localStorage.getItem('cartSummary')) || [];
    const updatedSummary = cartSummary.map(item => {
      if (item.id === productId) {
        return { ...item, qty: newQty, totalPrice: newQty * item.price };
      }
      return item;
    });
    localStorage.setItem('cartSummary', JSON.stringify(updatedSummary));
  };

  const handelMinus = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      updateLocalStorage(newQty);
    }
  };

  const handelPlus = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateLocalStorage(newQty);
  };

  return (
    <div className="text-black border-green-700 border-2 mobile:m-0 tablet:m-4 laptop:m-4 computer:m-4 mobile:w-auto tablet:w-[200px] laptop:w-[200px] computer:w-[200px] rounded-[8px] h-10 flex items-center justify-around font-bold mobile:p-[5px] mobile:py-0 tablet:py-2 laptop:py-4 computer:py-4  mobile-quntity">
      <span>পরিমাণ </span>
      <button className="text-3xl" onClick={handelMinus}>
        -
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        className="w-[35px] h-[30px] px-1 bg-[#dbffcc] text-black rounded-[5px] text-center"
        min={1}
        value={quantity}
        onChange={e => {
          const val = Math.max(1, parseInt(e.target.value) || 1);
          setQuantity(val);
          updateLocalStorage(val);
        }}
      />
      <button className="text-3xl" onClick={handelPlus}>
        +
      </button>
    </div>
  );
}
