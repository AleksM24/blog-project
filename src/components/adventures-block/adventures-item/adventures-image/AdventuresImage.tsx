import "./AdventuresImage.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = {
  image: string;
};

const AdventuresImage = ({ image }: Props) => {
  return (
    <div className="post-image">
      <img className="adventure1" src={image} alt="adventure1" />
      <div className="like-btn">
        <div className="like-wrapper">
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default AdventuresImage;