import AdventTitleDescription from "./advent-title-description/AdventTitleDescription";
import "./AdventuresTitle.scss";
import adventureIcon from "assets/adventure-icon.png";
import { Link } from "react-router-dom";

type Props = {};

const AdventuresTitle = (props: Props) => {
  return (
    <>
      <section className="title-section">
        <div className="main-block">
          <img
            className="advent-icon"
            src={adventureIcon}
            alt="adventureIcon"
          />
          <Link className="advent-title" to={"/adventures"}>
            Adventures
          </Link>
        </div>
      </section>
      <AdventTitleDescription />
    </>
  );
};
export default AdventuresTitle;
