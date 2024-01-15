import "./about.css";
import Footer from "../foot/footer";
import Header from "../nav/header";
import Button from "@mui/joy/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MapComponent from "../mapa/mapa";
import Divider from "../dev/divider";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="idiot">
        <h1>Contact us ?</h1>
        <hr />
      </div>
      <div className="svi">
        <div className="inputici">
          <input type="text" required placeholder="NAME" />
          <input type="email" name="" id="" required placeholder="EMAIL" />
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="MESSAGE"
          ></textarea>
          <Button
            variant="soft"
            style={{ backgroundColor: "pink", color: "grey" }}
          >
            SUBMIT
          </Button>
        </div>
        <div className="zapratite">
          <div className="mesta">
            <h3>Email Us</h3>
            <p>as.business@gmail.com</p>
          </div>
          <div className="mesta">
            <h3>Call Us</h3>
            <p>+381 61 234567</p>
          </div>
          <div className="mesta">
            <h3>Follow Us</h3>
            <div className="gluposti">
              <a
                href="https://www.instagram.com/asijasijaricc/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/asija-sijaric-151a70267/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/asijasijaricc" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="mesta">
            <h3>Visti Us</h3>
            <p>Novi Pazar, Serbia - AVNOJ BB</p>
          </div>
        </div>
      </div>
      <div className="mapica">
        <MapComponent />
      </div>
      <Divider />
      <div className="pitanja">
        <div className="debil">
          <h1>F.A.Q</h1>
        </div>
        <div className="QA">
          <div className="nmg">
            <div>
              <h3>How can I start my own business?</h3>
              <p>
                Starting your own business requires planning, market research,
                creating a business model, and registration. On the blog, you
                can find steps and resources to help you kickstart your
                entrepreneurial journey.
              </p>
            </div>
            <hr />
            <div>
              <h3>How to attract investors for my startup?</h3>
              <p>
                Attracting investors requires a solid business plan, a clear
                value proposition for your product or service, and effective
                communication skills. The blog provides tips on pitching,
                crafting a business plan, and approaching investors.
              </p>
            </div>
            <hr />
            <div>
              <h3>How to deal with competition in the market?</h3>
              <p>
                Competition is inevitable, but the key is effective management.
                On the blog, you'll discover strategies for researching the
                competition, product/service differentiation, and staying
                abreast of industry changes
              </p>
            </div>
          </div>
          <div className="nmg">
            <div>
              <h3>
                How to effectively use social media for business promotion?
              </h3>
              <p>
                Social media is a powerful tool for promotion. The blog explains
                how to identify your target audience, create relevant content,
                utilize advertising, and track results.
              </p>
            </div>
            <hr />
            <div>
              <h3>How to manage finances in a small business?</h3>
              <p>
                Financial management is crucial for success. The blog provides
                advice on tracking income and expenses, budget planning,
                record-keeping, and avoiding common financial pitfalls.
              </p>
            </div>
            <hr />
            <div>
              <h3> How to maintain motivation and productivity in a team?</h3>
              <p>
                Sustaining high levels of motivation and productivity in a team
                requires effective leadership, communication, and support. The
                blog explores strategies for building a positive work
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
