import { Button } from "@mui/material";
import "./kartica.css";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Kartica = ({ title, description, image, id }) => {
  // const history = useHistory();

  // // const history = useHistory();

  // console.log(history);

  // const handleButtonClick = () => {
  //   // history.push(`/articles/${slug}`);
  // };
  console.log(id);
  return (
    <Link style={{ textDecoration: "none" }} to={`/articles/${id}`}>
      <div className="svi">
        <div className="nmg">
          <div className="slikica">
            <img src={image} alt="" />
          </div>
          <div className="ovome">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Kartica;
