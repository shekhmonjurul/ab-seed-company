import OrderMangement from "../../../../component/Addmin/e-com/order/OrderMangement";
import { useState, useEffect, useRef } from "react";
import { Atom } from "react-loading-indicators";

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
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "9px",
                            textAlign: "justify",
                            margin: "5px 0 5px 0"

                        }}
                    >
                        <img
                            src={item?.images[0]?.src}
                            alt={item?.price}
                            width="40"
                            style={{
                                marginRight: 10,
                                borderRadius: 5

                            }}
                        />
                        {item?.name}
                        <span>{item?.quantity}</span>
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
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([])
    const [rowCount, setRowCount] = useState(0)
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 10
    })


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchOrders = async () => {
            setLoading(true)
            try {
                setLoading(true);
                const page = paginationModel.page + 1
                console.log("page: ", page)
                const limit = paginationModel.pageSize
                const res = await fetch(`http://localhost:5000/api/orders?page=${page}&limit=${limit}`, { signal });
                const result = await res.json();
                setRowCount(Number(result?.rowCount) || 1)
                const orders = result?.data?.map((order, index) => {
                    const customer = {
                        name: order?.customer_name,
                        number: order?.phone,
                        address: order?.address
                    }
                    const data = {
                        id: order?.invoice || index + 1,
                        ordered: order?.created_at
                        ,
                        status: order?.orderStatus,
                        customer: customer,
                        note: order?.note,
                        products: order?.items,
                        tags: ["Monjurul Islam", "Korim", "Rohim"],
                        site: order?.site,
                        code: order?.code,
                        currier: {
                            ...order
                        }
                    }
                    return data
                }) || [];

                setRows(orders);
                setFilter(orders);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Fetch orders failed:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();

        return () => controller.abort(); // cleanup
    }, [paginationModel.page, paginationModel.pageSize]);


    useEffect(() => {
        if (search) {
            const filterRow = rows.filter((data) => {
                const idMatch = !isNaN(search) && data.id === Number(search);
                const phoneMatch = data.customer.number === search;
                return idMatch || phoneMatch;
            });

            setFilter(filterRow);
            setLoading(filterRow.length === 0);
        } else {
            setFilter(rows);
            setLoading(false);
        }

        return () => {
            console.log("unmount component");
        };
    }, [search, rows]);


    const handelChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }

    return (
        <div className="relative">
            <OrderMangement
                rows={filter}
                columns={columns}
                statusbuttons={statusbuttons}
                handelChange={handelChange}
                value={search}
                loading={loading}
                rowCount={rowCount}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
            />
            {console.log("pagintion moud: ", paginationModel)}
        </div>


    )
}