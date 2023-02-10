import "./AdventuresImage.scss";
import adventure1 from "assets/adventure1.jpg";
import LikeIcon from "assets/LikeIcon.svg";

type Props = {};

const AdventuresImage = (props: Props) => {
  return (
    <div className="post-image">
      <img className="adventure1" src={adventure1} alt="adventure1" />
      <div className="like-btn">
        <div className="like-wrapper">
          <img className="like-icon" src={LikeIcon} alt="Like-icon" />
          <span>55</span>
        </div>
      </div>
    </div>
  );
};

export default AdventuresImage;
