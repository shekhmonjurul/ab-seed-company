export default async function handleProductFetch(url, option) {
    const res = await fetch(url, option)
    const data = await res.json()


    const products = data.data?.map((product, index) => {
        const {
            id,
            name,
            short_description,
            regular_price,
            sale_price,
            stock_quantity,
            categories,
            images
        } = product
        return {
            id,
            name,
            type: short_description,
            price: sale_price,
            images,
            stock: stock_quantity
        }
    })
    return products
}