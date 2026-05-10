import "./Footer.css";
import Contactlist from "./Contactlist.jsx";

function Footer() {

  const phone = 916200125629;

  const generateMessage = (service = "cab booking") => {
    return encodeURIComponent(
      `Hello, I want to book a ${service}. Please share details.`
    );
  };

  return (
    <div className="footer mt-5">

      <div className="heading text-center pt-5">
        <h1>Contact Us</h1>
        <p>Ready to book your ride? Get in touch with us!</p>
      </div>

      <div className="container">

        <div className="card custom-card mt-4">

          <div className="row w-100">

            {/* Left Side */}
            <div className="col-12 col-lg-5 first mt-4">

              <Contactlist
                icon="fa-solid fa-user"
                name="Owner"
                value="Sandeep Kumar Yadav"
                color="white"
              />

              <Contactlist
                icon="fa-solid fa-phone"
                name="Phone"
                value="6200125629"
                color="yellow"
              />

              <Contactlist
                icon="fa-solid fa-location-dot"
                name="Location"
                value="Indore, MP"
                color="white"
              />

            </div>

            <div className="col-lg-1"></div>

            {/* Right Side */}
            <div className="col-12 col-lg-6 second">

              <a
                href={`tel:${phone}`}
                className="btn btn-warning mt-3"
              >
                Call Now
              </a>

              <a
                href={`https://wa.me/${phone}?text=${generateMessage("tourist cab")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning mt-3"
              >
                Whatsapp
              </a>

            </div>

          </div>

        </div>

      </div>

      <p className="allday mt-5 mb-5">
        Available 24/7 • All Days of the Week
      </p>

      <div className="copyright pt-5 pb-5">
        <div className="content1">
          SANDY TRAVELS - INDORE
        </div>

        <div className="content2">
          © 2026 Sandy Travels. All rights reserved.
        </div>
      </div>

    </div>
  );
}

export default Footer;