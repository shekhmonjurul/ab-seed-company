import { useState } from "react"
import PopupForm from "./PopupForm"

export default function Pluse() {
    const [popup, setPopup] = useState(false)
    const handelPopup = (value) => () => setPopup(value)
    return (
        <>
            {popup ? <PopupForm handelPopup={handelPopup(false)}/> : <button className="font-bold text-size w-[300px] flex justify-center items-center h-[393px] my-4 mobile-card" onClick={handelPopup(true)} >
                +
            </button>}
        </>
    )
}


