import GuidesImage from "assets/log-guides-1.jpg";
import LikeIcon from "assets/LikeIcon.svg";

type Props = {};

const GuidesPicture = (props: Props) => {
  return (
    <section className="places-picture">
      <div>
        <img className="place-image" src={GuidesImage} alt="PlacesImage" />
      </div>
      <div className="likes-btn">
        <img className="like-icon" src={LikeIcon} alt="LikeIcon" />
        <span>225</span>
      </div>
    </section>
  );
};
export default GuidesPicture;
