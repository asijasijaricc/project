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
      <Footer />
    </div>
  );
};

export default Contact;
