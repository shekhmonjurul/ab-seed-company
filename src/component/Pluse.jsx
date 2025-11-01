import { useEffect, useState } from "react"
import PopupForm from "./PopupForm"
import { useCreateProdutContext } from "../Context/CrateProduct/CreateProductProvider"

export default function Pluse() {
    const [imgeurl, setImge] = useState([])
    const {value, setFuntion} = useCreateProdutContext()
    const {formData} = value
    const {setFormData} = setFuntion

    const hnadelChange = (e) => {
        const file = e.target?.files
        console.log(file)
        if (!file) {
            alert("Slect A Product Imge")
            return
        }
        const files = Object.values(file)
        setImge([...imgeurl, ...files.map((filename) => URL.createObjectURL(filename))])

        setFormData(prev=> ({...prev, product_photos: file}))
    }
    return (
        <>

            {
                imgeurl && imgeurl.map((url, index) => (
                    <img src={url} alt="product imge" className="w-40 h-40 rounded-2xl" key={index} />
                ))

            }

            <label htmlFor="product-photo-grllary" className="font-bold text-size w-40 flex justify-center items-center h-40 my-4 mobile-card pb-20 box-border" >
                +
                <input type="file" className="hidden" id="product-photo-grllary" name="files" onChange={hnadelChange} multiple />
            </label>
        </>
    )
}


