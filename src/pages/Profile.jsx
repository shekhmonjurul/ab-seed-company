import { Link } from "react-router-dom";
import Header from "../component/Header";
import Container from "../container/Container";

export default function Profile() {
    return (
      <>
        <section>
          <Container>
            <Header />
            <div className="my-5 text-4xl bg-white drop-shadow-2xl hover:drop-shadow p-4 rounded-2xl w-[400px]">
              <Link to={'/addmin/ecom/order/search'}>Serch pages</Link>
            </div>
          </Container>
        </section>
      </>
    );
}