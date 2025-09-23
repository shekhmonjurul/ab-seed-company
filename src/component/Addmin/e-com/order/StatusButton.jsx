import { useState } from "react"

export default function StatusButton({ name, number }) {
    const [active, setActive] = useState(false)

    const handelHover = () => {
        setActive(!active)
    }

    const handelClick = () => {
        setActive(true)
    }

    return (
        <div className=" text-black p-4 text-left font-bold inline-block w-auto  hover:text-green-600 focus:text-green-600 underline-offset-20 relative rounded-2xl"
            onMouseEnter={handelHover}
            onMouseLeave={handelHover}
        >
            <button
                onClick={handelClick}
            >{name || "Pending"}</button>
            <span className="inline-block ml-2 w-6 h-6 bg-gray-200 rounded-full text-center">{number || 7}</span>
            <span className={active ? "block bg-green-600 w-full h-[2px] absolute bottom-2 left-0 transition" : "hidden"}></span>
        </div>
    )
}