import "../adventures-item/AdventuresItem.scss";
import AdventuresImage from "./adventures-image/AdventuresImage";
import AdventuresCard from "./adventures-card/AdventuresCard";

type Props = {
  title: string;
  description: string;
  image: string;
};

const AdventuresItem = ({ title, description, image }: Props) => {
  return (
    <section className="advent-item">
      <AdventuresImage image={image} />
      <AdventuresCard title={title} description={description} />
    </section>
  );
};
export default AdventuresItem;
