import "./About.css";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <section className="container-fluid about py-5">
      <div className="row align-items-center">

        <div className="col-lg-1"></div>

        {/* Text Section */}
        <div className="col-12 col-lg-5 px-4">
          <h1>About Sandy Travels</h1>

          <h5 className="paragraph1 mt-4">
            Your trusted travel companion in Indore, offering reliable and
            comfortable taxi services around the clock.
          </h5>

          <h5 className="paragraph2 mt-4">
            With our fleet of well-maintained Toyota Etios vehicles and
            experienced drivers, we ensure your journey is safe, comfortable,
            and enjoyable. Whether it's a local trip or an outstation journey,
            we're here to serve you.
          </h5>

          <ul className="mt-4 px-3">
            <li>Professional & Experienced Drivers</li>
            <li>Clean & Well-Maintained Vehicles</li>
            <li>Affordable & Transparent Pricing</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="col-12 col-lg-4 text-center mt-4 mt-lg-0">
          <img src={aboutImg} alt="about" className="about-img img-fluid" />
        </div>

        <div className="col-lg-2"></div>
      </div>
    </section>
  );
}

export default About;