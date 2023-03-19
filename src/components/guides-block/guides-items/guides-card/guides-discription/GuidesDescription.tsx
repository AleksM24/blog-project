import { Link } from "react-router-dom";
import "../guides-discription/GuidesDescription.scss";

type Props = {
  title: string;
  id: number;
  ctg: string;
  category: string;
};

const GuidesDiscription = ({ title, id, category }: Props) => {
  return (
    <section>
      <Link className="places-categore-link" to={"/guides/"}>
        {category}
      </Link>
      <Link className="guides-title-link" to={`/guidesPosts/${id}`}>
        <h2 className="description-text">{title}</h2>
      </Link>
    </section>
  );
};
export default GuidesDiscription;
