import "../places-discription/PlacesDescription.scss";

type Props = {
  title: string;
};

const PlacesDescription = ({ title }: Props) => {
  return (
    <section>
      <a
        className="places-categore-link"
        href="https://themes.muffingroup.com/be/blogger3/category/places/"
      >
        Places
      </a>
      <h2 className="description-text">{title}</h2>
    </section>
  );
};
export default PlacesDescription;
