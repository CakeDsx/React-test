import { Link } from "react-router-dom";

export default function InfoCard({title, category, ingress, id}){
    
    return(
        <article>
            <h3>{title}</h3>
            <p>{ingress}</p>
            <Link to="">{category}</Link>
            <Link to={JSON.stringify(id)}>Read more</Link>
        </article>
    )
}