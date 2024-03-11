import { resources } from "../assets/ressurser";

export default function React() {

    return (
        <div>
            <h2 id="text">React</h2>

            <ul>{resources.map((item, index) => item.category === "react" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>
        
    )
}