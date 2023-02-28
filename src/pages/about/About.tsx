import AboutArticle from "components/about-block/about-article/AboutArticle";
import AboutDescription from "components/about-block/about-description/AboutDescription";
import AboutTitle from "components/about-block/about-title/AboutTitle";
import OurTeam from "components/about-block/our-team/OurTeam";
import DownSection from "components/down-section/DownSection";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <AboutTitle />
      <AboutDescription />
      <OurTeam />
      <AboutArticle />
      <section className="about-us">
        <DownSection />
        <div className="main-gradient"></div>
      </section>
    </>
  );
};
export default About;
