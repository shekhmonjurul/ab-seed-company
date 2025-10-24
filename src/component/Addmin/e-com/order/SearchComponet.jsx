import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { use, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
                            src={item?.image_src}
                            alt={item?.price}
                            width="40"
                            style={{
                                marginRight: 10,
                                borderRadius: 5

                            }}
                        />
                        {item?.name}
                        <span>{item?.quantity}</span>
                        {console.log("items: ", item)}
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

// const rows = [
//     {
//         id: 1,
//         ordered: "2025-09-21T15:30:00Z",
//         status: "pending",
//         customer: {
//             phonenumber: "017XXXXXXXX",
//             customername: "Rahim Uddin",
//             address: "Dhaka, Bangladesh"
//         },
//         note: "Please deliver fast",
//         orderitems: [
//             { img: "/images/product1.png", id: 1, productname: "Laptop" },
//             { img: "/images/product2.png", id: 2, productname: "Mouse" }
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
//             phonenumber: "018XXXXXXXX",
//             customername: "Karim Mia",
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

export default function SearchComponet() {
    const [focus, setFoucs] = useState(false)
    const [order, setOrder] = useState([])
    const [rows, setRows] = useState([])
    const [loading, setLoding] = useState(true)
    const [search, setSearch] = useState("")

    const handelChange = (e) => {
        setSearch(e.target.value)
    }

    // useEffect(() => {
    //     const filterOrder = rows.filter((order) => order.id === parseInt(search) || order.customer.number === search)
    //     setOrder(filterOrder)
    //     console.log(search, rows, filterOrder)
    // }, [search])

    useEffect(() => {
        const handleFetch = async () => {
            if(!search) return
            console.log("serach: ", search)
            const res = await fetch(`http://localhost:5000/api/filter/${search}`)
            const data = await res.json()
            // if (!data?.success) return

            const orders = data?.filterorders?.map((order, index) => {
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
                }
                return data
            }) || [];
            setRows(orders)
            setOrder(orders)
            setLoding(false)
        }
        handleFetch()
    }, [search])

    return (
        <div className="bg-[#ffffff] mt-4 text-left p-4 text-black ">
            <h1 className='mb-4'>Search Orders</h1>
            <div className={focus ? "text-black outline-2 p-2 rounded-[8px] " : "text-black  rounded-[8px] p-2 "} >
                <label htmlFor="search" className='border-gray-400 rounded-[8px] p-2 border-2 flex items-center'>
                    <SearchIcon />
                    <input type="text" placeholder="Search by invoice, phone, name, or courier ID..." id="search" className="focus:outline-none w-full p-2"
                        onFocus={() => setFoucs(true)}
                        onBlur={() => setFoucs(false)}
                        onChange={handelChange}
                        value={search}
                    />
                </label>

            </div>
            <div className={search ? "mt-4 block" : "hidden"} >
                <DataGrid
                    rows={order}
                    columns={columns}
                    loading={loading}
                    getRowHeight={() => 'auto'}
                    checkboxSelection
                    hideFooter
                />
            </div>
        </div>
    )
}

