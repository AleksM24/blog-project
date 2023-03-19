import "../adventures-image/AdventuresImage.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addLike, removeLike } from "redux/likeReducer";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  id: number;
};

const AdventuresImage = ({ image, id }: Props) => {
  const isLiked = useAppSelector((state) => state.productsLikeState[id]);
  const dispatch = useAppDispatch();

  return (
    <div className="post-image">
      <Link className="adventures-posts-link" to={`/adventuresPosts/${id}`}>
        <img className="adventure1" src={image} alt="adventure1" />
      </Link>
      <div className="like-btn">
        <div
          className="like-wrapper"
          onClick={() =>
            isLiked ? dispatch(removeLike(id)) : dispatch(addLike(id))
          }
        >
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
    </div>
  );
};

export default AdventuresImage;
