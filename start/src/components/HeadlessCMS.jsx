import { resources } from "../assets/ressurser";

export default function HeadlessCMS() {

    return (
        <div>
            <h2 id="text">Headless CMS</h2>

            <ul>{resources.map((item, index) => item.category === "headless-cms" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>
    )
}