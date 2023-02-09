import "./AdventuresImage.scss";
import adventure1 from "../../../../assets/adventure1.jpg";

type Props = {};

const AdventuresImage = (props: Props) => {
  return (
    <div>
      <img className="adventure1" src={adventure1} alt="adventure1" />
    </div>
  );
};

export default AdventuresImage;
