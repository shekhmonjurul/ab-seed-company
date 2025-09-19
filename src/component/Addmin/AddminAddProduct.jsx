import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Icon from "@mui/material/Icon";
import Pluse from "../Pluse"
import { RiFolderOpenFill } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import { useState } from "react";



const actionbuttons = [
    { name: "Price Reguler", req: true, },
    { name: "Sale Price", req: false, },
    { name: "Stock....", req: false, }
]


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
    const [gallery, setGallery] = useState([
        { imgurl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" },
        { imgurl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" },
        { imgurl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" },
        { imgurl: "blob:http://localhost:5173/822b7e09-84ac-4790-8fdf-e9d09af3c8f6" }
    ])

    const handelFile = (e) => {
        const file = e.target?.files[0]
        if (!file) {
            alert("select a  product imge")
            return
        }
        const url = URL.createObjectURL(file)
        setImge(url)
    }

    const handelSubmit = () => {
        if (!imge) {
            alert("Select A Product Imge")
            return
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



    return (
        <>
            <div className="text-black bg-white border-2 p-4 rounded-2xl">
                <form action="/addmin/product/list" method="get" className="flex flex-col" onSubmit={handelSubmit}>
                    <div className="flex flex-row">

                        <div className="flex flex-col">
                            <div className="flex justify-between flex-row">
                                <input type="text" name="product-name" id="product-name" placeholder="Product Name..
" className="rounded-[8px] p-4 text-2xl text-left mt-4 mr-4 bg-[#d9d9d9]" style={{
                                        width: "290px"
                                    }} required />

                                <input type="text" name="product-name" id="product-name" placeholder="SKU
" className="rounded-[8px] p-4 text-2xl text-left mt-4 bg-[#d9d9d9] mr-4" style={{
                                        width: "290px"
                                    }} required />
                            </div>


                            <textarea name="short-description" id="short-description" placeholder="Short Description..
" className="p-4 mt-4 text-2xl w-[600px] rounded-[8px] bg-[#d9d9d9] h-50" required></textarea>

                        </div>

                        <div className="bg-[#d9d9d9] w-[300px] flex justify-center items-center p-4 mx-4 rounded-2xl flex-col">
                            {
                                imge ? <img src={imge || "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"} alt="product imge" className="w-[200px] h-[200px] rounded-2xl" /> : <label htmlFor="product-photo" className="text-2xl font-bold">
                                    Select Product Photo
                                    <input type="file" name="product-photo" id="product-photo" className="hidden" onChange={handelFile} />
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
                                    <FormControlLabel control={<Checkbox />} label={caragory.label} key={index} value={caragory.value} />
                                ))
                            }
                        </CustomFormGroup>
                    </div>
                    <div className="flex justify-between mx-5
                    
                    
                    ">
                        {
                            actionbuttons.map((action, index) => (
                                <input type="number" className="bg-[#d9d9d9] w-[200px] h-15 text-center p-3 text-2xl" style={{
                                    borderRadius: "8px",
                                    textAlign: "center"
                                }} placeholder={action.name} key={index} required={action.req} />

                            ))
                        }
                    </div>
                    <textarea name="long-description" id="long-description" placeholder="Long Description...
" className="bg-[#d9d9d9] mt-4 w-[90%] pl-2 pt-2 rounded-[8px] h-50 text-2xl"></textarea>
                    <h1 className="my-4 font-bold ">
                        <Icon component={RiFolderOpenFill} sx={{
                            color: "#f4db73",
                            fontSize: "45px",
                            mr: 2
                        }} />
                        Product Photo gallery
                    </h1>
                    <div className="flex justify-between flex-wrap gap-5">
                        {
                            gallery.map((photo, index) => (
                                <img src={photo.imgurl} alt="product imge" className="w-40 h-40 rounded-2xl" key={index} />
                            ))
                        }
                        <Pluse />
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="bg-[#f4db73] text-[45px] w-[200px] hover:text-white hover:bg-green-500 drop-shadow-2xl" style={{
                            borderRadius: "50px",
                            textAlign: "center"
                        }}>Publish</button>
                    </div>
                </form>
            </div>

        </>
    )
}


