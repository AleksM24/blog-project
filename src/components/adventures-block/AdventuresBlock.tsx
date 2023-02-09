import { Container, Grid } from "@mui/material";
import AdventuresItem from "./adventures-item/AdventuresItem";
import AdventuresTitle from "./adventures-title/AdventuresTitle";

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
    </>
  );
};
export default AdventuresBlock;
