import { createTheme, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/base.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "pages/home/Home";
import About from "pages/about/About";
import Adventures from "pages/adventures/Adventures";
import Places from "pages/places/Places";
import Guides from "pages/guides/Guides";
import Favorites from "pages/favorites/Favorites";
import { useEffect } from "react";
import "./App.scss";
import ScrollToUp from "./ScrollToUp";

type Props = {};

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
  },
});

const App = (props: Props) => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="adventures" element={<Adventures />} />
          <Route path="places" element={<Places />} />
          <Route path="guides" element={<Guides />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
