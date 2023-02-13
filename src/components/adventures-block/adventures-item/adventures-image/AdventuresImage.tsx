import "./AdventuresImage.scss";
import adventure1 from "assets/adventure1.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = {};

const AdventuresImage = (props: Props) => {
  return (
    <div className="post-image">
      <img className="adventure1" src={adventure1} alt="adventure1" />
      <div className="like-btn">
        <div className="like-wrapper">
          <FavoriteBorderIcon />
          <span className="likes-counter">123</span>
        </div>
      </div>
    </div>
  );
};

export default AdventuresImage;
