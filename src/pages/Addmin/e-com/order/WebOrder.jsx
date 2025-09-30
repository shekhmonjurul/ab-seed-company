import { Link } from "react-router-dom";
import OrderMangement from "../../../../component/Addmin/e-com/order/OrderMangement";

const columns = [
    { field: "pid", headerName: "ID", width: 80 },
    { field: "orderid", headerName: "Ordered Time", width: 200 },
    { field: "orderStatus", headerName: "Status", width: 120 },
    { field: "code", headerName: "Code", width: 120 },
    { field: "note", headerName: "Note", width: 120 },
    { field: "note", headerName: "Note", width: 200 },
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
        field: "products",
        headerName: "Products",
        width: 250,
        renderCell: (params) => (
            <div>
                {params.row.orderitems.map((item, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={item?.img}
                            alt={item?.productname}
                            width="20"
                            style={{ marginRight: 5 }}
                        />
                        {item?.productname}
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
            <div style={{ display: "flex", gap: "5px" }}>
                <Link to={"#"}>Open</Link>
            </div>
        )
    }
];

const rows = [
    {
        id: 1,
        ordered: "2025-09-21T15:30:00Z",
        status: "pending",
        customer: {
            phonenumber: "017XXXXXXXX",
            customername: "Rahim Uddin",
            address: "Dhaka, Bangladesh"
        },
        note: "Please deliver fast",
        orderitems: [
            { img: "/images/product1.png", id: 1, productname: "Laptop" },
            { img: "/images/product2.png", id: 2, productname: "Mouse" }
        ],
        successrate: 90,
        tag: ["electronics", "priority"],
        site: "example.com",
        action: "view"
    },
    {
        id: 2,
        ordered: "2025-09-20T11:00:00Z",
        status: "delivered",
        customer: {
            phonenumber: "018XXXXXXXX",
            customername: "Karim Mia",
            address: "Chattogram, Bangladesh"
        },
        note: "Gift wrap this item",
        orderitems: [
            {id:1, img: "/images/product3.png", id: 3, productname: "Mobile Phone" }
        ],
        successrate: 100,
        tag: ["mobile", "gift"],
        site: "shop.com",
        action: "edit"
    }
];

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
    return (
        <div>
            <OrderMangement rows={rows} columns={columns} statusbuttons={statusbuttons} />
        </div>
    )
}