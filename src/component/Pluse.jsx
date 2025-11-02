import { useEffect, useState } from "react"
import PopupForm from "./PopupForm"
import { useCreateProdutContext } from "../Context/CrateProduct/CreateProductProvider"

export default function Pluse({ imgs = [] }) {
    const { value, setFuntion, handleFuntion} = useCreateProdutContext()
    const {
        handleFiles
    } = handleFuntion
    const {images} = value

  
    return (
        <>

            {
                images && images.map((url, index) => (
                    <img src={url} alt="product imge" className="w-40 h-40 rounded-2xl" key={index} />
                ))

            }
            {console.log("imgs: ", images)}

            <label htmlFor="product-photo-grllary" className="font-bold text-size w-40 flex justify-center items-center h-40 my-4 mobile-card pb-20 box-border" >
                +
                <input type="file" className="hidden" id="product-photo-grllary" name="files" onChange={handleFiles} multiple />
            </label>
        </>
    )
}


