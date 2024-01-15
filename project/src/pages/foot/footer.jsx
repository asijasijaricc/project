import "./footer.css";

const Footer = () => {
  return (
    <div className="sve">
      <div className="first">
        <img src="/as.jpg" alt="Alt text" />
        <p>
          Empowering businesses to thrive by embracing their potential and
          striving for excellence in every endeavor.
        </p>
      </div>
      <div className="second">
        <h2>Contact us !!</h2>

        <p>as.business@gmail.com</p>
        <p>Novi Pazar, Serbia - AVNOJ BB</p>
        <p>+381 61 234567</p>
      </div>
      <div className="third">
        <h2>SUBSCRIBE</h2>
        <p>enter your email to get notifications about our new posts</p>
        <input type="text" placeholder="email" />
      </div>
    </div>
  );
};

export default Footer;
