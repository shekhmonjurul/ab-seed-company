import { createContext, useContext, useEffect, useState } from "react";


const CreateProdutContext = createContext()

export default function CreateProdcutProvider({ children }) {
    const [formData, setFormData] = useState({
        product_name: "",
        sku: "",
        short_description: "",
        long_description: "",
        category: "",
        reguler_price: "",
        sale_price: "",
        stock: "",
        category_id: "",
        main_image: "",
        product_photos: []
    })
    const [imge, setImge] = useState(null)
    const [images, setImages] = useState([])
    const reset = {
        product_name: "",
        sku: "",
        short_description: "",
        long_description: "",
        category: "",
        reguler_price: "",
        sale_price: "",
        stock: "",
        category_id: "",
        main_image: "",
        product_photos: []
    }
    const [seccess, setSeccess] = useState(null)


    const handleInput = field => (event) => {
        const { value } = event.target
        const filterValue = Number(value) || value
        setFormData(prev => ({ ...prev, [field]: filterValue }))
    }

    const handelSubmit = async (event) => {
        event.preventDefault()
        if (!imge) {
            alert("Select A Product Imge")
            return
        }
        const uploadForm = new FormData()
        uploadForm.append("files", formData?.main_image)
        for (let i = 0; i < formData?.product_photos?.length; i++) {
            uploadForm.append("files", formData?.product_photos[i])
        }


        const keys = Object.keys(formData)
        const length = keys.length
        let i = 1
        for (const key of keys) {
            uploadForm.append(`${key}`, formData[key])
            if (i === length - 2) {
                break
            }
            i++
        }
        const url = `http://localhost:5000/api/products/add`
        try {
            const res = await fetch(url, {
                method: "post",
                body: uploadForm
            })

            if (res.ok) {
                setFormData(reset)
                setImge("")
                setSeccess("Product add seccessfuly")
            }
            const data = await res.json()
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    const handelFile = (e) => {
        const file = e.target?.files[0]
        if (!file) {
            alert("select a  product imge")
            return
        }
        const url = URL.createObjectURL(file)
        setImge(url)
        setFormData(prev => ({ ...prev, main_image: file }))
    }

    const handleFiles = (e) => {
        const file = e.target?.files
        if (!file) {
            alert("Slect A Product Imge")
            return
        }
        const files = Object.values(file)
        setImages([...images, ...files.map((filename) => URL.createObjectURL(filename))])
        if (typeof setFormData === "function") {
            setFormData(prev => ({ ...prev, product_photos: file }))
        }
    }

    const value = {
        formData,
        reset,
        imge,
        images,
        seccess
    }

    const setFuntion = {
        setFormData,
        setImge,
        setImages
    }

    const handleFuntion = {
        handleInput,
        handelSubmit,
        handelFile,
        handleFiles
    }


    return (
        <CreateProdutContext.Provider value={{ value, setFuntion, handleFuntion }}>
            {children}
        </CreateProdutContext.Provider>
    )
}

export const useCreateProdutContext = () => {
    return useContext(CreateProdutContext)
}