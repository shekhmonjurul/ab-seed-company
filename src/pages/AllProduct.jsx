import Header from "../component/Header";
import Button from "../component/Button"
import RenderList from "../component/RenderList";
import ProductCard from "../component/ProductCard";
import Container from "../container/Container";

const seedCategories = [
    { name: "সকল পণ্য", href: "#" },
    { name: "শীতকালীন", href: "#" },
    { name: "দেশি সবজি ", href: "#" },
    { name: "শিম", href: "#" },
    { name: "মরিচ", href: "#" },
    { name: "শসা-করলা", href: "#" },
    { name: "টমেটো", href: "#" },
    { name: "কুমড়া", href: "#" },
    { name: "বেগুন", href: "#" },
    { name: "তরমুজ", href: "#" },
    { name: "ফুলের বীজ", href: "#" },
    { name: "কৃষি টুল", href: "#" },
];


export default function AllProduct() {
    return (
      <>
        <section>
            <Header />

            <RenderList arr={seedCategories} />
            {/* <div className="flex gap-2 flex-wrap  w-full px-4">
              <ProductCard />
              <ProductCard />
            </div> */}
        </section>
      </>
    );
}