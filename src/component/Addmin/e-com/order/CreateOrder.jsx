
import { useEffect, useState } from "react";
import Input from "./Input";
import ProductInfo from "./ProductInfo";
import { Atom } from "react-loading-indicators";
import { useCreateOrderContex } from "../../../../Context/CreateOreder/CreateOrderProvider";
import handleProductFetch from "../../../../logic/handleProductFetch";

export default function CreateOrder() {
  const { value, setFunction, handleFunction } = useCreateOrderContex()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])


  const {
    formdata,
    orderProducts,
    disabled,
    grandtotal
  } = value
  const {
    handleSubmit,
    handleFormData,
    handleAddProduct,
    handleGetValue,
  } = handleFunction

  // inputs section: 

  const inputs = [
    {
      label: "Name",
      variant: "big-width",
      placeholder: "Customer Name",
      value: formdata?.customername,
      onChange: handleFormData("customername")
    },
    {
      label: "Mobile Number",
      variant: "big-width",
      placeholder: "Mobile Number",
      value: formdata?.phone,
      onChange: handleFormData("phone")
    },
    {
      label: "Address",
      variant: "textarea",
      placeholder: "Enter address",
      value: formdata?.address,
      onChange: handleFormData("address")
    },
    {
      label: "Shipping Note",
      variant: "textarea",
      placeholder: "নোট  দিলে হবে (আমরা নোট ফলো করি)  বিশেষ সমস্যা হলে কল করবেন",
      value: formdata?.note,
      onChange: handleFormData("note")
    },
  ];

  // totals section
  const totals = [
    {
      label: "Discount",
      field: "discount",
      type: "number",
      value: formdata?.discount,
      onChange: handleFormData("discount")
    },
    {
      label: "Advance",
      field: "advance",
      type: "number",
      value: formdata?.advance,
      onChange: handleFormData("advance")
    },
    {
      label: "Sub Total",
      field: "subtotal",
      type: "number",
      disabled: true,
      value: formdata?.subtotal,
      onChange: handleFormData("subtotal")
    },
    {
      label: "Delivery Charge",
      field: "deliverycharge",
      type: "number",
      value: formdata?.deliverycharge,
      onChange: handleFormData("deliverycharge")
    },
    {
      label: "Grand Total",
      type: "number",
      disabled: true,
      name: "grandtotal",
      value: grandtotal,
      onChange: handleFormData("grandtotal")
    },
  ];

  useEffect(() => {
    const url = `http://localhost:5000/api/products`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.data)
        setLoading(false)
      })
  }, [])

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white text-black">
      {/* User Details */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 font-bold w-[900px]">
        {inputs.map((input, idx) => (
          <Input
            key={idx}
            variant={input?.variant}
            placeholder={input?.placeholder}
            labelname={input?.label}
            onChange={input?.onChange}
            value={input?.value}
          />
        ))}
      </div>

      {/* Product Section */}
      <div className="my-4 flex gap-4">
        {/* Ordered Products */}
        <div className="border-gray-200 border shadow rounded-2xl p-4">
          <h1>Ordered Products</h1>
          <div className="mt-4 w-[500px] h-[500px] overflow-scroll flex flex-col gap-4">
            {
              orderProducts && orderProducts?.map((product, index) => (
                <ProductInfo variant={" "} info={product} key={index} getValue={handleGetValue} />
              ))
            }
          </div>
        </div>



        {/* Add Products */}
        <div className="border p-2 drop-shadow border-gray-200 rounded-2xl">
          <h1>Click To Add Products</h1>
          <div className="mt-4">
            <Input
              variant="small-width"
              labelname="Code/SKU"
              placeholder="Type to Search"
            />
          </div>

          {
            loading ?
              <div className="mt-20">
                <Atom color="#b99d93" size="medium" text="Loding your data please wait" textColor="" />
              </div>
              :
              <div className="mt-4 flex flex-col gap-2 h-[450px] overflow-scroll transition">
                {products.map((prod, index) => (
                  <button
                    key={prod.id || index}
                    type="button"
                    className={disabled.has(prod.id) ? "scale-95 bg-gray-200" : "hover:scale-102 transition"}
                    onClick={() => handleAddProduct(prod)}
                    disabled={disabled.has(prod.id)}
                  >
                    <ProductInfo variant={"button"} info={prod} />
                  </button>
                ))}
              </div>
          }

        </div>
      </div>

      {/* Totals */}
      <div className="flex justify-start gap-4 my-6">
        {totals.map((t, idx) => (
          <Input
            key={idx}
            labelname={t.label}
            variant="small-width"
            value={t.value}
            type={t.type}
            onChange={t?.onChange}
            name={"number"}
            disabled={t?.disabled || false}
          />
        ))}
      </div>

      <button
        type="submit"
        className="drop-shadow-2xl hover:drop-shadow hover:bg-amber-300 bg-green-600 p-4 text-2xl w-2xl rounded-lg"
      >
        Create Order
      </button>
    </form>
  );
}
