import Input from "./Input";
import ProductInfo from "./ProductInfo";
import { useState, useEffect } from "react";




export default function CreateOrder() {
    const [subtotal, setSubtotal] = useState(89)
    const [deliverycharge, setDelivercharge] = useState(50)
    const [discount, setDiscount] = useState(0)
    const [advance, setAdvance] = useState(0)
    const [grandtotal, setGrandtotal] = useState(50)
    const [number, setNumber] = useState("01716550180")



    const inputs = [
        { labelname: "Name", variant: "big-width", placeholder: "Customer Name" },
        {
            labelname: "Mobile Number", variant: "big-width", placeholder: "Mobile Number", function: (e) => {
                setNumber(e.target.value)
            }, value: number
        },
        { labelname: "Address", variant: "textarea", placeholder: "Enter address" },
        {
            labelname: "Shipping Note",
            variant: "textarea",
            placeholder: "নোট  দিলে হবে (আমরা নোট ফলো করি)  বিশেষ সমস্যা হলে কল করবেন । ( আমাদের নোট ছাড়া পার্সেল রিটার্ন করবেন না )",
        },
    ];


    useEffect(() => {
        let grandTotal = parseInt(subtotal) + parseInt(deliverycharge) - parseInt(discount) - parseInt(advance)
        setGrandtotal(grandTotal)

    }, [deliverycharge, discount, advance, subtotal])

    const handelSubmit = (e) => {
        e.preventDefault()
    }


    const handelDiscount = (e) => {
        setDiscount(e.target.value)
    }
    const handelSubtotal = (e) => {
        setSubtotal(e.target.value)
    }
    const handelDeliverycharge = (e) => {
        setDelivercharge(e.target.value)
    }
    const handelAdvance = (e) => {
        setAdvance(e.target.value)
    }

    const reciveSubtotal = (data) => {
        setSubtotal(data + subtotal)
    }



    const inputFields = [
        {
            labelname: "Discount",
            variant: "small-width",
            value: discount,
            onChange: handelDiscount,
            type: "number",
        },
        {
            labelname: "Advance",
            variant: "small-width",
            value: advance,
            onChange: handelAdvance,
            type: "number",
        },
        {
            labelname: "Sub Total",
            variant: "small-width",
            value: subtotal,
            onChange: handelSubtotal,
            type: "number",
            disabled: true,
        },
        {
            labelname: "Delivery Charge",
            variant: "small-width",
            value: deliverycharge,
            onChange: handelDeliverycharge,
            type: "number",
        },
        {
            labelname: "Grand Total",
            variant: "small-width",
            value: grandtotal,
            type: "number",
            disabled: true,
        }
    ];


    return (
        <div>
            <form action="" method="get" onSubmit={handelSubmit}>
                <div className="p-4 bg-white text-black">
                    {/* user details       */}
                    <div className="flex flex-wrap justify-center items-center gap-x-4 text-black font-bold w-[900px]">
                        {inputs.map((input, index) => (
                            <div key={index}>
                                <Input
                                    variant={input.variant}
                                    placeholder={input.placeholder}
                                    labelname={input.labelname}
                                    onChange={input?.function}
                                    value={input?.value}
                                />
                            </div>
                        ))}
                    </div>

                    {/* product info */}
                    <div className="my-4 flex gap-4 ">
                        {/* add product */}
                        <div className="border-gray-200 border shadow rounded-2xl p-4">
                            <h1>Ordered Products</h1>
                            <div className="mt-4">
                                <div className="w-[500px] h-[500px] overflow-scroll flex flex-col gap-4">
                                    <ProductInfo variant={""} sendData={reciveSubtotal} />
                                    {/* <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo />
                                           <ProductInfo /> */}
                                </div>
                            </div>

                        </div>

                        {/* click to add product */}
                        <div className="border p-2 drop-shadow border-gray-200 rounded-2xl">
                            <h1>Click To Add Products</h1>
                            <div className="flex gap-4 justify-around items-center mt-4 ">
                                <Input
                                    variant="small-width"
                                    labelname={"Code/SKU"}
                                    placeholder={"Type to Search"}
                                />
                                <Input
                                    variant="small-width"
                                    labelname={"Name"}
                                    placeholder={"Type to Search"}
                                />

                            </div>
                            <div className="mt-4 flex flex-col gap-2 h-[450px] overflow-scroll transition">
                                <button type="button" className="hover:scale-102 transition">
                                    <ProductInfo variant={"info"} />
                                </button>
                                <button type="button" className="hover:scale-102 transition">
                                    <ProductInfo variant={"info"} />
                                </button>
                                <button type="button" className="hover:scale-102 transition">
                                    <ProductInfo variant={"info"} />
                                </button>
                                <button type="button" className="hover:scale-102 transition">
                                    <ProductInfo variant={"info"} />
                                </button>
                                <button type="button" className="hover:scale-102 transition">
                                    <ProductInfo variant={"info"} />
                                </button>
                                <button type="button" className="hover:scale-102 transition">
                                    <ProductInfo variant={"info"} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start gap-4 my-6">
                        {inputFields.map((input, index) => (
                            <Input
                                key={index}
                                labelname={input.labelname}
                                variant={input.variant}
                                value={input.value}
                                onChange={input.onChange}
                                type={input.type}
                                disabled={input.disabled || false}
                            />
                        ))}

                    </div>
                    <button type="submit" className="drop-shadow-2xl hover:drop-shadow hover:bg-amber-300 bg-green-600 p-4 text-2xl w-2xl"
                        style={{
                            borderRadius: "8px"
                        }}
                    >
                        Create Order
                    </button>
                </div>
            </form>
        </div>
    )
}