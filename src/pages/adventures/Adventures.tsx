import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import AdventuresCard from "components/adventures-block/adventures-item/adventures-card/AdventuresCard";
import AdventuresImage from "components/adventures-block/adventures-item/adventures-image/AdventuresImage";
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
                <section className="advent-item">
                  <AdventuresImage image={image} id={id} />
                  <AdventuresCard title={title} description={description} />
                </section>
              </Grid>
            ))}
            ;
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Adventures;