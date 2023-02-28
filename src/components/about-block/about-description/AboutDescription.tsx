import AboutDescriptionIcons from "../../../assets/blogger-about-icons.png";
import "./AboutDescription.scss";

type Props = {};

const AboutDescription = (props: Props) => {
  return (
    <section className="about-description-wrapper">
      <div className="about-description-left-block">
        <div className="about-description-icons">
          <img src={AboutDescriptionIcons} alt="AboutDescriptionIcons" />
        </div>
        <h2 className="about-description-title">
          Lorem ipsum dolor sit amet tetur adipis icing elit
        </h2>
        <p className="about-description-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labor
        </p>
        <a className="about-discover-more" href="/">
          Discover more
        </a>
      </div>
      <div className="about-description-right-block"></div>
    </section>
  );
};
export default AboutDescription;
