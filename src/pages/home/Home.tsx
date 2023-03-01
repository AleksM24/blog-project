import { Container } from "@mui/material";
import AdventuresBlock from "components/adventures-block/AdventuresBlock";
import DownSection from "components/down-section/DownSection";
import GuidesBlock from "components/guides-block/GuidesBlock";
import PlacesBlock from "components/places-block/PlacesBlock";
import QuoteBlock from "components/quote-block/QuoteBlock";
import SwiperBlock from "components/swiper/SwiperBlock";
import "./Home.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <SwiperBlock />
      <section className="adventures-wrapper">
        <AdventuresBlock />
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
        <DownSection />
        <div className="main-gradient"></div>
      </section>
    </>
  );
};
export default Home;
