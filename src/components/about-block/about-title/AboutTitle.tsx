import { Container } from "@mui/material";
import "../about-title/AboutTitle.scss";

type Props = {};

const AboutTitle = (props: Props) => {
  return (
    <section className="about-title-wrapper">
      <Container className="about-title-container" maxWidth="md">
        <div className="title-text-section">
          <h1 className="main-about-title">
            Lorem ipsum dolor sit amet tetur adipis icing elit
          </h1>
          <p className="paragraph-about-title">
            Lorem ipsum dolor sit amet, consectetur lorem <br /> adipisicing
            elit, sed dolor sit amet
          </p>
        </div>
      </Container>
    </section>
  );
};
export default AboutTitle;
