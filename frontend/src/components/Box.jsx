import "./Box.css";
function Box({ icon, heading, content }) {
  return (
    <div className="box">
      <div className="icon mt-3 mx-4">{icon}</div>
      <div className="heading mt-4 mx-4">{heading}</div>
      <div className="content mt-2 mx-4">{content}</div>
    </div>
  );
}

export default Box;
