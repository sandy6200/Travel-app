import "./Contactlist.css";

function Contactlist({ icon, name, value, color }) {
  return (
    <div className="f-1 mb-3">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="designation ">
        <p className="mb-0 name">{name}</p>
        <p className={`mb-0 value ${color}`}>{value}</p>
      </div>
    </div>
  );
}

export default Contactlist;
