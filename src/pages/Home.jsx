import Card from "../component/Card";
import Header from "../component/Header";
import Pluse from "../component/Pluse";


export default function Home() {


  const products = [
    {
      id: 1,
      imgsrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", // Tomato image
      catagoryname: "Tomato",
      shortdecription: "This is fresh tomato...",
      price: "120"
    },
    {
      id: 2,
      imgsrc: "https://images.unsplash.com/photo-1506806732259-39c2d0268443", // Potato image
      catagoryname: "Potato",
      shortdecription: "Fresh and organic potato...",
      price: "80"
    },
    {
      id: 1,
      imgsrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", // Tomato image
      catagoryname: "Tomato",
      shortdecription: "This is fresh tomato...",
      price: "120"
    },
    {
      id: 2,
      imgsrc: "https://images.unsplash.com/photo-1506806732259-39c2d0268443", // Potato image
      catagoryname: "Potato",
      shortdecription: "Fresh and organic potato...",
      price: "80"
    },
    {
      id: 1,
      imgsrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", // Tomato image
      catagoryname: "Tomato",
      shortdecription: "This is fresh tomato...",
      price: "120"
    },
    {
      id: 2,
      imgsrc: "https://images.unsplash.com/photo-1506806732259-39c2d0268443", // Potato image
      catagoryname: "Potato",
      shortdecription: "Fresh and organic potato...",
      price: "80"
    },
    {
      id: 1,
      imgsrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", // Tomato image
      catagoryname: "Tomato",
      shortdecription: "This is fresh tomato...",
      price: "120"
    },
    {
      id: 2,
      imgsrc: "https://images.unsplash.com/photo-1506806732259-39c2d0268443", // Potato image
      catagoryname: "Potato",
      shortdecription: "Fresh and organic potato...",
      price: "80"
    },
    {
      id: 1,
      imgsrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", // Tomato image
      catagoryname: "Tomato",
      shortdecription: "This is fresh tomato...",
      price: "120"
    },
    {
      id: 2,
      imgsrc: "https://images.unsplash.com/photo-1506806732259-39c2d0268443", // Potato image
      catagoryname: "Potato",
      shortdecription: "Fresh and organic potato...",
      price: "80"
    },
    {
      id: 1,
      imgsrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", // Tomato image
      catagoryname: "Tomato",
      shortdecription: "This is fresh tomato...",
      price: "120"
    },
    {
      id: 2,
      imgsrc: "https://images.unsplash.com/photo-1506806732259-39c2d0268443", // Potato image
      catagoryname: "Potato",
      shortdecription: "Fresh and organic potato...",
      price: "80"
    },
    {
      id: 1,
      imgsrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", // Tomato image
      catagoryname: "Tomato",
      shortdecription: "This is fresh tomato...",
      price: "120"
    },
    {
      id: 2,
      imgsrc: "https://images.unsplash.com/photo-1506806732259-39c2d0268443", // Potato image
      catagoryname: "Potato",
      shortdecription: "Fresh and organic potato...",
      price: "80"
    },
    {
      id: 1,
      imgsrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", // Tomato image
      catagoryname: "Tomato",
      shortdecription: "This is fresh tomato...",
      price: "120"
    },

  ]

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between w-full">
        {
          products.map((item, index) => (
            <div key={index} >
              <Card imgsrc={item.imgsrc} catagoryname={item.catagoryname} shortdecription={item.shortdecription} price={item.price} key={item.id} />
            </div>
          ))
        }
        {/* <Pluse /> */}
      </div>

    </>
  )
}