import "../card-footer/CardFooter.scss";
import ClockIcon from "assets/clock-icon.svg";
import UserIcon from "assets/user-icon.png";

type Props = {};

const CardFooter = (props: Props) => {
  return (
    <section className="card-footer">
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
export default CardFooter;
