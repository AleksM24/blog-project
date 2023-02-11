import "../places-footer/PlacesFooter.scss"
import UserIcon from "assets/user-icon.png";
import ClockIcon from "assets/clock-icon.svg";

type Props = {};

const PlacesFooter = (props: Props) => {
  return (
    <section className="card-footer, places-footer">
      <div>
        <img className="user-icon" src={UserIcon} alt="UserIcon" />
        <span className="post-autor">Muffin Group</span>
      </div>
      <div className="data-section">
        <img className="clock-icon" src={ClockIcon} alt="AccessTimeIcon" />
        <span className="post-data">October 23, 2019</span>
      </div>
    </section>
  );
};
export default PlacesFooter;
