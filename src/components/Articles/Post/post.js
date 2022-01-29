import LikeButton from "./LikeButton/likebutton";
import CommentSection from "./CommentSection/commentsection";
import Title from "./Title/title";
import Paragraphs from "./Paragraphs/paragraphs";

function Post( {title, paragraphs, comments}) {
    return (
  <article className="post">
    <Title title={title}/>
    <Paragraphs paragraphs={paragraphs}/>
    <LikeButton />
    <CommentSection comments={comments}/>
  </article>
    )
}

export default Post;
