import "../comment-quote/CommentQuote.scss";

type Props = {};

const CommentQuote = (props: Props) => {
  return (
    <section className="qoute-frame">
      <div className="quote-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqu enim ad minim veniam.
      </div>
      <div className="autor-name">
        <span>
          <b>Jenny Penny </b><br /> CEO @ Pandolum
        </span>
      </div>
    </section>
  );
};
export default CommentQuote;
