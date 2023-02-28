import { Link } from "react-router-dom";
import "../places-title/PlacesTitle.scss";

type Props = {};

const PlacesTitle = (props: Props) => {
  return (
    <section className="places-title-block">
      <div className="title-category">
        <div className="icon-places"></div>
        <div>
          <Link className="name-categore" to="/places">
            Places
          </Link>
        </div>
      </div>
      <div className="title-description">
        Lorem ipsum dolor sit amet <br /> tetur adipis icing elit
      </div>
    </section>
  );
};
export default PlacesTitle;
