import "./CoworkerCard.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  id: number;
  photo: string;
  name: string;
  position: string;
};

const CoworkerCard = ({ id, photo, name, position }: Props) => {
  return (
    <section className="coworker-card">
      <div className="photo-frame">
        <div className="image-wrapper">
          <img src={photo} alt="UserPhoto" />
        </div>
      </div>
      <div className="desc-wrapper">
        <h4 className="coworker-name">{name}</h4>
        <p className="subtitle">{position}</p>
        <hr className="hr-color" />
        <p className="coworker-desc">
          Vitae adipiscing turpis. Aenean ligula nibh, molest ie id viverra a,
          quivalente dapibus at dolor.
        </p>
        <div className="social-networks-links">
          <a href="https://www.facebook.com/">
            <div className="network-link-wrap">
              <FacebookIcon fontSize="small" />
            </div>
          </a>
          <a href="https://twitter.com/">
            <div className="network-link-wrap">
              <TwitterIcon fontSize="small" />
            </div>
          </a>
          <a href="https://www.linkedin.com/">
            <div className="network-link-wrap">
              <LinkedInIcon fontSize="small" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default CoworkerCard;
