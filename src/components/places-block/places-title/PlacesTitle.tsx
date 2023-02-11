import "../places-title/PlacesTitle.scss";

type Props = {};

const PlacesTitle = (props: Props) => {
  return (
    <section className="title-block">
      <div className="title-category">
        <div className="icon-places"></div>
        <div>
          <span className="name-categore">Places</span>
        </div>
      </div>
      <div className="title-description">
        Lorem ipsum dolor sit amet <br /> tetur adipis icing elit
      </div>
    </section>
  );
};
export default PlacesTitle;
