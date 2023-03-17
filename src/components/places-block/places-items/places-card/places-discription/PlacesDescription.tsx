import { Link } from "react-router-dom";
import "../places-discription/PlacesDescription.scss";

type Props = {
  title: string;
  id: number;
};

const PlacesDescription = ({ title, id }: Props) => {
  return (
    <section>
      <Link className="places-categore-link" to={"/places"}>
        Places
      </Link>
      <Link className="places-title-link" to={`/placesPosts/${id}`}>
        <h2 className="description-text">{title}</h2>
      </Link>
    </section>
  );
};
export default PlacesDescription;