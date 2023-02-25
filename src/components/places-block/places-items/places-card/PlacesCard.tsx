import PlacesDescription from "./places-discription/PlacesDescription";
import PlacesFooter from "./places-footer/PlacesFooter";
import PlacesPicture from "./places-picture/PlacesPicture";
import "../places-card/PlacesCard.scss";

type Props = {
  image: string;
  title: string;
};

const PlacesCard = ({ image, title }: Props) => {
  return (
    <section className="places-card">
      <PlacesPicture image={image} />
      <div className="places-card-wrapper">
        <PlacesDescription title={title} />
        <PlacesFooter />
      </div>
    </section>
  );
};
export default PlacesCard;
