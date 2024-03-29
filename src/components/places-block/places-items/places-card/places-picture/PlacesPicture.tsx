import "../places-picture/PlacesPicture.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addLike, removeLike } from "redux/likeReducer";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  id: number;
};

const PlacesPicture = ({ image, id }: Props) => {
  const isLiked = useAppSelector((state) => state.productsLikeState[id]);
  const dispatch = useAppDispatch();
  return (
    <section className="places-picture">
      <div className="image-wrap">
        <Link to={`/placesPosts/${id}`}>
          <img className="place-image" src={image} alt="PlacesImage" />
        </Link>
      </div>
      <div
        className="likes-btn"
        onClick={() =>
          isLiked ? dispatch(removeLike(id)) : dispatch(addLike(id))
        }
      >
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
    </section>
  );
};
export default PlacesPicture;
