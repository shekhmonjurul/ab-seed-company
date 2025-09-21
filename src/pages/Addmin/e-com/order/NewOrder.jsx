import Input from "../../../../component/Addmin/e-com/order/Input";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";
import ProductInfo from "../../../../component/Addmin/e-com/order/ProductInfo";

const inputs = [
    { labelname: "Mobile Number", variant: "big-width", placeholder: "Mobile Number" },
    { labelname: "Name", variant: "big-width", placeholder: "Customer Name" },
    { labelname: "Address", variant: "textarea", placeholder: "Enter address" },
    { 
        labelname: "Shipping Note", 
        variant: "textarea", 
        placeholder: "নোট  দিলে হবে (আমরা নোট ফলো করি)  বিশেষ সমস্যা হলে কল করবেন । ( আমাদের নোট ছাড়া পার্সেল রিটার্ন করবেন না )", 
        value: "নোট  দিলে হবে (আমরা নোট ফলো করি)  বিশেষ সমস্যা হলে কল করবেন । ( আমাদের নোট ছাড়া পার্সেল রিটার্ন করবেন না )" 
    },
];

export default function NewOrder() {
    return (
        <div>
            <OrderNav />
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
            <div className="mt-4">
                <ProductInfo/>
            </div>
         </div>
        </div>
    );
}
