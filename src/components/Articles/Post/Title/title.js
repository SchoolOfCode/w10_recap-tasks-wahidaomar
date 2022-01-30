import css from "../../articles.module.css"

function Title({title}) {
    return (
        <h2 className={css.Title}>{title}</h2>
    )
}

export default Title;