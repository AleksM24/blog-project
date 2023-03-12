import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import AdventuresImage from "components/adventures-block/adventures-item/adventures-image/AdventuresImage";
import AdventuresItem from "components/adventures-block/adventures-item/AdventuresItem";
import adventuresArray from "utils/adventuresArray";
import "./Adventures.scss";

type Props = {};
const Adventures = (props: Props) => {
  return (
    <>
      <div className="subtitle-wrapper">
        <Container maxWidth="md">
          <h1 className="subtitle">Adventures</h1>
        </Container>
      </div>
      <section className="categories-content">
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            {adventuresArray.map(({ id, title, description, image }, i) => (
              <Grid item key={id}>
                <AdventuresImage image={image} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};
export default Adventures;
