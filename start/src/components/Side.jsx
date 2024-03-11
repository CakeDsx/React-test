import {Link}  from "react-router-dom";
import Innhold from "./Innhold";

export default function Side() {
    const ActiveAdd = (nr) => {
        document.getElementById("nav"+nr).classList.add("active");
    };
    const ActiveRemove = (nr) => {
        document.getElementById("nav"+nr).classList.remove("active");
    };

    const NAV1 = () => {
        ActiveRemove(2);
        ActiveRemove(3);
        ActiveRemove(4);
        ActiveRemove(5);
        ActiveRemove(6);
        
        ActiveAdd(1);
    }
    const NAV2 = () => {
        ActiveAdd(2);

        ActiveRemove(1);
        ActiveRemove(3);
        ActiveRemove(4);
        ActiveRemove(5);
        ActiveRemove(6);
    }
    const NAV3 = () => {
        ActiveAdd(3);

        ActiveRemove(2);
        ActiveRemove(1);
        ActiveRemove(4);
        ActiveRemove(5);
        ActiveRemove(6);
    }
    const NAV4 = () => {
        ActiveAdd(4);

        ActiveRemove(2);
        ActiveRemove(3);
        ActiveRemove(1);
        ActiveRemove(5);
        ActiveRemove(6);
    }
    const NAV5 = () => {
        ActiveAdd(5);

        ActiveRemove(2);
        ActiveRemove(3);
        ActiveRemove(4);
        ActiveRemove(1);
        ActiveRemove(6);
    }
    const NAV6 = () => {
        ActiveAdd(6);

        ActiveRemove(2);
        ActiveRemove(3);
        ActiveRemove(4);
        ActiveRemove(5);
        ActiveRemove(1);
    }

    return (
        <>
        <header>
            <h1><Link to="/"><span>Ressursarkiv</span></Link></h1>
        </header>
        <nav id="nav">
            <div id="links">
                
                <Link to="/">
                    <span id="nav1" onClick={NAV1}>Home</span> 
                </Link>
                
                
                <Link to="/Html">
                    <span id="nav2" onClick={NAV2}>HTML</span>
                </Link>
                
                
                <Link to="/CSS">
                    <span id="nav3" onClick={NAV3}>CSS</span>
                </Link>
                
                
                <Link to="/JavaScript">
                    <span id="nav4" onClick={NAV4}>JavaScript</span>
                </Link>
                
                    
                <Link to="/React">
                    <span id="nav5" onClick={NAV5}>React</span>
                </Link>
                
                
                <Link to="/HeadlessCMS">
                    <span id="nav6" onClick={NAV6}>Sanity & Headless CMS</span>
                </Link>
                
            </div>
        </nav>

      <Innhold />
    </>
    )
}