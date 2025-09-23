import { useEffect, useState } from "react";
import Input from "../../../../component/Addmin/e-com/order/Input";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";
import ProductInfo from "../../../../component/Addmin/e-com/order/ProductInfo";

const inputs = [
    { labelname: "Name", variant: "big-width", placeholder: "Customer Name" },
    { labelname: "Mobile Number", variant: "big-width", placeholder: "Mobile Number" },
    { labelname: "Address", variant: "textarea", placeholder: "Enter address" },
    {
        labelname: "Shipping Note",
        variant: "textarea",
        placeholder: "নোট  দিলে হবে (আমরা নোট ফলো করি)  বিশেষ সমস্যা হলে কল করবেন । ( আমাদের নোট ছাড়া পার্সেল রিটার্ন করবেন না )",
    },
];

export default function NewOrder() {
    const [subtotal, setSubtotal] = useState(89)
    const [deliverycharge, setDelivercharge] = useState(50)
    const [discount, setDiscount] = useState(0)
    const [advance,setAdvance] = useState(0)
    const [grandtotal, setGrandtotal] = useState(50)


    useEffect(()=>{
        let grandTotal = parseInt(subtotal) + parseInt(deliverycharge) - parseInt(discount) - parseInt(advance)
        setGrandtotal(grandTotal)

    }, [deliverycharge, discount, advance, subtotal])
    
    const handelSubmit = (e) => {
        e.preventDefault()
    }


    const handelDiscount = (e)=>{
        setDiscount(e.target.value)
    }
    const handelSubtotal = (e)=>{
        setSubtotal(e.target.value)
    }
    const handelDeliverycharge = (e)=>{
        setDelivercharge(e.target.value)
    }
    const handelAdvance = (e)=>{
        setAdvance(e.target.value)
    }

    const reciveSubtotal = (data)=>{
        setSubtotal(data+subtotal)
    }

    return (
        <div>
            <OrderNav />
            <form action="" method="get" onSubmit={handelSubmit}>
                <div className="flex flex-col justify-center items-center bg-white mt-4 p-4 text-black">

                    {/* user details       */}
                    <div className=" text-black text-[15px] font-bold flex flex-wrap justify-around items-center gap-4 w-[900px]">
                        {inputs.map((input, index) => (
                            <div className="flex-0 basis-[45%]" key={index}>
                                <Input
                                    variant={input.variant}
                                    placeholder={input.placeholder}
                                    labelname={input.labelname}
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
                                    <ProductInfo variant={""} sendData={reciveSubtotal}/>
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
                        <Input
                            labelname={"Discount"}
                            variant="small-width"
                            value ={discount}
                            onChange={handelDiscount}
                            type="number"
                        />

                        <Input
                            labelname={"Advance"}
                            variant="small-width"
                            value={advance}
                            onChange={handelAdvance}
                            type="number"
                        />

                        <Input
                            labelname={"Sub Total"}
                            variant="small-width"
                            value={subtotal}
                            onChange={handelSubtotal}
                            type="number"
                            disabled
                        />

                      

                        <Input
                            labelname={"Delivery Charge"}
                            variant="small-width"
                            value={deliverycharge}
                            type="number"
                            onChange={handelDeliverycharge}
                        />

                        <Input
                            labelname={"Grand Total"}
                            variant="small-width"
                            value={grandtotal}
                            type="number"
                            disabled
                        />
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
    );
}
