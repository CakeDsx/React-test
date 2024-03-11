import { resources } from "../assets/ressurser";

export default function Html() {
    return (
        <div>
            <h2 id="text">HTML</h2>

            <ul>{resources.map((item, index) => item.category === "html" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>
    )
}