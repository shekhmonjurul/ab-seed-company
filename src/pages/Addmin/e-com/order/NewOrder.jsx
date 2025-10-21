import CreateOrder from "../../../../component/Addmin/e-com/order/CreateOrder";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";
import CreateOrderProvider from "../../../../Context/CreateOreder/CreateOrderProvider";


export default function NewOrder() {
    return (
        <div>
            <OrderNav />
            <CreateOrderProvider>
                  <div className="mt-4 flex justify-center items-center bg-white ">
                <CreateOrder />
            </div>
            </CreateOrderProvider>
        </div>
    );
}
