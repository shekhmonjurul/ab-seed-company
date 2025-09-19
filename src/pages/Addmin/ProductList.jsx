import AddminNav from "../../component/Addmin/AddminNav";
import ProductCardAddmin from "../../component/Addmin/ProductCardAddmin";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export default function ProductList() {
    const productdetailes = {
        name: "Apple",
        catagorys: []
    }
    const demoarr = [1, 2, 3, 4, 5, 5, 6, 8, 7, 8, 8, 8, 8, 9, 1]
    return (
        <>
            <div className="mx-4">
                <h1 className="text-black my-4 font-bold" style={{
                    fontSize: "45px"
                }}>All Products</h1>
                <AddminNav />
                <br />
                <div className="bg-white p-4 border-2 text-black rounded-4xl">
                    <div className="flex justify-between px-4 font-bold">

                        <h2>
                            <FilterAltOutlinedIcon sx={{
                                fontSize: "45px",
                            }}/>
                            Products by sale
                        </h2>
                        <h2>50 of 200</h2>
                    </div>
                   <div className="overflow-scroll h-[670px]">
                     {
                        demoarr.map((demo, index) => (
                            <div key={index} className="mt-4">
                                <ProductCardAddmin productdetailes={productdetailes} />
                            </div>
                        ))
                    }
                   </div>
                </div>
            </div>
        </>
    )
}