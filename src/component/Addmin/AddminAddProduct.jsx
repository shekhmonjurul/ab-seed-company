import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Icon from "@mui/material/Icon";
import Pluse from "../Pluse"
import { RiFolderOpenFill } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { useCreateProdutContext } from "../../Context/CrateProduct/CreateProductProvider";
import { useLocation } from "react-router-dom";
import handleFetch from "../../logic/handleFetch";

export default function AddminAddProduct() {

    const { value, setFuntion, handleFuntion, } = useCreateProdutContext()
    const [categorys, setCategorys] = useState([])
    const {
        formData,
        imge,
        seccess,
        Images
    } = value

    const formRef = useRef(null)
    const {
        handleInput,
        handelSubmit,
        handelFile
    } = handleFuntion

    const {
        setFormData,
        setImge,
        setImages
    } = setFuntion

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


    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const id = params.get("id")



    if (id) {
        useEffect(() => {
            const fetchById = async () => {
                const url = `http://localhost:5000/api/products/get?id=${id}`
                const res = await fetch(url)
                const data = await res.json()
                if (res.ok) {
                    setFormData(...data?.data?.products || {})
                    setImge(data?.data?.products[0]?.main_image || null)
                    const srcs = data?.data?.products[0]?.product_photos?.map((phtos, index) => phtos.src)
                    console.log("srcs: ", srcs)
                    setImages(srcs || [])
                }
            }

            try {
                fetchById()
            } catch (error) {
            }
        }, [])
    }


    useEffect(() => {
        const url = `http://localhost:5000/api/products/catagory`
        const promise = handleFetch(url)
        promise.then(data => setCategorys(data?.data?.rows))
    }, [])


    return (
        <div>
            {seccess && <h1 className="text-green-600">seccess</h1>}
            <div className="text-black bg-white border-2 p-4 rounded-2xl w-[926px]">
                <form ref={formRef} className="flex flex-col" onSubmit={handelSubmit} >
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

                        <div className="bg-[#d9d9d9] w-[300px] flex justify-center items-center p-4 mx-4 rounded-2xl    flex-col">
                            <label htmlFor="product-photo" className="text-2xl font-bold">
                                {imge ? <img
                                    src={imge}
                                    alt="product imge"
                                    className="w-[200px] h-[200px] rounded-2xl"
                                />
                                    :
                                    " Select Product Photo  "
                                }
                            </label>
                            <input type="file" name="file" id="product-photo" className="hidden" onChange={handelFile} />
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
                                categorys?.map((caragory, index) => (
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label={caragory.category_name}
                                        key={index}
                                        value={caragory.category_name}
                                        onChange={handleInput("category")}
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
