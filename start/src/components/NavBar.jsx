import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Html from './Html';
import Innhold from './Innhold';
import Side from "./Side";
import Home from "./Home";
import CSS from "./CSS";
import JavaScript from "./JavaScript";
import React from "./React";
import HeadlessCMS from "./HeadlessCMS";

  //https://www.w3schools.com/react/react_router.asp
export default function NavBar() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Side />}>
          <Route index element={<Home />} />
            <Route path="Html" element={<Html/>}/>
            <Route path='Innhold' element={<Innhold/>}/>
            <Route path='CSS' element={<CSS/>}/>
            <Route path='JavaScript' element={<JavaScript/>}/>
            <Route path='React' element={<React/>}/>
            <Route path='HeadlessCMS' element={<HeadlessCMS/>}/>
          </Route>
        </Routes>
      </BrowserRouter>        
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavBar />);