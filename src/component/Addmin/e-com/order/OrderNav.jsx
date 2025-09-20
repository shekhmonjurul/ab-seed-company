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
        <div className="flex justify-around h-10 items-center bg-white py-10">
            {navlinks.map((navlink, index) => (
                <div className={`p-3 text-[15px] rounded-2xl w-[150px] shadow-2xl text-center transition 
            ${urlname === navlink.href
                        ? "bg-green-700 text-white"
                        : "bg-white hover:shadow"}`}
                    key={index}
                >
                    <Link
                        to={navlink.href}

                    >
                        {navlink.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
