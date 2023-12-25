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
        <div>
          <h4>
            Hi ! I am <span>as.</span>
          </h4>
          <hr />
          <br />
          <p>
            Welcome aboard! At <span>as.</span> we're passionate about business.
            Dive into a treasure trove of articles, insights, and stories
            crafted just for you.Ready to embark on an exciting journey? Start
            exploring below and uncover the endless possibilities of world of
            business with us!
          </p>
          <br />
          <h5>DREAM. PLAN. DO.</h5>
          <div className="boss">
            <img
              src="https://i.pinimg.com/564x/38/ab/2b/38ab2bed9bd37c369349440d94cb54d8.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
