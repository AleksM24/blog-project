import { Container } from "@mui/material";
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
      </Container>
    </div>
  );
};
export default Main;
