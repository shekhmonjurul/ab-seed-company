import { useState } from "react";
import CreateOrder from "../../../../component/Addmin/e-com/order/CreateOrder";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";
import CreateOrderProvider from "../../../../Context/CreateOreder/CreateOrderProvider";
import { Navigate, useNavigate } from "react-router-dom";


export default function NewOrder() {
    return (
        <div>
            <OrderNav />
            <CreateOrderProvider navigateUrl={'/addmin/ecom/order/list'}>
                <div className="mt-4 flex justify-center items-center bg-white ">
                    <CreateOrder />
                </div>
            </CreateOrderProvider>
        </div>
    );
}
