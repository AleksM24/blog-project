import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from "redux/hooks";
import postsArray, { BlogPost } from "utils/postsArray";

type Props = {};

const LikesCounter = (props: Props) => {
  const isActiveLike = () => {
    if (likesCount > 0) return <FavoriteIcon />;
    else return <FavoriteBorderIcon />;
  };

  const postsLikeState = useAppSelector((state) => state.productsLikeState);

  const likedPosts = postsArray.filter(
    ({ id }: BlogPost) => postsLikeState[id]
  );

  const likesCount = likedPosts.length;

  return (
    <>
      <div className="like-counter-wrapper">
        <div className="like-icon">{isActiveLike()}</div>
        <span className="likes-counter">{likesCount}</span>
      </div>
    </>
  );
};

export default LikesCounter;
