import { Link } from "react-router-dom";
import OrderMangement from "../../../../component/Addmin/e-com/order/OrderMangement";
import { useEffect, useState } from "react";



// const rows = [
//     {
//         id: 1,
//         ordered: "2025-09-21T15:30:00Z",
//         status: "pending",
//         customer: {
//             number: "017XXXXXXXX",
//             name: "Rahim Uddin",
//             address: "Dhaka, Bangladesh"
//         },
//         note: "Please deliver fast",
//         orderitems: [
//             { img: "/images/product1.png", productname: "Laptop" },
//             { img: "/images/product2.png", productname: "Mouse" }
//         ],
//         successrate: 90,
//         tag: ["electronics", "priority"],
//         site: "example.com",
//         action: "view"
//     },
//     {
//         id: 2,
//         ordered: "2025-09-20T11:00:00Z",
//         status: "delivered",
//         customer: {
//             number: "018XXXXXXXX",
//             name: "Karim Mia",
//             address: "Chattogram, Bangladesh"
//         },
//         note: "Gift wrap this item",
//         orderitems: [
//             { img: "/images/product3.png", id: 3, productname: "Mobile Phone" }
//         ],
//         successrate: 100,
//         tag: ["mobile", "gift"],
//         site: "shop.com",
//         action: "edit"
//     }
// ];

const statusbuttons = [
    { name: "PROCESSING", number: 9, params: "PROCESSING" },
    { name: "INCOMPLETE", number: 37, params: "INCOMPLETE" },
    { name: "GOOD_BUT_NO_RESPONSE", number: 23, params: "GOOD_BUT_NO_RESPONSE" },
    { name: "NO_RESPONSE", number: 45, params: "NO_RESPONSE" },
    { name: "ADVANCE_PAYMENT", number: 12, params: "ADVANCE_PAYMENT" },
    { name: "ON_HOLD", number: 42, params: "ON_HOLD" },
    { name: "COMPLETE", number: 21622, params: "COMPLETE" },
    { name: "CANCEL", number: 14510, params: "CANCEL" },
    { name: "ALL", number: 36300, params: "ALL" },
];

export default function WebOrder() {
    const [rows, setRows] = useState([])
    const [filterRow, setFilterrow] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)


    const columns = [
        { field: "id", headerName: "ID", width: 80 },
        { field: "ordered", headerName: "Ordered Time", width: 200 },
        { field: "note", headerName: "Note", width: 120 },
        {
            field: "customer",
            headerName: "Customer",
            width: 220,
            renderCell: (params) => (
                <div>
                    <div><b>{params.row.customer?.name}</b></div>
                    <div>{params.row.customer?.number}</div>
                    <div>{params.row.customer?.address}</div>
                </div>
            )
        },
        {
            field: "orderitems",
            headerName: "Order Items",
            width: 250,
            renderCell: (params) => (
                <div>
                    {params.row.orderitems.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "9px",
                                textAlign: "justify",
                                margin: "5px 0 5px 0"

                            }}>
                            <img
                                src={item?.image?.src}
                                alt={item?.name}
                                width="40"
                                style={{
                                    marginRight: 10,
                                    borderRadius: 5

                                }}
                            />
                            {item?.name}
                        </div>
                    ))}
                </div>
            )
        },
        { field: "site", headerName: "Site", width: 160 },
        {
            field: "action",
            headerName: "Action",
            width: 180,
            renderCell: (params) => (
                <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "center" }}>
                    <Link to={`/addmin/ecom/order/open?orderId=${params?.row?.id || 0}`}>Open</Link>
                </div>
            )
        }
    ];
    const handelChange = (event) => {
        const input = event.target.value
        setSearch(input)
    }

useEffect(() => {
    setLoading(true)
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchOrders = async () => {
        try {
            const res = await fetch("https://ab-seed-server-1.onrender.com/api/weborders", { signal });
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            
            const data = await res.json();

            const orders = data?.data?.map((order, index) => ({
                id: order?.id || index + 1,
                ordered: order?.date_created_gmt,
                customer: {
                    name: `${order?.billing?.first_name || ""} ${order?.billing?.last_name || ""}`.trim(),
                    number: order?.billing?.phone || "N/A",
                    address: `${order?.billing?.address_1 || ""} ${order?.billing?.address_2 || ""}`.trim()
                },
                note: order?.customer_note || "",
                orderitems: order?.line_items || []
            })) || [];

            setRows(orders);
            setFilterrow(orders);
            setLoading(false)
        } catch (error) {
            if (error.name !== "AbortError") {
                console.error("Failed to fetch orders:", error);
            }
        } finally {
            setLoading(true)
            console.log("hi componet", loading)
        }
    };

    fetchOrders();

    return () => controller.abort(); // cleanup on unmount
}, []);


    useEffect(() => {
        if (search) {
            const filterorder = rows.filter((row) => row?.id === parseInt(search) || row?.customer?.number === search)
            setFilterrow(filterorder)
            setLoading(filterorder.length === 0)
            console.log("fillter: ", rows.includes(parseInt(search)||search))
        } else {
            setFilterrow(rows)
            setLoading(false)
        }
        return ()=>{
            console.log("componet unmount")
        }
    }, [search, rows])

    return (
        <div className="relative">
            <OrderMangement
                rows={filterRow}
                columns={columns}
                statusbuttons={statusbuttons}
                value={search}
                handelChange={handelChange}
                loading={loading}
            />
        </div>
    )
}