import { Container } from "@mui/material";
import PlacesTitle from "./places-title/PlacesTitle";

type Props = {};

const PlacesBlock = (props: Props) => {
  return (
    <Container maxWidth="md">
      <PlacesTitle />
      <div>Places items</div>
    </Container>
  );
};
export default PlacesBlock;
