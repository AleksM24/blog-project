import { Typography } from "@mui/material";
import AdventTitleDescription from "./advent-title-description/AdventTitleDescription"
import "./AdventuresTitle.scss";
import adventureIcon from "assets/adventure-icon.png";


type Props = {};

const AdventuresTitle = (props: Props) => {
  return (
    <div className="title-section">
      <Typography>
        <section className="title-block">
          <img className="advent-icon" src={adventureIcon}></img>
          <span className="advent-title">Adventures</span>
        </section>
      </Typography>
      <AdventTitleDescription />
    </div>
  );
};
export default AdventuresTitle;
