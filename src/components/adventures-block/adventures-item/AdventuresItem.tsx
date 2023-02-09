import { Container } from "@mui/material";
import "../adventures-item/AdventuresItem.scss";
import AdventuresImage from "./adventures-image/AdventuresImage";
import AdventuresCard from "./adventures-card/AdventuresCard";

type Props = {};

const AdventuresItem = (props: Props) => {
  return (
    // <Container maxWidth="md">
    <section className="advent-item">
      <AdventuresImage />
      <AdventuresCard />
    </section>
    // </Container>
  );
};
export default AdventuresItem;
