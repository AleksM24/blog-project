import { Container } from "@mui/material";

type Props = {};

const Favorites = (props: Props) => {
  return (
    <>
      <div className="subtitle-wrapper">
        <Container maxWidth="md">
          <h1 className="subtitle">You don't have any saved posts yet</h1>
        </Container>
      </div>
      <section className="categories-content"></section>
    </>
  );
};

export default Favorites;
