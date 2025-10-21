
import CreateOrder from "../../../../component/Addmin/e-com/order/CreateOrder";
import DeliveryCard from "../../../../component/Addmin/e-com/order/DelivaryCard";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";
import useSearchParams from "../../../../hooks/useSearchParams";
import useFetch from "../../../../hooks/useFetch"
import CreateOrderProvider from "../../../../Context/CreateOreder/CreateOrderProvider";
import { useEffect } from "react";


export default function OpenOrder() {
    const { orderID } = useSearchParams()
    const { data, error } = useFetch(`http://localhost:5000/api/weborders/${orderID}`, { method: "get" }, [])
    // const { currier, currierError } = useFetch(`http://localhost:5000/api/fraudchecker`, { method: "get", body: JSON.stringify(data?.order?.billing?.phone) })

    const customer = {
        name: data?.order?.billing?.first_name || "",
        phone: data?.order?.billing?.phone || "",
        address: data?.order?.billing?.address_1 || "",
        note: "",
        // productItems: data?.order?.line_items || []
    }
    return (
        <div>
            <OrderNav />
            <div className="mt-4 bg-white p-4 flex gap-4 justify-center items-center">
                <DeliveryCard />
            </div>
            <CreateOrderProvider customer={customer} orderItems={data?.order?.line_items || []}>
                <div className="w-full flex justify-center items-center bg-white">
                    <CreateOrder/>
                </div>
            </CreateOrderProvider>
        </div>
    )
}