import { Button } from "@mui/material";
import "./kartica.css";
// import { useHistory } from "react-router-dom";

const Kartica = ({ title, description, image, slug }) => {
  // const history = useHistory();

  const handleButtonClick = () => {
    history.push(`/articles/${slug}`);
  };

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
        <Button variant="soft" onClick={handleButtonClick}>
          read more
        </Button>
      </div>
    </div>
  );
};

export default Kartica;
