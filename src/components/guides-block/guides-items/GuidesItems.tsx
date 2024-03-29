import { Grid } from "@mui/material";
import guidesArray from "utils/guidesArray";
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
        {guidesArray.map(({ id, title, image, ctg, category }) => (
          <Grid item key={id}>
            <GuideCard
              title={title}
              image={image}
              id={id}
              ctg={ctg}
              category={category}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default GuidesItems;
