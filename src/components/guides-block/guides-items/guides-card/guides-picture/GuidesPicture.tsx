import LikeIcon from "assets/LikeIcon.svg";

type Props = {
  image: string;
};

const GuidesPicture = ({ image }: Props) => {
  return (
    <section className="places-picture">
      <div className="image-wrap">
        <img className="place-image" src={image} alt="PlacesImage" />
      </div>
      <div className="likes-btn">
        <img className="like-icon" src={LikeIcon} alt="LikeIcon" />
        <span>225</span>
      </div>
    </section>
  );
};
export default GuidesPicture;
