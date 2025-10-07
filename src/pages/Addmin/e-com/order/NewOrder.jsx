import CreateOrder from "../../../../component/Addmin/e-com/order/CreateOrder";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";


export default function NewOrder() {
    return (
        <div>
            <OrderNav />
            <div className="mt-4 flex justify-center items-center bg-white ">
                <CreateOrder />
            </div>
        </div>
    );
}
