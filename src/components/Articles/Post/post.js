import LikeButton from "./LikeButton/likebutton";
import CommentSection from "./CommentSection/commentsection";
import Title from "./Title/title";
import Paragraphs from "./Paragraphs/paragraphs";
import css from "../articles.module.css"

function Post( {title, paragraphs, comments}) {
    return (
  <article className={css.post}>
    <Title title={title}/>
    <Paragraphs paragraphs={paragraphs}/>
    <LikeButton />
    <CommentSection comments={comments}/>
  </article>
    )
}

export default Post;
