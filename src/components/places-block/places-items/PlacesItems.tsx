import PlacesCard from "./places-card/PlacesCard";
import "../places-items/PlacesItems.scss";
import { Grid } from "@mui/material";
import placesArray from "utils/placesArray";

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
        {placesArray.map(({ id, title, image }) => (
          <Grid item key={id}>
            <PlacesCard title={title} image={image} id={id} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default PlacesItems;
