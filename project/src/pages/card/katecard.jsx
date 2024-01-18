import { Button } from "@mui/material";
import "./katecard.css";

const Kat = ({ title }) => {
  return (
    <div className="nmgvise"> 
      <div className="okic">
        <h1>{title}</h1>
        <Button variant="soft">read more</Button>
      </div>
    </div>
  );
};

export default Kat;
