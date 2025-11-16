import React, { useEffect, useState } from 'react';
import Container from '../container/Container';
import Header from '../component/Header';
import Fotter from '../component/Footer';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaCheck, FaSpinner } from 'react-icons/fa';

const categories = ['fruits', 'vegetables', 'seeds'];

const generateProducts = categoryName => {
  const products = [];
  const total = Math.floor(Math.random() * 12) + 8;
  for (let i = 1; i <= total; i++) {
    products.push({
      id: i,
      subPoint: 'ইমপোর্টকৃত',
      name: `${categoryName} Product ${i}`,
      href: `#/${categoryName}/${i}`,
      price: Math.floor(Math.random() * 300) + 100,
      DisCountPrice: Math.floor(Math.random() * 300) + 150,
      image: `https://via.placeholder.com/300x300?text=${categoryName}+${i}`,
    });
  }
  return products;
};

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loadCount, setLoadCount] = useState(10);
  const [statusMap, setStatusMap] = useState({});

  useEffect(() => {
    const products = generateProducts(selectedCategory);
    setAllProducts(products);
    setDisplayedProducts(products.slice(0, 10));
    setLoadCount(10);
  }, [selectedCategory]);

  const handleLoadMore = () => {
    const nextCount = loadCount + 10;
    setDisplayedProducts(allProducts.slice(0, nextCount));
    setLoadCount(nextCount);
  };

  const handleCartItem = id => {
    if (statusMap[id] === 'added') return;

    setStatusMap(prev => ({ ...prev, [id]: 'loading' }));

    let selectItem = allProducts.find(item => item.id === id);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const exist = cart.find(item => item.id === id);

    if (!exist) {
      cart.push(selectItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    let summary = JSON.parse(localStorage.getItem('cartSummary')) || [];

    const found = summary.find(item => item.id === id);

    if (found) {
      found.qty += 1;
      found.totalPrice = found.qty * found.price;
    } else {
      summary.push({
        ...selectItem,
        qty: 1,
        totalPrice: selectItem.price,
      });
    }

    localStorage.setItem('cartSummary', JSON.stringify(summary));

    window.dispatchEvent(new Event('cartUpdated'));

    setTimeout(() => {
      setStatusMap(prev => ({ ...prev, [id]: 'added' }));
    }, 1000);
  };

  return (
    <>
      <Header />
      <section className="tablet:py-[100px] laptop:py-[100px] computer:py-[100px] mobile:pt-[150px] mobile:pb-[100px]">
        <Container>
          <h1 className="text-[30px] font-bold text-green-700 w-full mx-auto mb-[50px]">
            নতুন শিপিংয়ে আসা {selectedCategory} ও অন্যান্য বীজ
          </h1>
          <div className="flex items-center flex-wrap gap-5">
            {displayedProducts.map((item, index) => (
              <div
                key={index}
                className="computer:w-[23%] mobile:w-[47%] tablet:w-[48%] laptop:w-[32%] h-auto group"
              >
                <div className="image w-full h-auto object-cover border-2 border-green-800 cursor-pointer relative">
                  <img className="w-full h-full" src={item.image} alt="" />
                  <button className="text-[16px] font-semibold text-gray-800 bg-white py-[6px] px-2.5 rounded-full absolute top-[15px] left-[20px]">
                    Sale !
                  </button>
                </div>
                <div className="text bg-green-500/30 group-hover:bg-white transition-all ease-in-out duration-300 p-[10px] rounded-b-[12px]">
                  <h3 className="text-[13px] font-semibold text-gray-500 mb-[10px]">
                    {item.subPoint}
                  </h3>
                  <h4 className="text-[16px] font-normal text-gray-600 text-center mb-[10px] cursor-pointer mobile:h-[190px] tablet:h-auto laptop:h-auto computer:h-auto mobile:w-[132px] tablet:w-[270px] laptop:w-[295px] computer:w-[295px] mx-auto">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-center mb-[8px]">
                    <h5 className="text-[20px] font-semibold text-orange-500 line-through flex items-center">
                      {item.DisCountPrice} <TbCurrencyTaka />
                    </h5>
                    <h5 className="text-[20px] font-semibold text-black flex items-center">
                      {item.price} <TbCurrencyTaka />
                    </h5>
                  </div>
                  <button
                    onClick={() => handleCartItem(item.id)}
                    className="text-[16px] font-semibold text-white mobile:px-[20px] tablet:px-[30px] laptop:px-[30px] computer:px-[30px] py-[8px] bg-green-800 hover:text-green-800 hover:bg-transparent transition ease-in-out duration-300 rounded-md"
                  >
                    {statusMap[item.id] === 'loading' ? (
                      <div className="flex items-center gap-[10px]">
                        Adding <FaSpinner className="animate-spin" />
                      </div>
                    ) : statusMap[item.id] === 'added' ? (
                      <div className="flex items-center gap-[10px]">
                        Added <FaCheck />
                      </div>
                    ) : (
                      'Add To Cart'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {displayedProducts.length < allProducts.length && (
            <div className="mt-5 text-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-blue-500 text-white rounded-md"
              >
                Load More
              </button>
            </div>
          )}
        </Container>
      </section>
      <Fotter />
    </>
  );
};

export default CategoryPage;
