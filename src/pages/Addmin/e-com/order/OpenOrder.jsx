import CreateOrder from "../../../../component/Addmin/e-com/order/CreateOrder";
import DeliveryCard from "../../../../component/Addmin/e-com/order/DelivaryCard";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";
import OrderSummary from "../../../../component/Addmin/e-com/order/OrderSummary";

export default function OpenOrder() {
    return (
        <div>
            <OrderNav />
            <div className="mt-4 bg-white p-4 flex gap-4 justify-center items-center">
                <DeliveryCard />
                <DeliveryCard />
                <DeliveryCard />
                <DeliveryCard />
                <DeliveryCard />
            </div>
            <div className="w-full flex flex-wrap bg-white">
                <CreateOrder />
                <div className="w-full h-full">
                    <OrderSummary/>
                </div>
            </div>
        </div>
    )
}