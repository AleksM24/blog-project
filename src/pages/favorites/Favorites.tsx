import { Container, Grid } from "@mui/material";
import FavoritesItem from "components/favorites-item/FavoritesItem";
import { useAppSelector } from "redux/hooks";
import postsArray, { BlogPost } from "utils/postsArray";

type Props = {};

const Favorites = (props: Props) => {
  const postsLikeState = useAppSelector((state) => state.productsLikeState);

  const likedPosts = postsArray.filter(
    ({ id }: BlogPost) => postsLikeState[id]
  );

  return likedPosts.length === 0 ? (
    <div className="subtitle-wrapper">
      <Container maxWidth="md">
        <h1 className="subtitle">You don't have any saved posts yet</h1>
      </Container>
    </div>
  ) : (
    <section>
      <div className="subtitle-wrapper">
        <Container maxWidth="md">
          <h1 className="subtitle">Favorites</h1>
        </Container>
      </div>
      <div className="categories-content">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {likedPosts.map(
            ({ id, title, category, description, image, ctg }: BlogPost) => (
              <Grid item key={id}>
                <FavoritesItem
                  ctg={ctg}
                  title={title}
                  category={category}
                  description={description}
                  image={image}
                  id={id}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>
    </section>
  );
};

export default Favorites;
