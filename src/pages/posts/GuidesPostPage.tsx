import { Container } from "@mui/material";
import { useParams } from "react-router";
import guidesArray, { GuidePost, getPostsObject } from "utils/guidesArray";
import CollageImage from "assets/blogger-single-gallery.jpg";

type Props = {
  postsObject?: {
    [id: number]: GuidePost;
  };
};

const PostPage = ({ postsObject = getPostsObject(guidesArray) }: Props) => {
  const { id } = useParams();
  return (
    <div className="post-wrapper">
      <div className="img-container">
        <img
          className="post-image"
          src={postsObject[parseInt(id!)].image}
          alt="guides-post"
        />
        <h2 className="post-title">
          {postsObject[parseInt(id!)].title}
          <p className="post-description">
            {postsObject[parseInt(id!)].description}
          </p>
        </h2>
      </div>
      <div className="post-quote">
        <Container maxWidth="md">
          <p>"{postsObject[parseInt(id!)].description}"</p>
        </Container>
      </div>
      <div className="first-post-text-wrap">
        <Container maxWidth="sm">
          <div
            dangerouslySetInnerHTML={{
              __html: postsObject[parseInt(id!)].postFirstText,
            }}
          ></div>
        </Container>
      </div>
      <div className="second-post-text-wrap">
        <Container maxWidth="sm">
          <div
            dangerouslySetInnerHTML={{
              __html: postsObject[parseInt(id!)].postSecondText,
            }}
          ></div>
        </Container>
      </div>
      <div className="collage-wrapper">
        <Container maxWidth="lg">
          <img src={CollageImage} alt="collageImage" />
        </Container>
      </div>
    </div>
  );
};

export default PostPage;
