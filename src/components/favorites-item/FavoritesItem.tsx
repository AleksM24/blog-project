import { Card, CardContent, Typography } from "@mui/material";
import CardFooter from "components/adventures-block/adventures-item/adventures-card/card-footer/CardFooter";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { removeLike, addLike } from "redux/likeReducer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
  title: string;
  description: string;
  image: string;
  id: number;
  category: string;
  ctg: string;
};

const FavoritesItem = ({ title, description, image, id }: Props) => {
  const isLiked = useAppSelector((state) => state.productsLikeState[id]);
  const dispatch = useAppDispatch();

  return (
    <section className="advent-item">
      <div className="post-images">
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
      <Card className="adv-card" sx={{ maxWidth: 375 }}>
        <div className="card-wrap">
          <CardContent>
            <Typography className="card-title" variant="h2" component="div">
              <Link
                className="adventures-posts-link"
                to={`/adventuresPosts/${id}`}
              >
                {title}
              </Link>
            </Typography>
            <Typography className="card-text" variant="body2">
              {description}
            </Typography>
            <CardFooter />
          </CardContent>
        </div>
      </Card>
    </section>
  );
};

export default FavoritesItem;
