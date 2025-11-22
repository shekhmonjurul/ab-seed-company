import { useEffect, useRef, useState } from 'react';
import AddminNav from '../../component/Addmin/AddminNav';
import ProductCardAddmin from '../../component/Addmin/ProductCardAddmin';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

let fakeProducts = [
  {
    id: 'P1001',
    name: 'Wireless Bluetooth Headphone',
    price: 1200,
    discount: 10,
    stock: 25,
    thumbnail: 'https://picsum.photos/200?random=1',
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 'P1002',
    name: 'Gaming Mouse RGB',
    price: 900,
    discount: 0,
    stock: 50,
    thumbnail: 'https://picsum.photos/200?random=2',
    category: 'Accessories',
    rating: 4.2,
  },
  {
    id: 'P1003',
    name: 'Sports Running Shoes',
    price: 1800,
    discount: 15,
    stock: 35,
    thumbnail: 'https://picsum.photos/200?random=3',
    category: 'Fashion',
    rating: 4.0,
  },
  {
    id: 'P1004',
    name: 'Smart Watch Pro',
    price: 2500,
    discount: 20,
    stock: 40,
    thumbnail: 'https://picsum.photos/200?random=4',
    category: 'Electronics',
    rating: 4.6,
  },
  {
    id: 'P1005',
    name: 'Mechanical Keyboard',
    price: 3200,
    discount: 5,
    stock: 18,
    thumbnail: 'httpsum.photos/200?random=5',
    category: 'Accessories',
    rating: 4.8,
  },
  {
    id: 'P1006',
    name: "Men's Casual Shirt",
    price: 750,
    discount: 0,
    stock: 60,
    thumbnail: 'https://picsum.photos/200?random=6',
    category: 'Fashion',
    rating: 4.1,
  },
  {
    id: 'P1007',
    name: '4K Action Camera',
    price: 4200,
    discount: 12,
    stock: 15,
    thumbnail: 'https://picsum.photos/200?random=7',
    category: 'Electronics',
    rating: 4.4,
  },
  {
    id: 'P1008',
    name: 'Portable Speaker',
    price: 1500,
    discount: 0,
    stock: 48,
    thumbnail: 'https://picsum.photos/200?random=8',
    category: 'Electronics',
    rating: 4.3,
  },
  {
    id: 'P1009',
    name: 'Sunglasses UV-Pro',
    price: 500,
    discount: 10,
    stock: 80,
    thumbnail: 'https://picsum.photos/200?random=9',
    category: 'Fashion',
    rating: 4.0,
  },
  {
    id: 'P1010',
    name: 'Laptop Stand Adjustable',
    price: 1300,
    discount: 8,
    stock: 22,
    thumbnail: 'https://picsum.photos/200?random=10',
    category: 'Accessories',
    rating: 4.5,
  },
];

export default function ProductList() {
  const [products, setProducts] = useState(fakeProducts);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(10);
  const loadRef = useRef(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const url = `http://localhost:5000/api/products/get?page=${page}&limit=${limit}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        const products = data?.data?.products || [];
        console.log('products: ', products);
        setProducts(prev => [...prev, ...products]);
      }
    };

    try {
      fetchProducts();
    } catch (error) {
      console.log('Error for prodcuts fetch: ', error);
    }
  }, [page, limit]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entri => {
        const intersect = entri[0].isIntersecting;
        if (intersect) {
          setPage(prev => prev + 1);
          console.log('intesect: ', intersect, page);
        }
      },
      { threshold: 1 }
    );

    const current = loadRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <>
      <div className="mx-4">
        <h1
          className="text-black my-4 font-bold"
          style={{
            fontSize: '45px',
          }}
        >
          All Products
        </h1>
        <AddminNav />
        <br />
        <div className="bg-white p-4 border-2 text-black rounded-4xl">
          <div className="flex justify-between px-4 font-bold">
            <h2>
              <FilterAltOutlinedIcon
                sx={{
                  fontSize: '45px',
                }}
              />
              Products by sale
            </h2>
            <h2>50 of 200</h2>
          </div>
          <div className="overflow-scroll h-[670px]">
            {products.map((details, index) => (
              <div key={index} className="mt-4">
                <ProductCardAddmin productdetailes={details} />
              </div>
            ))}

            <div ref={loadRef}>Load More Products.....</div>
          </div>
        </div>
      </div>
    </>
  );
}
