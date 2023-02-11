import PlacesCard from "./places-card/PlacesCard";
import "../places-items/PlacesItems.scss";
import { Grid } from "@mui/material";

type Props = {};

const PlacesItems = (props: Props) => {
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
          <PlacesCard />
        </Grid>
        <Grid item>
          <PlacesCard />
        </Grid>
        <Grid item>
          <PlacesCard />
        </Grid>
      </Grid>
    </>
  );
};
export default PlacesItems;
