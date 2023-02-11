import "../places-picture/PlacesPicture.scss";
import PlacesImage from "assets/blog-places-1.jpg";
import LikeIcon from "assets/LikeIcon.svg";

type Props = {};

const PlacesPicture = (props: Props) => {
  return (
    <section className="places-picture">
      <div>
        <img className="place-image" src={PlacesImage} alt="PlacesImage" />
      </div>
      <div className="likes-btn">
        <img className="like-icon" src={LikeIcon} alt="LikeIcon" />
        <span>124</span>
      </div>
    </section>
  );
};
export default PlacesPicture;
