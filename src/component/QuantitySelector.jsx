import { useState } from "react"

export default function QuantitySelector(){
    const [quntity, setQuntity] = useState(1)
    const handelMinus = ()=>{
        setQuntity(quntity-1)
    }
     const handelPlus = ()=>{
        setQuntity(quntity+1)
    }
    return (
        <div className="text-black border-green-700 border-2 m-4 w-[200px] rounded-[8px] h-10 flex items-center justify-around font-bold py-4 mobile-quntity">
            <span>পরিমাণ </span>
            <button className="text-3xl" onClick={handelMinus}>-</button>
            <input type="number" name="quntity" id="quntity" className="w-[35px] h-[30px] px-1 bg-[#dbffcc] text-black rounded-[5px] text-center" min={0}  value={quntity} onChange={()=>{}} />
            <button className="text-3xl" onClick={handelPlus}>+</button>
        </div>
    )
}