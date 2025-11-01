import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Icon from "@mui/material/Icon";
import Pluse from "../Pluse"
import { RiFolderOpenFill } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useCreateProdutContext } from "../../Context/CrateProduct/CreateProductProvider";

const caragorys = [
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },

    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },

    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },
    { label: "Catagori", value: "Catagori" },


]

export default function AddminAddProduct() {

    const [imge, setImge] = useState("")

    const { value, setFuntion, handleFuntion, } = useCreateProdutContext()
    const {
        formData
    } = value

    const {
        handleInput,
    } = handleFuntion

    const {
        setFormData
    } = setFuntion

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
            const data = res.json()
        } catch (error) {
            console.log("Error: ", error)
        }
    }


    const CustomFormGroup = styled(FormGroup)({
        display: "flex",        // flex layout
        flexDirection: "row",   // horizontal row
        gap: "5px",            // checkbox এর মধ্যে spacing
        padding: "15px 20px",
        borderRadius: "10px",
        alignItems: "center",   // vertical center
        "& .MuiCheckbox-root": {
            color: "gray",       // checkbox color
            "&.Mui-checked": {
                color: "dark", // checked হলে color
            },
        },
        "& .MuiFormControlLabel-root": {
            margin: 0,            // label spacing remove
        },
    })

    const actionbuttons = [
        {
            name: "Price Reguler",
            req: true,
            value: formData?.reguler_price,
            onChange: handleInput("reguler_price")
        },
        {
            name: "Sale Price",
            req: false,
            value: formData?.sale_price,
            onChange: handleInput("sale_price")
        },
        {
            name: "Stock....",
            req: false,
            value: formData?.stock,
            onChange: handleInput("stock")
        }
    ]
    return (
        <div>
            <div className="text-black bg-white border-2 p-4 rounded-2xl w-[926px]">
                <form className="flex flex-col" onSubmit={handelSubmit} >
                    <div className="flex flex-row">

                        <div className="flex flex-col">
                            <div className="flex justify-between flex-row">
                                <input type="text"
                                    name="product-name"
                                    id="product-name"
                                    placeholder="Product Name.."
                                    className="rounded-[8px] p-4 text-2xl text-left mt-4 mr-4 bg-[#d9d9d9]"
                                    style={{
                                        width: "290px"
                                    }}
                                    required
                                    value={formData?.product_name}
                                    onChange={handleInput("product_name")}
                                />

                                <input
                                    type="text"
                                    name="product-name"
                                    id="product-name"
                                    placeholder="SKU"
                                    className="rounded-[8px] p-4 text-2xl text-left mt-4 bg-[#d9d9d9] mr-4"
                                    style={{
                                        width: "290px"
                                    }}
                                    value={formData?.sku}
                                    onChange={handleInput("sku")}
                                    required />
                            </div>

                            <textarea
                                name="short-description"
                                id="short-description"
                                placeholder="Short Description.."
                                className="p-4 mt-4 text-2xl w-[600px] rounded-[8px] bg-[#d9d9d9] h-50"
                                required
                                value={formData?.short_description}
                                onChange={handleInput("short_description")}
                            ></textarea>

                        </div>

                        <div className="bg-[#d9d9d9] w-[300px] flex justify-center items-center p-4 mx-4 rounded-2xl flex-col">
                            {
                                imge ? <img src={imge || "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"} alt="product imge" className="w-[200px] h-[200px] rounded-2xl" /> : <label htmlFor="product-photo" className="text-2xl font-bold">
                                    Select Product Photo
                                    <input type="file" name="file" id="product-photo" className="hidden" onChange={handelFile} />
                                </label>
                            }
                            <h1 className="mt-2">
                                <Icon component={RiFolderOpenFill} sx={{
                                    color: "green",
                                    fontSize: "45px",
                                    mr: 2
                                }} />
                                Poduct Photo
                            </h1>
                        </div>

                    </div>
                    <div>
                        <CustomFormGroup sx={{
                            display: "flex"
                        }}>
                            {
                                caragorys.map((caragory, index) => (
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label={caragory.label}
                                        key={index}
                                        value={caragory.value}
                                    // onChange={handleInput("category")}
                                    />
                                ))
                            }
                        </CustomFormGroup>
                    </div>
                    <div className="flex justify-between mx-5
                    
                    
                    ">
                        {
                            actionbuttons.map((action, index) => (
                                <input
                                    type="number"
                                    className="bg-[#d9d9d9] w-[200px] h-15 text-center p-3 text-2xl"
                                    style={{
                                        borderRadius: "8px",
                                        textAlign: "center"
                                    }}
                                    placeholder={action.name}
                                    key={index}
                                    value={action.value}
                                    onChange={action.onChange}
                                    required={action.req}

                                />

                            ))
                        }
                    </div>
                    <textarea
                        name="long-description"
                        id="long-description"
                        placeholder="Long Description..."
                        className="bg-[#d9d9d9] mt-4 w-[90%] pl-2 pt-2 rounded-[8px] h-50 text-2xl"
                        value={formData?.long_description}
                        onChange={handleInput("long_description")}
                    ></textarea>
                    <h1 className="my-4 font-bold ">
                        <Icon component={RiFolderOpenFill} sx={{
                            color: "#f4db73",
                            fontSize: "45px",
                            mr: 2
                        }} />
                        Product Photo gallery
                    </h1>
                    <div className="flex justify-between flex-wrap gap-5">
                        <Pluse />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="bg-[#f4db73] text-[45px] w-[200px] hover:text-white hover:bg-green-500 rounded-[5px]" style={{
                                borderRadius: "50px",
                                textAlign: "center"
                            }}>Publish</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
