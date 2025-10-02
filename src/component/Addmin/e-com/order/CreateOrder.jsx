import Input from "./Input";
import ProductInfo from "./ProductInfo";
import { useEffect, useState } from "react";

export default function CreateOrder() {
  const [formData, setFormData] = useState({
    subtotal: 89,
    deliverycharge: 50,
    discount: 0,
    advance: 0,
    number: "01716550180",
  });
  const [products, setProducts] = useState([])

  const [renderProduct, setRenderProduct] = useState([]);
  const [disabledIds, setDisabledIds] = useState(new Set()); // store disabled product ids

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
    console.log("Order Submitted:", { ...formData, grandtotal, renderProduct });
  };

  const handleAddProduct = (product) => {
    setRenderProduct((prev) => [...prev, product.label.
      props.info
    ]);
    setDisabledIds((prev) => new Set(prev).add(product.id));
    setFormData((prev) => ({
      ...prev,
      subtotal: prev.subtotal + product.price,
    }));

    console.log('product: ', product)

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




  useEffect(() => {
    const url = "http://localhost:5000/api/products"
    fetch(url)
      .then(res => res.json())
      .then(products => {

        const productdetails = products?.data.map((details, index) => {
          const { name, short_description, sku, price, sale_price, stock_quantity, categories, images } = details
          const info = {
            name,
            type: short_description,
            sku,
            price: sale_price,
            stock_quantity,
            categories,
            images
          }
          const productbutton = {
            id: index + 1,
            label: <ProductInfo variant={"info"} info={info} />,
            price: parseInt(price)
          }
          return productbutton
        })

        setProducts(productdetails)

      })
  }, [])


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
            {renderProduct.map((prod, index) => (
              <ProductInfo key={index} variant="" info={prod} />
              // console.log("pord: ", prod)

            ))}
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

          <div className="mt-4 flex flex-col gap-2 h-[450px] overflow-scroll transition">
            {products.map((prod) => (
              <button
                key={prod.id}
                type="button"
                className={disabledIds.has(prod.id) ? "scale-95 bg-gray-200" : "hover:scale-102 transition"}
                onClick={() => handleAddProduct(prod)}
                disabled={disabledIds.has(prod.id)}
              >
                {prod.label}
              </button>
            ))}
          </div>
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
