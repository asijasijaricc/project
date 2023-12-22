import "./app.css";
import img from "../public/as.jpg";

function App() {
  return (
    <div className="nav">
      <div className="logic">
        <img src={img} alt="" />
      </div>
      <div className="linkovi">
        <a href="">home</a>
        <a href="">categories</a>
        <a href="">articles</a>
        <a href="">about us</a>
      </div>
    </div>
  );
}

export default App;
