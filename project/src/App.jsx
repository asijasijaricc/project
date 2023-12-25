import "./app.css";
import img from "../public/as.jpg";

function App() {
  return (
    <div>
      <div className="header">
        <div className="logic">
          <img src={img} alt="" />
        </div>
        <div className="linkovi">
          <ul>home</ul>
          <ul>articles</ul>
          <ul>contact</ul>
          <ul>about</ul>
        </div>
        <input
          className="pretrazi"
          type="text"
          disabled={false}
          placeholder="search"
          size="lg"
          variant="soft"
        />
      </div>
      <div className="pocetak">
        <h4>Hi ! I am as.</h4>
        <hr />
        <p>
          Welcome aboard! At as. we're passionate about business. Dive into a
          treasure trove of articles, insights, and stories crafted just for
          you.Ready to embark on an exciting journey? Start exploring below and
          uncover the endless possibilities of world of business with us!
        </p>
      </div>
    </div>
  );
}

export default App;
