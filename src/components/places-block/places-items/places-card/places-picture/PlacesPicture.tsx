import "../places-picture/PlacesPicture.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from "redux/hooks";

type Props = {
  image: string;
  id: number;
};

const PlacesPicture = ({ image, id }: Props) => {
  const isLiked = useAppSelector((state) => state.productsLikeState[id]);
  return (
    <section className="places-picture">
      <div className="image-wrap">
        <img className="place-image" src={image} alt="PlacesImage" />
      </div>
      <div className="likes-btn">
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
    </section>
  );
};
export default PlacesPicture;
