import { Container, Grid } from "@mui/material";
import PlacesCard from "components/places-block/places-items/places-card/PlacesCard";
import placesArray from "utils/placesArray";

type Props = {};

const Places = (props: Props) => {
  return (
    <>
      <div className="subtitle-wrapper">
        <Container maxWidth="md">
          <h1 className="subtitle">Places</h1>
        </Container>
      </div>
      <section className="categories-content">
        <div>
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
        </div>
      </section>
      
    </>
  );
};
export default Places;
