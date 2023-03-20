import { Container, Grid } from "@mui/material";
import GuideCard from "components/guides-block/guides-items/guides-card/GuideCard";
import guidesArray from "utils/guidesArray";

type Props = {};
const Guides = (props: Props) => {
  return (
    <>
      <div className="subtitle-wrapper">
        <Container maxWidth="md">
          <h1 className="subtitle">Guides</h1>
        </Container>
      </div>
      <section className="categories-content">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {guidesArray.map(({ id, title, image, ctg, category }) => (
            <Grid item key={id}>
              <GuideCard
                title={title}
                image={image}
                id={id}
                category={category}
                ctg={ctg}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};
export default Guides;