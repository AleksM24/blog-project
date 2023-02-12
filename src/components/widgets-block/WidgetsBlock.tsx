import { Instagram, Twitter } from "@mui/icons-material";
import { Container } from "@mui/material";
import "../widgets-block/WidgetsBlock.scss";
import FooterLogo from "assets/footer-logo.png";

type Props = {};

const WidgetsBlock = (props: Props) => {
  return (
    <Container maxWidth="md">
      <section className="widget-block">
        <div>
          <img src={FooterLogo} alt="FooterLogo" />
        </div>
        <p className="widget-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam hic,
          ab sunt libero, ipsa harum provident velit odio quam corporis ea a
          nulla molestiae voluptatum. Provident, dolorum? Sunt, earum odio?
        </p>
        <div className="social-networks-links">
          <a className="instagram-link" href="">
            <Instagram></Instagram>
            <span>Instagram</span>
          </a>
          <a className="twitter-link" href="">
            <Twitter></Twitter>
            <span>Twitter</span>
          </a>
        </div>
      </section>
    </Container>
  );
};

export default WidgetsBlock;
