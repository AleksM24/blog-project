import { createTheme, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { ThemeProvider } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/base.scss";
import { Pagination } from "swiper";
import slider1 from "assets/slider1.jpg";

type Props = {};

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
  },
});

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />        
        <Main />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
