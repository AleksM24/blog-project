import { Container } from "@mui/material";
import "../quote-block/QuoteBlock.scss";
import CommentQuote from "./comment-quote/CommentQuote";

type Props = {};

const QuoteBlock = (props: Props) => {
  return (
    <section className="quote_section">
      <Container maxWidth="md">
        <CommentQuote />
      </Container>
    </section>
  );
};
export default QuoteBlock;
