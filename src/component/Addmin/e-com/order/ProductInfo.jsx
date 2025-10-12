import { useEffect, useState } from "react"
import Input from "./Input"

export default function ProductInfo({ variant, info = {}, getValue }) {
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(Number(info?.price) || 0)


    useEffect(() => {
        const newTotal = quantity * price
        setTotal(newTotal)
        if (typeof getValue === "function") {
            getValue(newTotal)
        }
    }, [quantity, price])


    if (variant === "button") {
        return (

            <div>
                {/* product info */}
                <div className="w-full flex gap-3 bg-white p-4 rounded-2xl drop-shadow-xl  transition cursor-pointer">

                    <div className={`w-[130px] h-[100px] rounded-[8px]`}>
                        <img
                            src={info?.images[0].src || "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"}
                            alt={info?.images[0].alt || "product imge"}
                            className="w-full h-full rounded-[8px]"
                            srcSet={info?.images[0].srcset}
                        />
                    </div>

                    <div className="text-left text-[12px]">
                        <p className="font-bold text-[12px] w-45 truncate ">
                            {info?.name || `Arabian Sosha, Dutch Type Arabian shosa`}
                        </p>
                        <p className="w-[80%] text-justify text-[9px]">
                            {info?.type || `Arabian Cucumber Dutch Type - এরাবিয়ান শসা ( আনুমানিক ৪০+ বীজ )`}
                        </p>
                        <p className="text-blue-700">SKU: {info?.sku || `SKU: Arabian Sosha`}</p>
                        <div className="flex justify-between mr-4 text-gray-600 font-bold">
                            <p>Price: {`${info?.price} BDT` || `89 BDT`}</p>
                            <p>Stock: {info?.stock || 0}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    } else {
        return (
            <div className="bg-white p-4 border-gray-300 border-2 shadow rounded-[8px]">
                {/* order product */}
                <div className="flex gap-3 ">
                    <div className="w-[130px] h-[100px] rounded-[8px]">
                        <img
                            src={info?.images[0].src || "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"}
                            alt={info?.images[0].alt || "product imge"}
                            srcSet={info?.images[0].srcset}
                            className="w-full h-full rounded-[8px]"
                        />
                    </div>

                    <div className="text-left">
                        <p className="font-bold w-70 truncate">
                            {info?.name || `Arabian Sosha, Dutch Type Arabian shosa`}
                        </p>
                        <p className="w-[80%] text-justify text-[9px]">
                            {info?.type || `Arabian Cucumber Dutch Type - এরাবিয়ান শসা ( আনুমানিক ৪০+ বীজ )`}
                        </p>
                        <p className="text-blue-700 text-[9px]">SKU: {info?.sku || `SKU: Arabian Sosha`}</p>
                        <div className="flex justify-between mr-4 text-gray-600 font-bold">
                            <p>Price: {`${info?.price} BDT` || `89 BDT`}</p>
                            <p>Stock: {info?.stock || 0}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-1 mx-4 flex justify-between  gap-4 items-center">
                    <ProductController name={"Quantity"} defualtValue={"1"} getValue={setQuantity} />
                    <ProductController name={"Price"} defualtValue={info?.price} getValue={setPrice} />
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

}

function ProductController({ name, defualtValue, getValue }) {
    const [value, setValue] = useState(Number(defualtValue) || 0) //ui er jono init value
    const handleCunter = (name) => {
        let newValue = 1
        if (name === "pluse") {
            newValue = value + 1
        } else {
            newValue = value - 1
            if (value === 1) return
        }
        setValue(newValue)
        getValue(newValue)
        return
    } // handle pluse and minus funtion
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
                    className="text-[20px] mr-[1px] border-gray-200 border-2 px-2 cursor-pointer"
                    style={{ borderRadius: "5px 0 0 5px" }}
                    onClick={() => handleCunter("")}
                >
                    -
                </button>

                <input
                    type="number"
                    className="border-gray-200 border-2 text-[20px] w-[50%] text-center"
                    value={value}
                    onChange={handelChange}
                    min="1"
                />

                <button
                    className="text-[20px] ml-[1px] border-gray-200 border-2 px-2 cursor-pointer"
                    style={{ borderRadius: "0 5px 5px 0" }}
                    onClick={() => handleCunter("pluse")}
                >
                    +
                </button>
            </div>
        </div>
    )
}
