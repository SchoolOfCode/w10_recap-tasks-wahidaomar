import Comment from "./Comment/comment"

function CommentSection( {comments} ) {
    return (
        <section className="comment-section">
          {comments.map((comment, index) => (
              <Comment key={index} name={comment.name} text={comment.text} comment={comment}/>
          ))}
        </section>   
    )
}

export default CommentSection;