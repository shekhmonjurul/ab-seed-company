import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { FaEdit, FaRegEdit } from "react-icons/fa";
import Icon from "@mui/material/Icon";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Button } from "@headlessui/react";
import Avatar from "@mui/material/Avatar";

export default function ProductCardAddmin({ productdetailes }) {
    return (
        <>
            <div className="bg-[#d9d9d9] text-black relative border-2 rounded-[25px]">
                <Typography className="absolute z-10 right-4 top-2">
                    <button><Icon component={FaEdit} /></button>
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


                        <Avatar src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" sx={{
                            width: "150px",
                            height: "150px",
                            mr: 3,
                            borderRadius: "15px"
                        }} variant="square" />
                        <div>
                            <Typography variant="h5">
                                {productdetailes.name || ` Product Name................................................`}
                            </Typography>
                            <Typography component={"p"} className="text-left">
                                Lorem ipsum dolor sit amet, consectetur 
                            </Typography>
                            <Typography component={"p"} className="text-left">
                                {
                                    productdetailes.catagorys?.map((catagory, index) => catagory || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `)
                                }
                            </Typography>
                            <Typography variant="h6">
                                Category Name 1
                                Category Name 2Category Name
                            </Typography>
                            <Typography variant="h7">Brand Name</Typography>
                            <div className="flex justify-between items-center mt-1">
                                <Typography className="bg-white p-1">Price-
                                    <span className="text-red-900">190</span>
                                    <span>/</span>
                                    <span>120</span>
                                </Typography>
                                <Typography className="bg-white p-1"> Total Sale-12k</Typography>
                                <Typography className="bg-white p-1">Stock-950</Typography>
                            </div>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography component={"p"} className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </>
    )
}