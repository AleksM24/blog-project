import { Container } from "@mui/material";
import AdventuresTitle from "./adventures-title/AdventuresTitle";

type Props = {};

const AdventuresBlock = (props: Props) => {
  return (
    <div className="adventure-title">
      <Container maxWidth="md">
        <AdventuresTitle />
      </Container>
    </div>
  );
};
export default AdventuresBlock;
