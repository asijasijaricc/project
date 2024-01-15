import Footer from "../foot/footer";
import Header from "../nav/header";
import Button from "@mui/joy/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact us ?</h1>
      <div>
        <div className="inputici">
          <input type="text" />
          <input type="email" name="" id="" />
          <textarea id="message" name="message" rows="4" cols="50"></textarea>
          <Button variant="soft" className="submitic">
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
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTiktok} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="mesta">
            <h3>Visti Us</h3>
            <p>Novi Pazar, Serbia - AVNOJ BB</p>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
