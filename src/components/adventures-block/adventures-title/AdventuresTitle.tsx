import { Typography } from "@mui/material";
import "./AdventuresTitle.scss";
import adventureIcon from "assets/adventure-icon.png";

type Props = {};

const AdventuresTitle = (props: Props) => {
  return (
    <div>
      <Typography>
        <img className="advent-icon" src={adventureIcon}></img>
        <span className="advent-title">Adventures</span>
        <br />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
      </Typography>
    </div>
  );
};
export default AdventuresTitle;
