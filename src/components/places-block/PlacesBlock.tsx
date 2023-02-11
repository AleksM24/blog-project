import { Container } from "@mui/material";
import PlacesItems from "./places-items/PlacesItems";
import PlacesTitle from "./places-title/PlacesTitle";

type Props = {};

const PlacesBlock = (props: Props) => {
  return (
    <Container maxWidth="md">
      <PlacesTitle />
      <PlacesItems/>
    </Container>
  );
};
export default PlacesBlock;
