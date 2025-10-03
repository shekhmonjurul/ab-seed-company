import { Link, } from "react-router-dom";
import OrderMangement from "../../../../component/Addmin/e-com/order/OrderMangement";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "ordered", headerName: "Ordered Time", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "code", headerName: "Code", width: 120 },
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
        field: "products",
        headerName: "Products",
        width: 250,
        renderCell: (params) => (
            <div>
                {params.row.products.map((item, index) => (
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
        field: "tags",
        headerName: "Tags",
        renderCell: (params) => (
            <div>
                <select>
                    <option value="Tags">Tags</option>
                    {
                        params.row.tags?.map((tag, index) => (
                            <option value={tag} key={index}>{tag}</option>
                        ))

                    }
                </select>
            </div>
        )
    }
];


const statusbuttons = [
    { name: "Pending", number: 6, params: "Pending" },
    { name: "RTS", number: 100, params: "RTS" },
    { name: "Shipped", number: 468, params: "Shipped" },
    { name: "Delivered", number: 20895, params: "Delivered" },
    { name: "Pending_Return", number: 77, params: "Pending_Return" },
    { name: "Returned", number: 1859, params: "Returned" },
    { name: "Partial", number: 25, params: "Partial" },
    { name: "Cancelled", number: 380, params: "Cancelled" },
    { name: "Pending_Cancel", number: 0, params: "Pending_Cancel" },
    { name: "Preorder", number: 26, params: "Preorder" },
    { name: "Lost", number: 0, params: "Lost" },
];


export default function WebOrder() {
    const [rows, setRows] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/orders")
            .then(res => res.json())
            .then((data) => {
                const orders = data?.data.map((order, index) => {
                    const data = {
                        id: order?.id || index + 1,
                        ordered: order?.time,
                        status: order?.orderStatus,
                        customer: order?.customer,
                        note: order?.note,
                        products: order?.products,
                        successrate: 100,
                        tags: ["Monjurul Islam", "Korim", "Rohim"],
                        site: order?.site,
                        code: order?.code
                    }
                    return data
                })
                setRows(orders)
                console.log("data: ", orders)
            })

    }, [])
    return (
        <div>
            <OrderMangement rows={rows} columns={columns} statusbuttons={statusbuttons} />
        </div>


    )
}