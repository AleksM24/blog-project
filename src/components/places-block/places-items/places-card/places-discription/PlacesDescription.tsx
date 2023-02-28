import { Link } from "react-router-dom";
import "../places-discription/PlacesDescription.scss";

type Props = {
  title: string;
};

const PlacesDescription = ({ title }: Props) => {
  return (
    <section>
      <Link className="places-categore-link" to={"/places"}>
        Places
      </Link>
      <h2 className="description-text">{title}</h2>
    </section>
  );
};
export default PlacesDescription;
