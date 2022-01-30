import Comment from "./Comment/comment"
import css from "../../articles.module.css"

function CommentSection( {comments} ) {
    return (
        <section className={css.CommentSection}>
          {comments.map((comment, index) => (
              <Comment key={index} name={comment.name} text={comment.text} comment={comment}/>
          ))}
        </section>   
    )
}

export default CommentSection;