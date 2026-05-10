import "./About.css";
function About() {
  return (
    <section className="row">
      <div className="col-1"></div>
      <div className="col-5 ">
        <h1>About Sandy Travels</h1>
        <h5 className="paragraph1 mt-4">
          Your trusted travel companion in Indore, offering reliable and
          comfortable taxi services around the clock.
        </h5>
        <h5 className="paragraph2 mt-4">
          With our fleet of well-maintained Toyota Etios vehicles and
          experienced drivers, we ensure your journey is safe, comfortable, and
          enjoyable. Whether it's a local trip or an outstation journey, we're
          here to serve you.
        </h5>
        <ul className="mt-5 px-3">
          <li>Professional & Experienced Drivers</li>
          <li>Clean & Well-Maintained Vehicles</li>
          <li>Affordable & Transparent Pricing</li>
          <li>24/7 Customer Support</li>
        </ul>
      </div>
      <div className="col-4 px-5">
        <img src="src/assets/about.jpg" alt="about image" />
      </div>
      <div className="col-2"></div>
    </section>
  );
}

export default About;
