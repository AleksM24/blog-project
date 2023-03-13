import { Container, Grid } from "@mui/material";
import AdventuresItem from "./adventures-item/AdventuresItem";
import AdventuresTitle from "./adventures-title/AdventuresTitle";
import "./../adventures-block/AdventuresBlock.scss";
import adventuresArray from "utils/adventuresArray";
import { Link } from "react-router-dom";

type Props = {};

const AdventuresBlock = (props: Props) => {
  return (
    <Container maxWidth="md">
      <section className="adventure-title">
        <AdventuresTitle />
      </section>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {adventuresArray.map(({ id, title, description, image }, i) => (
          <Grid item key={id}>
            <AdventuresItem
              title={title}
              description={description}
              image={image}
              id= {id}
            />
          </Grid>
        ))}
      </Grid>
      <Container className="discover-more-link" maxWidth="md">
        <div className="wrap-discover-more">
          <Link className="text-discover" to={"/adventures"}>
            Discover more
          </Link>
        </div>
      </Container>
    </Container>
  );
};
export default AdventuresBlock;
