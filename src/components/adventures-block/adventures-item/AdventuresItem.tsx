import "../adventures-item/AdventuresItem.scss";
import AdventuresImage from "./adventures-image/AdventuresImage";
import AdventuresCard from "./adventures-card/AdventuresCard";

type Props = {
  title: string;
  description: string;
  image: string;
  id: number;
  category: string;
  ctg: string;
};

const AdventuresItem = ({
  title,
  category,
  description,
  image,
  id,
  ctg,
}: Props) => {
  return (
    <section className="advent-item">
      <AdventuresImage image={image} id={id} />
      <AdventuresCard
        ctg={ctg}
        title={title}
        category={category}
        description={description}
        id={id}
      />
    </section>
  );
};

export default AdventuresItem;
