import React, { useEffect, useState } from 'react';
import Container from '../container/Container';

const ProductImages = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fakeProducts = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      categoryName: `category${i + 1}`,
      image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`,
    }));
    setProducts(fakeProducts);
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <section className="py-[100px]">
      <Container>
        <h1 className="mobile:text-[24px] tablet:text-[36px] laptop:text-[36px] computer:text-[36px] mobile:leading-[30px] tablet:leading-[40px] laptop:leading-[50px] computer:leading-[50px] font-bold mx-auto text-gray-600 my-[50px] mobile:w-auto tablet:w-auto laptop:w-[650px] computer:w-[650px]">
          আমরা পাইকারি দামে দিচ্ছি তাই সর্বনিম্ন ২৫০৳ অর্ডার করুন, ডেলিভারি
          চার্জ- মাত্র ৫০৳
        </h1>
        <h2 className="mobile:text-[24px] tablet:text-[36px] laptop:text-[36px] computer:text-[36px] mobile:leading-[30px] tablet:leading-[40px] laptop:leading-[50px] computer:leading-[50px] font-bold mx-auto text-gray-600 my-[50px] mobile:w-auto tablet:w-auto laptop:w-[650px] computer:w-[650px]">
          পর্যায়ক্রমে সকল আইটেম দেখতে নিচের "নতুন শিপিং" অপশনটি থেকে শুরু করুন
        </h2>
        <div className="flex flex-col gap-3">
          {products.slice(0, visibleCount).map(item => (
            <a
              key={item.id}
              href={`/category/${item.categoryName}`}
              className="cursor-pointer"
            >
              <img
                className="w-full h-auto object-cover"
                src={item.image}
                alt={item.categoryName}
              />
            </a>
          ))}
        </div>
        {visibleCount < products.length && (
          <div className="flex justify-center mt-5">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductImages;

// import React from 'react';
// import Container from '../container/Container';

// const ProductImages = () => {

//   return (
//     <>
//       <section className='py-[100px]'>
//         <Container>
//           <h1 className="mobile:text-[24px] tablet:text-[36px] laptop:text-[36px] computer:text-[36px] mobile:leading-[30px] tablet:leading-[40px] laptop:leading-[50px] computer:leading-[50px] font-bold mx-auto text-gray-600 my-[50px] mobile:w-auto tablet:w-auto laptop:w-[650px] computer:w-[650px]">
//             আমরা পাইকারি দামে দিচ্ছি তাই সর্বনিম্ন ২৫০৳ অর্ডার করুন, ডেলিভারি
//             চার্জ- মাত্র ৫০৳
//           </h1>
//           <h2 className="mobile:text-[24px] tablet:text-[36px] laptop:text-[36px] computer:text-[36px] mobile:leading-[30px] tablet:leading-[40px] laptop:leading-[50px] computer:leading-[50px] font-bold mx-auto text-gray-600 my-[50px] mobile:w-auto tablet:w-auto laptop:w-[650px] computer:w-[650px]">
//             পর্যায়ক্রমে সকল আইটেম দেখতে নিচের "নতুন শিপিং" অপশনটি থেকে শুরু
//             করুন
//           </h2>
//           <div className="flex flex-col gap-3">
//             {product.map((item, index) => (
//               <a
//                 href={item.href}
//                 key={index}
//                 className="mobile:w-auto tablet:w-auto laptop:w-[1030px] computer:w-[1030px] h-auto mx-auto cursor-pointer"
//               >
//                 <img
//                   className="w-full h-full object-cover bg-no-repeat"
//                   src={item.image}
//                   alt="product-images"
//                 />
//               </a>
//             ))}
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default ProductImages;
