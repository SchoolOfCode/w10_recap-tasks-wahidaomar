import articles from "../../libs/articles";
import Post from "./Post/post";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./articles.module.css"

function Articles() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1 className={css.Heading}>WikiPigeon</h1>
          {articles.map((article, index) => (
            <Post
              key={index}
              title={article.title}
              paragraphs={article.paragraphs}
              comments={article.comments}
            />
          ))}
        </div>
    )
  );
}

export default Articles;
