import { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import QuantitySelector from '../QuantitySelector';

export default function ProductDetails({
  productId,
  allProducts,
  open,
  onClose,
}) {
  console.log('product id: ', productId);
  const [showAnim, setShowAnim] = useState(false);
  useEffect(() => {
    if (open) {
      setTimeout(() => setShowAnim(true), 10);
    } else {
      setShowAnim(false);
    }
  }, [open]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center
        bg-black/10 transition-opacity duration-300"
    >
      <div
        className={`
            relative m-4 p-4 computer:w-2/5 laptop:w-2/5 computer:min-w-[40%] laptop:min-w-[40%] computer:max-w-[40%] laptop:max-w-[40%] mobile:w-full
            tablet:w-full mobile:max-w-auto tablet:max-w-auto rounded-lg bg-white shadow-sm
            transform transition-all duration-300
            ${showAnim ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          `}
      >
        <div className="pb-4 text-xl font-medium flex items-center justify-between">
          Product Details
          <span className="cursor-pointer">
            <MdOutlineClose size={28} onClick={onClose} />
          </span>
        </div>
        <div className="w-full h-[400px] overflow-y-scroll flex flex-col gap-3 items-center mx-auto border-t p-[20px]">
          <div className="mb-3.5">
            <img className="w-full h-full" src="/img.jpg" alt="" />
            <h5 className="text-[#737373] text-md my-2">দেশি, হাইব্রিড</h5>
            <h3 className="text-2xl font-semibold mb-2">
              'হাইব্রিড সুবর্ণ লাউ'
            </h3>
            <h4 className="mx-auto text-justify font-semibold mb-2.5">
              (১০ গ্রাম/ ৫০-৬০ বীজ) বৈশিষ্ট্য: লম্বাটে সবুজ ও সুষম আকৃতির, খেতে
              নরম ও সুস্বাদু।
            </h4>
            <div className="flex items-center justify-center mx-auto">
              <del className="text-md font-bold text-red-500 mx-4">220 BDT</del>
              <h4 className="text-md font-bold"> 120 BDT</h4>
            </div>
            <QuantitySelector id={productId} allProducts={allProducts} />
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button
            onClick={onClose}
            className="py-2 px-4 rounded-md text-slate-600 hover:bg-slate-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
