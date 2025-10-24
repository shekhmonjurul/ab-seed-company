import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CreateOrderContex = createContext()

export default function CreateOrderProvider({ children, customer = {}, orderItems = [], navigateUrl }) {
    const [formdata, setFormData] = useState({
        customername: "",
        phone: "",
        address: "",
        note: "",
        invoice: "",
        subtotal: 0,
        deliverycharge: 50,
        discount: 0,
        advance: 0,
        grandtotal: 0,
        items: [{}],
    })
    const [disabled, setDisabled] = useState(new Set())
    const [orderProducts, setOrderProducts] = useState([])
    const [isAdd, setIsAdd] = useState(false)
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    const [submitError, setSubmitError] = useState("")
    // derived value (no need for separate state)
    const grandtotal =
        formdata.subtotal +
        formdata.deliverycharge -
        formdata.discount -
        formdata.advance;

    // function section
    const handleFormData = (flied) => (evnt) => {
        const { name, value } = evnt.target
        const newvalue = name === "number" ? Number(value) : value
        setFormData(prev => ({ ...prev, [flied]: newvalue }))
    } // input handller

    const handleAddProduct = (product) => {
        setDisabled(prev => new Set(prev).add(product.id))
        setOrderProducts((prev => [...prev, product]))
        setIsAdd(!isAdd)

    } // add proucts on order poducts

    const handleSubmit = async (evnt) => {
        evnt.preventDefault()
        const baseurl = "http://localhost:5000"
        const fetchoption = {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formdata)
        }
        const res = await fetch(`${baseurl}/api/orders`, fetchoption)
        const data = await res.json()
        if (res.ok) {
            console.log("order create successfuly")
            navigate(navigateUrl)
        } else {
            setSubmitError("Internal server Error")
        }
    } // post the data on server

    const handleGetValue = (value) => {

        setOrderProducts(prevProducts => {
            const updateProducts = prevProducts?.map((prevProduct) => {
                let products = (prevProduct?.id === value?.id) ? { ...prevProduct, updataPrice: value?.newTotal } : { ...prevProduct, updatePrice: prevProduct?.price }
                return products
            })
            return updateProducts
        })
        setCount(count => count + 1)
    } // up date price



    // effect section
    useEffect(() => {
        let sum = 0
        if (orderProducts.length > 0) {
            sum = orderProducts?.reduce((sum, item) => sum + Number(item?.
                updataPrice
            ) || Number(item?.price) || 0, 0)
        }
        setFormData(prev => ({ ...prev, items: orderProducts, subtotal: sum, grandtotal: grandtotal }))
    }, [isAdd, count])

    useEffect(() => {
        setFormData(prev => ({ ...prev, customername: customer?.name, phone: customer?.phone, address: customer?.address, note: customer?.note, invoice: customer?.orderid }))
        setOrderProducts(orderItems)
    }, [customer?.name])

    useEffect(() => {
        setFormData(prev => ({ ...prev, grandtotal: grandtotal }))
    }, [formdata?.subtotal, formdata?.advance, formdata?.discount, formdata?.deliverycharge])

    // state section
    const value = {
        formdata,
        disabled,
        orderProducts,
        grandtotal
    }

    // object section
    const setFunction = {
        setFormData,
        setDisabled,
        setOrderProducts
    }
    const handleFunction = {
        handleFormData,
        handleAddProduct,
        handleSubmit,
        handleGetValue,
    }
    return (
        <CreateOrderContex.Provider value={{ value, setFunction, handleFunction }}>
            {children}
        </CreateOrderContex.Provider>
    )
}


export const useCreateOrderContex = () => {
    return useContext(CreateOrderContex)
}