import { Container, Grid } from "@mui/material";
import AdventuresItem from "./adventures-item/AdventuresItem";
import AdventuresTitle from "./adventures-title/AdventuresTitle";
import "./../adventures-block/AdventuresBlock.scss";

type Props = {};

const AdventuresBlock = (props: Props) => {
  return (
    <>
      <div className="adventure-title">
        <Container maxWidth="md">
          <AdventuresTitle />
        </Container>
      </div>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <AdventuresItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AdventuresItem />
          </Grid>
        </Grid>
      </div>
      <section className="discover-more-link">
        <Container maxWidth="md">
          <div className="wrap-discover-more">
            <a className="text-discover" href="">Discover more</a>
          </div>
        </Container>
      </section>
    </>
  );
};
export default AdventuresBlock;
