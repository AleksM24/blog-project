import GuidesDescription from "./guides-discription/GuidesDescription";
import GuidesFooter from "./guides-footer/GuidesFooter";
import GuidesPicture from "./guides-picture/GuidesPicture";

type Props = {};

const GuideCard = (props: Props) => {
  return (
    <section className="places-card">
      <GuidesPicture />
      <div className="places-card-wrapper">
        <GuidesDescription />
        <GuidesFooter />
      </div>
    </section>
  );
};
export default GuideCard;
