import "./app.css";
import img from "../public/as.jpg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Divider from "../component/dev/divider";

const router = createBrowserRouter([
  { path: "/", element: <p></p> },
  { path: "/articles/:id", element: <p></p> },
  { path: "/contact/:id", element: <p></p> },
  { path: "/about/:id", element: <p></p> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <div className="header">
        <div className="logic">
          <img src={img} alt="" />
        </div>
        <div className="linkovi">
          <ul>home</ul>
          <ul>articles</ul>
          <ul>categories</ul>
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
      <Divider />
      <div className="cilj">
        <h1>Our achievements !</h1>
        <p>
          Celebrating our journey, our blog has become a thriving community of
          50,000 daily readers, a testament to the engaging content we share.
          Each post is embraced with 15,000 likes, a heartfelt acknowledgment
          from our incredible audience. Over the past two years, our dedication
          and creativity have earned us 146 awards, milestones that reflect our
          commitment to delivering meaningful, entertaining, and award-winning
          content. With every achievement, we're inspired to keep pushing
          boundaries and crafting content that resonates with our audience.
        </p>
      </div>
      <div className="stafic">
        <div className="citaci">
          <FontAwesomeIcon icon={faGlasses} className="naocare" />
          <h1>50k</h1>
          <p>readers per day</p>
        </div>
        <div className="lajkovi">
          <FontAwesomeIcon icon={faHeart} className="srce" />
          <h1>15K</h1>
          <p>hearts on the post</p>
        </div>
        <div className="nagrade">
          <FontAwesomeIcon icon={faTrophy} className="trofej" />
          <h1>146</h1>
          <p>social media awards</p>
        </div>
      </div>
    </div>
  );
}

export default App;
