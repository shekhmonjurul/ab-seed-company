import Input from "./Input";
import ProductInfo from "./ProductInfo";
import { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

export default function CreateOrder() {
  const [formData, setFormData] = useState({
    subtotal: 0,
    deliverycharge: 50,
    discount: 0,
    advance: 0,
    number: "01716550180",
  }); // add korte hobe customer name, address, note

  const [products, setProducts] = useState([]) // product set korbe from api
  const [subtotal, setSubtotal] = useState([])
  const [renderprod, setRenderprod] = useState([]) // render product after click button
  const [disabledIds, setDisabledIds] = useState(new Set()); // store disabled product ids
  const [loding, setLoding] = useState(true)
  const [sku, setSku] = useState("")
  const [count, setCount] = useState(1)

  // derived value (no need for separate state)
  const grandtotal =
    formData.subtotal +
    formData.deliverycharge -
    formData.discount -
    formData.advance;

  const handleChange = (field) => (e) => {
    const value = field === "number" ? e.target.value : Number(e.target.value);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddProduct = (product) => {
    setDisabledIds((prev) => new Set(prev).add(product.id));
    setFormData((prev) => ({
      ...prev,
      subtotal: prev.subtotal + product.price,
    }));
    setRenderprod(pev => [...pev, product])
    { console.log("subtotal: ", subtotal) }
  };


  const inputs = [
    { label: "Name", variant: "big-width", placeholder: "Customer Name" },
    {
      label: "Mobile Number",
      variant: "big-width",
      placeholder: "Mobile Number",
      onChange: handleChange("number"),
      value: formData.number,
    },
    { label: "Address", variant: "textarea", placeholder: "Enter address" },
    {
      label: "Shipping Note",
      variant: "textarea",
      placeholder:
        "নোট  দিলে হবে (আমরা নোট ফলো করি)  বিশেষ সমস্যা হলে কল করবেন ।",
    },
  ];

  const totals = [
    {
      label: "Discount",
      field: "discount",
      value: formData.discount,
      type: "number",
    },
    {
      label: "Advance",
      field: "advance",
      value: formData.advance,
      type: "number",
    },
    {
      label: "Sub Total",
      field: "subtotal",
      value: formData.subtotal,
      type: "number",
      disabled: true,
    },
    {
      label: "Delivery Charge",
      field: "deliverycharge",
      value: formData.deliverycharge,
      type: "number",
    },
    {
      label: "Grand Total",
      value: grandtotal,
      type: "number",
      disabled: true,
    },
  ];

  const handelSku = (e) => {
    const value = e.target.value
    setSku(value)
  }
  const handelScroll = (e) => {
  }

  const handleGetValue = (value) => {

    renderprod?.map((product) => {
      const id = value?.id
      if (id === product?.id) {
        setSubtotal(pev => {
          const newArr = [...pev]
          newArr[id - 1] = value?.newTotal
          return newArr
        })
      }
      return
    })
    setCount(pev => pev + 1)
    return
  }

  const handleproductdetails = (products) => {
    const data = products?.data.map((details, index) => {
      const { name, short_description, sku, price, sale_price, stock_quantity, categories, images } = details
      const info = {
        id: index + 1,
        name,
        type: short_description,
        sku,
        price: Number(sale_price),
        stock_quantity,
        categories,
        images
      }
      return info
    })
    return data
  }  // handle fetch call 

  const handleFetch = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    const setpro = handleproductdetails(data)
    setProducts(setpro)
    setLoding(false)

  }


  useEffect(() => {
    if (sku) {
      const url = `https://ab-seed-server-1.onrender.com/api/products?search=${sku}`
      handleFetch(url)
    } else {
      const url = "https://ab-seed-server-1.onrender.com/api/products/"
      handleFetch(url)
    }
  }, [sku]) // fetch call for sku search

  useEffect(() => {
    const result = subtotal.reduce((sum, price) => sum + price, 0)
    setFormData(pev=>({...pev, subtotal: result}))
  }, [count]) // calculet subtoal

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white text-black">
      {/* User Details */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 font-bold w-[900px]">
        {inputs.map((input, idx) => (
          <Input
            key={idx}
            variant={input.variant}
            placeholder={input.placeholder}
            labelname={input.label}
            onChange={input.onChange}
            value={input.value}
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
              renderprod && renderprod?.map((product, index) => (
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
              value={sku}
              onChange={handelSku}
            />
          </div>

          {
            loding ?
              <div className="mt-20">
                <Atom color="#b99d93" size="medium" text="Loding your data please wait" textColor="" />
              </div>
              :
              <div className="mt-4 flex flex-col gap-2 h-[450px] overflow-scroll transition" onScroll={handelScroll}>
                {products.map((prod, index) => (
                  <button
                    key={prod.id || index}
                    type="button"
                    className={disabledIds.has(prod.id) ? "scale-95 bg-gray-200" : "hover:scale-102 transition"}
                    onClick={() => handleAddProduct(prod)}
                    disabled={disabledIds.has(prod.id)}
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
            onChange={t.field ? handleChange(t.field) : undefined}
            type={t.type}
            disabled={t.disabled || false}
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
