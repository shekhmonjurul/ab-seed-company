import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { FaEdit, FaRegEdit } from "react-icons/fa";
import Icon from "@mui/material/Icon";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Button } from "@headlessui/react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export default function ProductCardAddmin({ productdetailes }) {
    return (
        <>
            <div className="bg-[#d9d9d9] text-black relative border-2 rounded-[25px]">
                <Typography className="absolute z-10 right-4 top-2">
                    <Link to={`http://localhost:5174/addmin/product/add?id=${productdetailes?.id}`}>
                        <Icon component={FaEdit} />
                    </Link>
                </Typography>
                <Accordion elevation={0} sx={{
                    // border: "2px solid black",
                    // borderRadius: "25px",
                    backgroundColor: "transparent"
                }}>

                    <AccordionSummary
                        expandIcon={<Icon component={ExpandCircleDownOutlinedIcon} />}
                    // aria-controls="panel1-content"
                    // id="panel1-header"
                    >


                        <Avatar src={productdetailes?.main_image} sx={{
                            width: "150px",
                            height: "150px",
                            mr: 3,
                            borderRadius: "15px"
                        }} variant="square" />
                        <div>
                            <Typography variant="h5">
                                {productdetailes?.product_name || ` Product Name................................................`.toUpperCase()}
                            </Typography>
                            <Typography component={"p"} className="text-left line-clamp-2 truncate">
                                {productdetailes?.
                                    short_description
                                    || `Lorem ipsum dolor sit amet, consectetur`}
                            </Typography>
                            <Typography component={"p"} className="text-left">
                                {
                                    productdetailes.catagory?.map((catagory, index) => catagory || `catagory`)
                                }
                            </Typography>
                            <Typography variant="h6">
                                Category Name 1
                                Category Name 2Category Name
                            </Typography>
                            <Typography variant="h7">{productdetailes?.brand_name || `Brand Name`}</Typography>
                            <div className="flex justify-between items-center mt-1">
                                <Typography className="bg-white p-1">Price-
                                    <span className="text-red-900">{parseInt(productdetailes?.reguler_price) || 0
                                    }</span>
                                    <span>/</span>
                                    <span>{parseInt(productdetailes?.sale_price) || 0
                                    }</span>
                                </Typography>
                                <Typography className="bg-white p-1"> Total Sale-12k</Typography>
                                <Typography className="bg-white p-1">Stock-{productdetailes?.stock || 0}</Typography>
                            </div>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography component={"p"} className="text-justify">
                            {productdetailes?.
                                long_description
                                || `Lorem ipsum dolor sit amet, consectetur adipiscing`}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </>
    )
}