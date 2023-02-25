import GuidesDescription from "./guides-discription/GuidesDescription";
import GuidesFooter from "./guides-footer/GuidesFooter";
import GuidesPicture from "./guides-picture/GuidesPicture";

type Props = {
  image: string;
  title: string;
};

const GuideCard = ({ image, title }: Props) => {
  return (
    <section className="places-card">
      <GuidesPicture image={image} />
      <div className="places-card-wrapper">
        <GuidesDescription title={title} />
        <GuidesFooter />
      </div>
    </section>
  );
};
export default GuideCard;
