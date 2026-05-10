import "./Services.css";
import Box from "./Box.jsx";

function Services() {
  return (
    <>
      <div className="head mt-2">
        <h1 className="our">Our Services</h1>
        <p className="trust">Your trusted travel partner in Indore</p>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center m-0">

          <div className="col-12 col-lg-10 box-container">

            <Box
              icon={<i className="fa-solid fa-car"></i>}
              heading="ETIOS Fleet"
              content="Comfortable and well-maintained Toyota Etios vehicles for your journey"
            />

            <Box
              icon={<i className="fa-solid fa-car"></i>}
              heading="24/7 Availability"
              content="Round-the-clock service every day of the week for your convenience"
            />

            <Box
              icon={<i className="fa-solid fa-taxi"></i>}
              heading="Tourist Cabs"
              content="All types of tourist cabs available for local and outstation trips"
            />

            <Box
              icon={<i className="fa-solid fa-hands-holding-child"></i>}
              heading="Safe Travel"
              content="Experienced drivers ensuring safe and comfortable journeys"
            />

            <Box
              icon={<i className="fa-solid fa-people-roof"></i>}
              heading="Family Friendly"
              content="Spacious vehicles perfect for family trips and group travel"
            />

            <Box
              icon={<i className="fa-solid fa-location-dot"></i>}
              heading="Anywhere You Go"
              content="Serving Indore and surrounding areas with reliable transport"
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default Services;