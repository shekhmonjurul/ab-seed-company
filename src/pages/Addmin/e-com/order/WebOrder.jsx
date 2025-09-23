import { useEffect, useState } from "react";
import NewSearch from "../../../../component/Addmin/e-com/order/NewSearch";
import OrderNav from "../../../../component/Addmin/e-com/order/OrderNav";
import ProductInfo from "../../../../component/Addmin/e-com/order/ProductInfo";
import StatusButton from "../../../../component/Addmin/e-com/order/StatusButton";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "ordered", headerName: "Ordered Time", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    {
        field: "customer",
        headerName: "Customer",
        width: 220,
        renderCell: (params) => (
            <div>
                <div><b>{params.row.customer?.customername}</b></div>
                <div>{params.row.customer?.phonenumber}</div>
                <div>{params.row.customer?.address}</div>
            </div>
        )
    },
    { field: "note", headerName: "Note", width: 200 },
    {
        field: "orderitems",
        headerName: "Products",
        width: 250,
        renderCell: (params) => (
            <div>
                {params.row.orderitems.map((item) => (
                    <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={item.img}
                            alt={item.productname}
                            width="20"
                            style={{ marginRight: 5 }}
                        />
                        {item.productname}
                    </div>
                ))}
            </div>
        )
    },
    { field: "successrate", headerName: "Success Rate", width: 140 },
    {
        field: "tag",
        headerName: "Tags",
        width: 200,
        renderCell: (params) => (
            params.row.tag.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))
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
            { img: "/images/product3.png", id: 3, productname: "Mobile Phone" }
        ],
        successrate: 100,
        tag: ["mobile", "gift"],
        site: "shop.com",
        action: "edit"
    }
];



export default function WebOrder() {
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState(rows)
    const handelChange = (event) => {
        const input = event.target.value
        setSearch(input)

    }
    useEffect(() => {
        const filterorder = rows.filter((row)=> row.id === parseInt(search) || row.customer.phonenumber === search)
        setOrder(filterorder)
       
    }, [search])
    return (
        <div>
            <OrderNav />
            <div className="mt-4 bg-white text-left px-4">
                <StatusButton />
                <NewSearch
                    handelChange={handelChange}
                    value={search}
                />

                <div className={""} >
                    <DataGrid
                        rows={order}
                        columns={columns}
                        getRowHeight={() => 'auto'}
                        hideFooter
                    />
                </div>
            </div>
        </div>
    )
}