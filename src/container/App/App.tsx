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
import { useEffect, useState } from "react";
import "./App.scss";
import AdventPostPage from "pages/posts/AdventPostPage";
import GuidesPostPage from "pages/posts/GuidesPostPage";
import PlacesPostPage from "pages/posts/PlacesPostPage";

type Props = {};

type FavorDataProps = {
  totalCount: number;
};

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

  const [favorData, setFavorData] = useState<FavorDataProps>({
    totalCount: 0,
  });

  const changePostCount = (count: number) => {
    setFavorData((prevState) => ({
      totalCount: prevState.totalCount + count,
    }));
  };

  // const [postsInFavorites, setPostsInFavorites] = useState<PostsInFavorites>({
  //   1: 25,
  //   2: 50,
  // });

  // const addPostToFavorites = (id: number) => {
  //   setPostsInFavorites(() => ({
  //     [id]: id,
  //   }));
  // };

  // const removePostFromFavorites = () => {
  //   setPostsInFavorites(() => ({}));
  // };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header favorData={favorData} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home changePostCount={changePostCount} />}
          />
          <Route path="about" element={<About />} />
          <Route
            path="adventures"
            element={<Adventures changePostCount={changePostCount} />}
          />
          <Route path="places" element={<Places />} />
          <Route path="guides" element={<Guides />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="/adventuresPosts/:id" element={<AdventPostPage />} />
          <Route path="/placesPosts/:id" element={<PlacesPostPage />} />
          <Route path="/guidesPosts/:id" element={<GuidesPostPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
