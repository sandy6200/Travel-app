import "./BrandLogo.css";
function BrandLogo({ name, image }) {
  return (
    <div className="card cards mb-5" style={{ width: "8rem", height: "8rem" }}>
      <img src={image} className="card-img-top" alt="mercedes logo" />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>

        <a href="#" className="btn btn-primary">
          Checkout
        </a>
      </div>
    </div>
  );
}

export default BrandLogo;
