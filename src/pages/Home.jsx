import Header from '../component/Header';
import Fotter from '../component/Footer';
import ProductImages from '../component/ProductImages';
import Card from "../component/Card";
import Fotter from "../component/Fotter";
import Header from "../component/Header";
import Pluse from "../component/Pluse";


export default function Home() {
  return (
    <>
      <Header />
      <ProductImages />
      <Fotter />
      <div className="flex flex-wrap justify-between w-full">
        {
          products.map((item, index) => (
            <div key={index} >
              <Card imgsrc={item.imgsrc} catagoryname={item.catagoryname} shortdecription={item.shortdecription} price={item.price} key={item.id} />
            </div>
          ))
        }
      </div>
      <Fotter/>
    </>
  );
}
