import "../adventures-item/AdventuresItem.scss";
import AdventuresImage from "./adventures-image/AdventuresImage";
import AdventuresCard from "./adventures-card/AdventuresCard";

type Props = {
  title: string;
  description: string;
  image: string;
  id: number;
  changePostCount: (count: number) => void;
};

const AdventuresItem = ({
  title,
  description,
  image,
  id,
  changePostCount,
}: Props) => {
  return (
    <section className="advent-item">
      <AdventuresImage
        image={image}
        id={id}
        changePostCount={changePostCount}
      />
      <AdventuresCard title={title} description={description} id={id} />
    </section>
  );
};

export default AdventuresItem;
