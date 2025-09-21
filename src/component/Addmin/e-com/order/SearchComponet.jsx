import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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

export default function SearchComponet() {
    const [focus, setFoucs] = useState(false)
    const [order, setOrder] = useState(rows)
    const [search, setSearch] = useState("")

    const handelChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const filterOrder = rows.filter((order) => order.id === parseInt(search) || order.customer.phonenumber === search)
        setOrder(filterOrder)
        console.log(search, rows, filterOrder)
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
                    getRowHeight={() => 'auto'}
                    hideFooter
                />
            </div>
        </div>
    )
}

