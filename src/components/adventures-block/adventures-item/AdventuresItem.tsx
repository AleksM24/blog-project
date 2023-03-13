import "../adventures-item/AdventuresItem.scss";
import AdventuresImage from "./adventures-image/AdventuresImage";
import AdventuresCard from "./adventures-card/AdventuresCard";

type Props = {
  title: string;
  description: string;
  image: string;
  id: number;
};

const AdventuresItem = ({ title, description, image, id }: Props) => {
  return (
    <section className="advent-item">
      <AdventuresImage image={image} id={id} />
      <AdventuresCard title={title} description={description} />
    </section>
  );
};
export default AdventuresItem;
