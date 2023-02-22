import { Container } from "@mui/material";
import "../final-section/FinalSection.scss";
import LocationIcon2 from "assets/location-icon2.png";

type Props = {};

const FinalSection = (props: Props) => {
  return (
    <Container maxWidth="md">
      <section>
        <div className="final-block">
          <img src={LocationIcon2} alt="LocationIcon2" />
          <h3 className="text-about-btn">
            {" "}
            Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit
          </h3>
          <div className="btn-wrapp">
            <div className="about-us-btn">
              <a className="about-us-link" href="https://themes.muffingroup.com/be/blogger3/about/">
                <strong>About Us</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default FinalSection;
