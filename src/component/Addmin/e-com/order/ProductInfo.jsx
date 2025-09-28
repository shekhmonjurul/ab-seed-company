import { useEffect, useState } from "react"
import Input from "./Input"

export default function ProductInfo({ variant, sendData}) {
    const [total, setTotal] = useState(90)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(1)
   

    const sendSubtotal = () => {
        sendData(total)
    }

    useEffect(() => {
        setTotal(quantity * price)
        // sendSubtotal()
        // sendData(total)
    }, [quantity, price])




    if (variant === "info") {
        return (

            <div>
                {/* product info */}
                <div className="w-full flex gap-3 bg-white p-4 rounded-2xl drop-shadow-xl  transition cursor-pointer">

                    <div className="w-[130px] h-[100px] rounded-[8px]">
                        <img
                            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                            alt="product imge"
                            className="w-full h-full rounded-[8px]"
                        />
                    </div>

                    <div className="text-left text-[12px]">
                        <p className="font-bold text-[13px]">Arabian Sosha, Dutch Type Arabian shosa </p>
                        <p className="w-[80%] text-justify text-[9px]">
                            Arabian Cucumber Dutch Type - এরাবিয়ান শসা ( আনুমানিক ৪০+ বীজ )
                        </p>
                        <p className="text-blue-700">SKU: Arabian Sosha</p>
                        <div className="flex justify-between mr-4 text-gray-600 font-bold">
                            <p>Price: 89 BDT</p>
                            <p>Stock: 127</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div className="bg-white p-4 border-gray-300 border-2 shadow rounded-[8px]">
            {/* order product */}
            <div className="flex gap-3 ">
                <div className="w-[130px] h-[100px] rounded-[8px]">
                    <img
                        src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                        alt="product imge"
                        className="w-full h-full rounded-[8px]"
                    />
                </div>

                <div className="text-left">
                    <p className="font-bold">
                        Arabian Sosha, Dutch Type Arabian shosa
                    </p>
                    <p className="w-[80%] text-justify text-[9px]">
                        Arabian Cucumber Dutch Type - এরাবিয়ান শসা ( আনুমানিক ৪০+ বীজ ) প্রতি
                        গিটে গিটে ধরে, মাত্র ৩০–৪৫ দিনে ফলন
                    </p>
                    <p className="text-blue-700 text-[9px]">SKU: Arabian Sosha</p>
                    <div className="flex justify-between mr-4 text-gray-600 font-bold">
                        <p>Price: 89 BDT</p>
                        <p>Stock: 127</p>
                    </div>
                </div>
            </div>

            <div className="mt-1 mx-4 flex justify-between  gap-4 items-center">
                <ProductController name={"Quantity"} getValue={setQuantity} />
                <ProductController name={"Price"} getValue={setPrice} />
                <div className="mb-4">
                    <Input
                        variant="small-width"
                        labelname={"Total"}
                        placeholder={"Enter total"}
                        disabled
                        value={total}
                    />
                </div>
            </div>
        </div>

    )
}

function ProductController({ name, getValue }) {
    const [value, setValue] = useState(1)
    let handelMinus = () => {
        if (value > 1) {
            const newValue = value - 1
            setValue(newValue)
            getValue(newValue)
        }
    }
    let handelPluse = () => {
        const newValue = value + 1
        setValue(newValue)
        getValue(newValue)
    }
    let handelChange = (e) => {
        const newValue = Number(e.target.value) || 0
        setValue(newValue)
        getValue(newValue)
    }

    return (
        <div className="w-[150px] h-20 scale-110 text-left">
            <h6>{name}</h6>
            <div className="mt-2 flex items-center">
                <button
                    className="text-[20px] mr-[1px] border-gray-200 border-2 px-2"
                    style={{ borderRadius: "5px 0 0 5px" }}
                    onClick={handelMinus}
                >
                    -
                </button>

                <input
                    type="number"
                    name="controller"
                    id="controller"
                    className="border-gray-200 border-2 text-[20px] w-[50%] text-center"
                    value={value}
                    onChange={handelChange}
                    min="1"
                />

                <button
                    className="text-[20px] ml-[1px] border-gray-200 border-2 px-2"
                    style={{ borderRadius: "0 5px 5px 0" }}
                    onClick={handelPluse}
                >
                    +
                </button>
            </div>
        </div>
    )
}
