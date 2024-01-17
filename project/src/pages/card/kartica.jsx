import { Button } from "@mui/material";
import "./kartica.css";

const Kartica = ({ title, description, image }) => {
  return (
    <div className="svi">
      <div className="nmg">
        <div className="slikica">
          <img src={image} alt="" />
        </div>
        <div className="ovome">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Button variant="soft">read more</Button>
      </div>
    </div>
  );
};

export default Kartica;
