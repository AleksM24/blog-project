import "./AboutArticle.scss";
import ArticleLogo from "assets/about-betheme-logo.png";
import ArticleImage from "assets/blogger-about-lady.jpg";
import QuoteImage from "assets/about-quotes.png";
import AutorPhoto from "assets/autors-photo.png";
import { Container } from "@mui/material";

type Props = {};
const AboutArticle = (props: Props) => {
  return (
    <section className="about-article-wrapper">
      <Container maxWidth="md">
        <div className="article-column">
          <div className="left-side-article">
            <div className="article-logo">
              <img src={ArticleLogo} alt="articleLogo" />
            </div>
            <h3 className="article-title">
              Lorem ipsum dolor sit amet tetur adipis icing elit
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
          <div className="right-side-article">
            <div className="article-image">
              <img src={ArticleImage} alt="ArticleImage" />
            </div>
            <div className="quote-icon-wrapper">
              <img src={QuoteImage} alt="QuoteImage" />
            </div>
            <div className="autor-quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqu enim
                ad minim veniam.
              </p>
            </div>
            <div className="article-autor">
              <div className="autor-photo">
                <img src={AutorPhoto} alt="Photo" />
              </div>
              <div className="article-autor-name">
                <p>
                  <strong>Jenny Penny</strong>
                  <br /> CEO @ Pandolum
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutArticle;
