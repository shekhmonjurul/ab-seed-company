import { useEffect, useRef, useState } from "react";
import AddminNav from "../../component/Addmin/AddminNav";
import ProductCardAddmin from "../../component/Addmin/ProductCardAddmin";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setlimit] = useState(10)
    const loadRef = useRef(null)
    useEffect(() => {
        const fetchProducts = async () => {
            const url = `http://localhost:5000/api/products/get?page=${page}&limit=${limit}`
            const res = await fetch(url)
            const data = await res.json()
            if (res.ok) {
                const products = data?.data?.products || []
                console.log("products: ", products)
                setProducts(prev=> [...prev, ...products])
            }
        }

        try {
            fetchProducts()
        } catch (error) {
            console.log("Error for prodcuts fetch: ", error)
        }
    }, [page, limit])

    useEffect(() => {
        const observer = new IntersectionObserver((entri) => {
            const intersect = entri[0].isIntersecting
            if (intersect) {
                setPage(prev => prev + 1)
                console.log("intesect: ", intersect, page)
            }
        }, { threshold: 1 })

        const current = loadRef.current

        if (current) {
            observer.observe(current)
        }

        return () => {
            if (current) {
                observer.unobserve(current)
            }
        }

    }, [])


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
                            }} />
                            Products by sale
                        </h2>
                        <h2>50 of 200</h2>
                    </div>
                    <div className="overflow-scroll h-[670px]">
                        {
                            products.map((details, index) => (
                                <div key={index} className="mt-4">
                                    <ProductCardAddmin productdetailes={details} />
                                </div>
                            ))
                        }

                        <div ref={loadRef}>Load More Products.....</div>
                    </div>
                </div>
            </div>
        </>
    )
}