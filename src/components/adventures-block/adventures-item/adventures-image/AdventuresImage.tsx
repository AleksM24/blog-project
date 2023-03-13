import "./AdventuresImage.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from "redux/hooks";

type Props = {
  image: string;
  id: number;
};

const AdventuresImage = ({ image, id }: Props) => {
  const isLiked = useAppSelector((state) => state.productsLikeState[id]);

  return (
    <div className="post-image">
      <img className="adventure1" src={image} alt="adventure1" />
      <div className="like-btn">
        <div className="like-wrapper">
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
    </div>
  );
};

export default AdventuresImage;
