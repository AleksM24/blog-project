import { Container } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./Footer.scss";
import WidgetsBlock from "../Footer/widgets-block/WidgetsBlock";
import ScrollToUp from "container/App/ScrollToUp";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <section className="widgets-wrapper">
        <WidgetsBlock />
      </section>
      <section className="footer-wrapper">
        <Container maxWidth="md">
          <div className="footer-main-section">
            <div className="footer-content">
              <CopyrightIcon />
              <span className="copyright-text">2023 Betheme by </span>
              <a href="https://muffingroup.com/">Muffin group</a>
              <p> | All Rights Reserved | Powered by </p>
              <a href="https://wordpress.org/">WordPress</a>
            </div>
            <ScrollToUp />
          </div>
        </Container>
      </section>
    </>
  );
};
export default Footer;
