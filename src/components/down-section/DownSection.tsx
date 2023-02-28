import { Container } from "@mui/material";
import "./DownSection.scss";
import LocationIcon2 from "assets/location-icon2.png";
import { Link } from "react-router-dom";

type Props = {};

const DownSection = (props: Props) => {
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
            <button className="about-us-btn">
              <Link className="about-us-link" to={"/about"}>
                About Us
              </Link>
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DownSection;
