import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

type Props = {};

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </StyledEngineProvider>
  );
};

export default App;
