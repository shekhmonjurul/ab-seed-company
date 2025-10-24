import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navlinks = [
    { name: "Search", href: "/addmin/ecom/order/search" },
    { name: "New Order", href: "/addmin/ecom/order/new" },
    { name: "We Orders", href: "/addmin/ecom/order/web" },
    { name: "Order list", href: "/addmin/ecom/order/list" },
];

export default function OrderNav() {
    const urlname = useLocation().pathname;

    return (
        <div className="bg-white py-5 sticky top-0 z-50">
            <div className="flex  h-10 w-[50%] gap-x-5 px-4 items-center bg-white">
                {navlinks.map((navlink, index) => (
                    <div className={`p-1 text-[14px] rounded-2xl w-[100px] drop-shadow-2xl text-center transition 
            ${urlname === navlink.href
                            ? "bg-green-700 text-white opacity-100"
                            : "bg-white hover:drop-shadow opacity-50"}`}
                        key={index}
                    >
                        <Link to={navlink.href}>
                            {navlink.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
