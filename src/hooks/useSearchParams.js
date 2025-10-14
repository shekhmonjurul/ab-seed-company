import { useLocation, useParams } from "react-router-dom";

export default function useSearchParams() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const orderID = params.get("orderId")
    return {orderID}
}