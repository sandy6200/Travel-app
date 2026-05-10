import "./Home.css";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import mercedes from "../../assets/images/mercedes.jpg";
function Home() {
  return (
    <section>
      <div className="brands">
        <h1>Brands</h1>
        <Link className="link">
          See All <i class="fa-solid fa-greater-than"></i>
        </Link>
      </div>

      <div className="all-brands">
        <BrandLogo name="Mercedes" image={mercedes}/>
      </div>
    </section>
  );
}

export default Home;
