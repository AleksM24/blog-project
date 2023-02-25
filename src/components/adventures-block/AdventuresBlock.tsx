import { Container, Grid } from "@mui/material";
import AdventuresItem from "./adventures-item/AdventuresItem";
import AdventuresTitle from "./adventures-title/AdventuresTitle";
import "./../adventures-block/AdventuresBlock.scss";
import adventuresArray from "utils/adventuresArray";

type Props = {};

const AdventuresBlock = (props: Props) => {
  return (
    <>
      <Container className="adventure-title" maxWidth="md">
        <AdventuresTitle />
      </Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {adventuresArray.map(({ id, title, description, image }, i) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <AdventuresItem
              title={title}
              description={description}
              image={image}
            />
          </Grid>
        ))}
      </Grid>
      <Container className="discover-more-link" maxWidth="md">
        <div className="wrap-discover-more">
          <a
            className="text-discover"
            href="https://themes.muffingroup.com/be/blogger3/category/adventures/"
          >
            Discover more
          </a>
        </div>
      </Container>
    </>
  );
};
export default AdventuresBlock;
