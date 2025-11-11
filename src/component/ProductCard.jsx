import Icon from "@mui/material/Icon";
import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import QuantitySelector from "./QuantitySelector";
export default function ProductCard({ imgsrc, catagoryname, shortdecription, price }) {

  const [showquntity, setShowquntity] = useState(false)
  
  const handelCart = ()=>{
    setShowquntity(true)
  }

  return (
    <div className="my-4 w-[400px] mobail-product-card flex flex-col items-center rounded-lg text-black bg-white mobile-card shadow-[inset_1px_1px_8px_rgba(34,197,94,0.6)]">
       <img
        src={imgsrc || "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"}
        alt="Product Image"
        className="w-full h-[280px] object-cover rounded-t-md img-size"
      />
      
      <div className="flex flex-col gap-2 justify-center items-center  my-4 p-2">
        <h5 className="text-[#737373]">{catagoryname || `দেশি, হাইব্রিড, উচ্চফলনশীল
`}</h5>
        <h3 className="text-2xl font-semibold ">হাইব্রিড সুবর্ণ লাউ</h3>
        <p className="text-center text-[#737373]">{shortdecription || `(১০ গ্রাম/ ৫০-৬০ বীজ) বৈশিষ্ট্য: ফল লম্বাটে সবুজ ও
সুষম আকৃতির, গায়ে সাদা ছোপ ছোপ দাগ, ৪০-৪৫ দিনে
     ফল সংগ্রহযোগ্য, গড় ওজন ২.৫-৩ কেজি, দৈর্ঘ্য ৪০-৪৫
সেমি, খেতে নরম ও সুস্বাদু।`}</p>
        <div className="flex justify-around items-center">
          <del className="text-md font-bold text-[#CA7572] mx-4">320 BDT</del>
          <h4 className="text-md font-bold ">{`${price || 120} BDT`}</h4>
        </div>

        <div className="flex items-center justify-between mt-3">
          <button className="">
            <img src="/heart.svg" width={35} alt="cart" />
          </button>
          {
            showquntity? <QuantitySelector/> : <button className="flex justify-center items-center  mx-2 p-2 bg-[#d9ffd1]" style={{
            fontSize: "12px",
            borderRadius: 8, 
            border: "2px solid #097b0a"
          }} onClick={handelCart}>
            <img src="/ordercart.svg" alt="order cart" width={35} className="mx-2" />
           <span className="size-font"> কার্টে যুক্ত করুন</span>
          </button>
          }
          <button className="bg-[#097b0a] text-[#dbffcc] flex items-center p-1 mt-2" style={{
            border: "1px solid #dbffcc ",
            outline: "2px solid #097b0a",
            borderRadius: 8,
            fontSize: "12px"
          }}>
            <span className="size-font">বিস্তারিত</span>
            <Icon component={IoIosArrowDropright} sx={{
              fontSize: 30
            }} />
          </button>
        </div>
      </div>
    </div>
  );
}
