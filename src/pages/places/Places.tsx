import { Container } from "@mui/material";

type Props = {};

const Places = (props: Props) => {
  return (
    <>
      <div className="subtitle-wrapper">
        <Container maxWidth="md">
          <h1 className="subtitle">Places</h1>
        </Container>
      </div>
      <section className="categories-content"></section>
    </>
  );
};
export default Places;
