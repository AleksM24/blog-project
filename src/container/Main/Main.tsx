import { Container } from "@mui/material";
import AdventuresBlock from "components/adventures-block/AdventuresBlock";
import Home from "pages/home/Home";
import "./Main.scss";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="wrapper">
      <Container
        sx={{
          padding: "50px 0",
        }}
      >
        <Home />
        <AdventuresBlock />
      </Container>
    </div>
  );
};
export default Main;
