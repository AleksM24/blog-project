import "../places-picture/PlacesPicture.scss";
import PlacesImage from "assets/blog-places-1.jpg";
import LikeIcon from "assets/LikeIcon.svg";

type Props = {
  image: string
};

const PlacesPicture = ({image}: Props) => {
  return (
    <section className="places-picture">
      <div className="image-wrap">
        <img className="place-image" src={image} alt="PlacesImage" />
      </div>
      <div className="likes-btn">
        <img className="like-icon" src={LikeIcon} alt="LikeIcon" />
        <span>124</span>
      </div>
    </section>
  );
};
export default PlacesPicture;
