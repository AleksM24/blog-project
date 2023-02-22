import { Container } from "@mui/material";
import AdventuresBlock from "components/adventures-block/AdventuresBlock";
import QuoteBlock from "../../components/quote-block/QuoteBlock";
import PlacesBlock from "components/places-block/PlacesBlock";
import Home from "pages/home/Home";
import "./Main.scss";
import GuidesBlock from "components/guides-block/GuidesBlock";
import FinalSection from "components/final-section/FinalSection";
import SwiperBlock from "components/swiper/SwiperBlock";

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <SwiperBlock />
      <section className="adventures-wrapper">
        <Container className="adventures-container"
          sx={{
            padding: "50px 0",
          }}
          maxWidth="md"
        >
          <Home />
          <AdventuresBlock />
        </Container>
      </section>
      <section>
        <QuoteBlock />
      </section>
      <section className="places-wrapper">
        <PlacesBlock />
      </section>
      <section className="guides-wrapper">
        <GuidesBlock />
      </section>
      <section className="about-us">
        <FinalSection />
        <div className="main-gradient"></div>
      </section>
    </>
  );
};
export default Main;
