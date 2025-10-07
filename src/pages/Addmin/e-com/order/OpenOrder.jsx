import { useSearchParams } from "react-router-dom";
import CreateOrder from "../../../../component/Addmin/e-com/order/CreateOrder";
import DeliveryCard from "../../../../component/Addmin/e-com/order/DelivaryCard";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";
import OrderSummary from "../../../../component/Addmin/e-com/order/OrderSummary";

export default function OpenOrder() {
    const [serachprams, setSearchprams] = useSearchParams()
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
            <div className="w-full flex justify-center items-center bg-white">
                <CreateOrder />
            </div>
        </div>
    )
}