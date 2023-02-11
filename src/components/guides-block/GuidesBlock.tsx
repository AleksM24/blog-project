import { Container } from "@mui/material";
import GuidesItems from "./guides-items/GuidesItems";
import GuidesTitle from "./guides-title/GuidesTitle";

type Props = {};
const GuidesBlock = (props: Props) => {
  return (
    <Container maxWidth="md">
      <GuidesTitle />
      <GuidesItems />
    </Container>
  );
};
export default GuidesBlock;
