import { Grid } from "@mui/material";
import GuideCard from "./guides-card/GuideCard";

type Props = {};

const GuidesItems = (props: Props) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <GuideCard />
        </Grid>
        <Grid item>
          <GuideCard />
        </Grid>
        <Grid item>
          <GuideCard />
        </Grid>
      </Grid>
    </>
  );
};
export default GuidesItems;
