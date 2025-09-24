import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";


export default function StatusButton({ statusbuttons = [] }) {

    const [params, setParams] = useSearchParams()

    const status = params.get("Woocom")
    const handelHover = () => {
        setActive(!active)
    }

    const handelClick = (params) => {
        return () => {
            setParams({ Woocom: params })
        }
    }

    return (
        <div>
            {
                statusbuttons.map((statusbutton, index) => (
                    <div key={index}
                        className={status === statusbutton?.params ? " text-green-600 p-4 text-left font-bold inline-block w-auto  hover:text-green-600 focus:text-green-600 underline-offset-20 relative rounded-2xl cursor-pointer" : " text-black p-4 text-left font-bold inline-block w-auto  hover:text-green-600 focus:text-green-600 underline-offset-20 relative rounded-2xl cursor-pointer"}
                    >
                        <button
                            onClick={handelClick(statusbutton?.params)}
                        >{statusbutton.name || "Pending"}
                            <span className="inline-block ml-2 w-auto px-2 h-6 bg-gray-200 rounded-full text-center"
                            >{statusbutton?.number || 7}</span>
                        </button>

                        <span className={status === statusbutton?.params ? "block bg-green-600 w-full h-[2px] absolute bottom-2 left-0 transition" : "hidden"}></span>
                    </div>
                ))
            }

        </div>
    )
}