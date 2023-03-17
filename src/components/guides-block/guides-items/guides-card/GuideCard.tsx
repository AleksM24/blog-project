import { Link } from "react-router-dom";
import GuidesDescription from "./guides-discription/GuidesDescription";
import GuidesFooter from "./guides-footer/GuidesFooter";
import GuidesPicture from "./guides-picture/GuidesPicture";

type Props = {
  image: string;
  title: string;
  id: number;
};

const GuideCard = ({ image, title, id }: Props) => {
  return (
    <section className="places-card">
      <Link className="guides-title-link" to={`/guidesPosts/${id}`}>
        <GuidesPicture image={image} id={id} />
      </Link>
      <div className="places-card-wrapper">
        <GuidesDescription title={title} id={id} />
        <GuidesFooter />
      </div>
    </section>
  );
};
export default GuideCard;
