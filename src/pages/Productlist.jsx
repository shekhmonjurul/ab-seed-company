import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "productimg",
        headerName: "Product Imge",
        width: 120,
        renderCell: (params) => (
            <img
                src={params.value}
                alt="Product Imge"
                style={{
                    width: 40,
                    height: 40,
                    objectFit: "cover",
                }}
            />
        ),
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "sku", headerName: "SKU", width: 250 },
    { field: "catagory", headerName: "Catagory", width: 250 },
    { field: "brand", headerName: "Brand", width: 250 },
    { field: "pubdate", headerName: "Publish Date", width: 250 },
];

const rows = [
    {
        id: 1,
        productimg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        name: "Tomato Hybrid Seed",
        sku: "SKU-101",
        catagory: "Vegetable",
        brand: "AgroSeed",
        pubdate: "2025-09-01",
    },
    {
        id: 2,
        productimg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        name: "Basmati Rice Seed",
        sku: "SKU-102",
        catagory: "Grain",
        brand: "GreenHarvest",
        pubdate: "2025-08-25",
    },
    {
        id: 3,
        productimg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        name: "Sunflower Seed",
        sku: "SKU-103",
        catagory: "Oilseed",
        brand: "FarmPro",
        pubdate: "2025-07-15",
    },
    {
        id: 4,
        productimg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        name: "Watermelon Hybrid",
        sku: "SKU-104",
        catagory: "Fruit",
        brand: "SeedWorld",
        pubdate: "2025-09-05",
    },
    {
        id: 5,
        productimg: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        name: "Cucumber Seed",
        sku: "SKU-105",
        catagory: "Vegetable",
        brand: "AgroFresh",
        pubdate: "2025-08-10",
    },
];



export default function Productlist() {
    return (
        <>
            <div className="text-left"> 
                <button>Add new product</button>
            </div>
            <div className="w-full my-4">
                <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection />
            </div>
        </>
    );
}
