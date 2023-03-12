import "../places-picture/PlacesPicture.scss";
import LikeIcon from "assets/LikeIcon.svg";

type Props = {
  image: string;
};

const PlacesPicture = ({ image }: Props) => {
  return (
    <section className="places-picture">
      <div className="image-wrap">
        <img className="place-image" src={image} alt="PlacesImage" />
      </div>
      <div className="likes-btn">
        <img className="like-icon" src={LikeIcon} alt="LikeIcon" />
      </div>
    </section>
  );
};
export default PlacesPicture;
