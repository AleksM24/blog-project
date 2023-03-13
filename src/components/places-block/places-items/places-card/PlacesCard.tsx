import PlacesDescription from "./places-discription/PlacesDescription";
import PlacesFooter from "./places-footer/PlacesFooter";
import PlacesPicture from "./places-picture/PlacesPicture";
import "../places-card/PlacesCard.scss";

type Props = {
  image: string;
  title: string;
  id: number;
};

const PlacesCard = ({ image, title, id }: Props) => {
  return (
    <section className="places-card">
      <PlacesPicture image={image} id={id} />
      <div className="places-card-wrapper">
        <PlacesDescription title={title} />
        <PlacesFooter />
      </div>
    </section>
  );
};
export default PlacesCard;
