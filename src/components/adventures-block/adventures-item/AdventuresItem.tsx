import "../adventures-item/AdventuresItem.scss";
import AdventuresImage from "./adventures-image/AdventuresImage";
import AdventuresCard from "./adventures-card/AdventuresCard";

type Props = {};

const AdventuresItem = (props: Props) => {
  return (
    <section className="advent-item">
      <AdventuresImage />
      <AdventuresCard />
    </section>
  );
};
export default AdventuresItem;
