import { createContext, useContext, useState } from "react";


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





    const handleInput = field => (event) => {
        const { value } = event.target
        const filterValue = Number(value) || value
        setFormData(prev => ({ ...prev, [field]: filterValue }))
    }



    const value = {
        formData,
    }

    const setFuntion = {
        setFormData
    }

    const handleFuntion = {
        handleInput
    }
    return (
        <CreateProdutContext.Provider value={{value, setFuntion, handleFuntion}}>
            {children}
        </CreateProdutContext.Provider>
    )
}

export const useCreateProdutContext = () => {
    return useContext(CreateProdutContext)
}