import AdventTitleDescription from "./advent-title-description/AdventTitleDescription";
import "./AdventuresTitle.scss";
import adventureIcon from "assets/adventure-icon.png";

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
          <span className="advent-title">Adventures</span>
        </div>
      </section>
      <AdventTitleDescription />
    </>
  );
};
export default AdventuresTitle;
