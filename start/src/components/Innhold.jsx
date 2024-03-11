import { Outlet} from "react-router-dom";

export default function Innhold(){
    return(
        <article className="textCont">
            <Outlet />
        </article>
    )
}