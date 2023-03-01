import { Container } from "@mui/material";

type Props = {};
const Guides = (props: Props) => {
  return (
    <>
      <div className="subtitle-wrapper">
        <Container maxWidth="md">
          <h1 className="subtitle">Guides</h1>
        </Container>
      </div>
      <section className="categories-content"></section>
    </>
  );
};
export default Guides;
