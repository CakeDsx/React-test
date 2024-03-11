import ressurser from "../assets/ressursarkiv";

export default function HeadlessCMS() {

    return (
        <div>
            <h2 id="text">Headless CMS</h2>

            <ul>{ressurser.map((item, index) => item.category === "headless-cms" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>
    )
}