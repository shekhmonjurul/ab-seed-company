import AddminAddProduct from "../../component/Addmin/AddminAddProduct"

export default function AddProduct() {
    return (
        <>
            <div className="p-4">
                <h1 style={{
                    fontSize: "45px",
                    color: "black",
                    fontWeight: "bold",
                    margin: "0 0 30px 0"
                }}>
                    Add Products
                </h1>
                <div>
                    <AddminAddProduct/>
                </div>
            </div>
        </>
    )
}