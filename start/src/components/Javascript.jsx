import { resources } from "../assets/ressurser";

export default function JavaScript() {
    
    document.getElementById("nav4").classList.add("active")

    return (
        <div>
            <h2 id="text">JavaScript</h2>

            <ul>{resources.map((item, index) => item.category === "javascript" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>

        

    )
}