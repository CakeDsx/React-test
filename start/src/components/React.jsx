import ressurser from "../assets/ressursarkiv";

export default function React() {

    return (
        <div>
            <h2 id="text">React</h2>

            <ul>{ressurser.map((item, index) => item.category === "react" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>
        
    )
}