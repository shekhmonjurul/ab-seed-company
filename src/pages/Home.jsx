import { href } from 'react-router-dom';
import Card from '../component/Card';
import Header from '../component/Header';
import Pluse from '../component/Pluse';
import Fotter from '../component/Footer';
import ProductImages from '../component/ProductImages';

export default function Home() {
  return (
    <>
      <Header />
      <ProductImages />
      <Fotter />
    </>
  );
}
