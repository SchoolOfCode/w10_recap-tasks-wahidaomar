import articles from "../../libs/articles";
import Post from "./Post/post"

function Articles() {
    return (
        <div>
        {articles.map((article, index) => (
            <Post key={index} title={article.title} paragraphs={article.paragraphs} comments={article.comments}/>
        ))}
        </div>
    )
}

export default Articles;
