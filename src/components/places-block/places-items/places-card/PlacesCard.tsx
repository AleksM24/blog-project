import PlacesDescription from "./places-discription/PlacesDescription";
import PlacesFooter from "./places-footer/PlacesFooter";
import PlacesPicture from "./places-picture/PlacesPicture";
import "../places-card/PlacesCard.scss";

type Props = {};

const PlacesCard = (props: Props) => {
  return (
    <section className="places-card">
      <PlacesPicture />
      <div className="places-card-wrapper">
        <PlacesDescription />
        <PlacesFooter />
      </div>
    </section>
  );
};
export default PlacesCard;
