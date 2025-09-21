import { useState } from "react"
import Input from "./Input"

export default function ProductInfo() {
    const [total, setTotal] = useState(90)

    return (
        <div className="bg-white p-4 ">
            <h1 className="mb-4">Product Info</h1>

            {/* product info */}
            <div className="flex gap-3 bg-white p-4 rounded-2xl drop-shadow-2xl scale-70 hover:scale-74 transition cursor-pointer">
                <div className="w-[140px] h-[135px] rounded-[8px]">
                    <img
                        src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                        alt="product imge"
                        className="w-full h-full rounded-[8px]"
                    />
                </div>

                <div>
                    <h1 className="font-bold text-[20px]">
                        Arabian Sosha, Dutch Type Arabian shosa
                    </h1>
                    <p className="w-[50%] text-justify text-[12px]">
                        Arabian Cucumber Dutch Type - এরাবিয়ান শসা ( আনুমানিক ৪০+ বীজ ) প্রতি
                        গিটে গিটে ধরে, মাত্র ৩০–৪৫ দিনে ফলন
                    </p>
                    <h2 className="text-blue-700 text-[12px]">SKU: Arabian Sosha</h2>
                    <div className="flex justify-between mr-4 text-gray-600 font-bold text-[20px]">
                        <h2>Price: 89 BDT</h2>
                        <h2>Stock: 127</h2>
                    </div>
                </div>
            </div>

            {/* order product */}
            <div className="mt-4 bg-white p-4 border-gray-300 border-2 drop-shadow rounded-[8px]">
                <div className="flex gap-3 ">
                    <div className="w-[140px] h-[135px] rounded-[8px]">
                        <img
                            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                            alt="product imge"
                            className="w-full h-full rounded-[8px]"
                        />
                    </div>

                    <div>
                        <h1 className="font-bold text-[20px]">
                            Arabian Sosha, Dutch Type Arabian shosa
                        </h1>
                        <p className="w-[50%] text-justify text-[12px]">
                            Arabian Cucumber Dutch Type - এরাবিয়ান শসা ( আনুমানিক ৪০+ বীজ ) প্রতি
                            গিটে গিটে ধরে, মাত্র ৩০–৪৫ দিনে ফলন
                        </p>
                        <h2 className="text-blue-700 text-[12px]">SKU: Arabian Sosha</h2>
                        <div className="flex justify-between mr-4 text-gray-600 font-bold text-[20px]">
                            <h2>Price: 89 BDT</h2>
                            <h2>Stock: 127</h2>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mx-4 flex justify-between items-center">
                    <ProductController name={"Quantity"} setTotal={setTotal} price={90} />
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
        </div>
    )
}

function ProductController({ name, setTotal, price }) {
    const [value, setValue] = useState(1)
    let handelMinus = () => { }
    let handelPluse = () => { }
    let handelChange = () => { }
    if (name === "Quantity") {
        handelMinus = () => {
            if (value > 1) {
                const newValue = value - 1
                setValue(newValue)
                setTotal(newValue * price)
            }
        }

        handelPluse = () => {
            const newValue = value + 1
            setValue(newValue)
            setTotal(newValue * price)
        }

        handelChange = (e) => {
            const newValue = Number(e.target.value) || 0
            setValue(newValue)
            setTotal(newValue * price)
        }
    }

    if (name === "Price") {
        handelMinus = () => {
            if (value > 1) {
                const newValue = value - 1
                setValue(newValue)
                setTotal(newValue * price)
            }
        }

        handelPluse = () => {
            const newValue = value + 1
            setValue(newValue)
            setTotal(newValue * price)
        }

        handelChange = (e) => {
            const newValue = Number(e.target.value) || 0
            setValue(newValue)
            setTotal(newValue * price)
        }
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
