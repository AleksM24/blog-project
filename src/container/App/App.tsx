import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
