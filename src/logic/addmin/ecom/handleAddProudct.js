 const handleAddProduct = (product) => {
    setDisabledIds((prev) => new Set(prev).add(product.id));
    setFormData((prev) => ({
      ...prev,
      subtotal: prev.subtotal + product.price,
    }));
    setRenderprod(pev => [...pev, product])
    { console.log("subtotal: ", subtotal) }
  };

export default handleAddProduct