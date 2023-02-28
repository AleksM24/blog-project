import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const GuidesDiscription = ({ title }: Props) => {
  return (
    <section>
      <Link className="places-categore-link" to={"/guides"}>
        Guides
      </Link>
      <h2 className="description-text">{title}</h2>
    </section>
  );
};
export default GuidesDiscription;
