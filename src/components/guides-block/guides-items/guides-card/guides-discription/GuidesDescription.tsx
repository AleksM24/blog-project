import { Link } from "react-router-dom";
import "../guides-discription/GuidesDescription.scss";

type Props = {
  title: string;
  id: number;
};

const GuidesDiscription = ({ title, id }: Props) => {
  return (
    <section>
      <Link className="places-categore-link" to={"/guides"}>
        Guides
      </Link>
      <Link className="guides-title-link" to={`/guidesPosts/${id}`}>
        <h2 className="description-text">{title}</h2>
      </Link>
    </section>
  );
};
export default GuidesDiscription;
