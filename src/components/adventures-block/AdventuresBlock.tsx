import { Container, Grid } from "@mui/material";
import AdventuresItem from "./adventures-item/AdventuresItem";
import AdventuresTitle from "./adventures-title/AdventuresTitle";
import "./../adventures-block/AdventuresBlock.scss";

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
        <Grid item xs={12} sm={6} md={4}>
          <AdventuresItem />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AdventuresItem />
        </Grid>
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
