import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Layout({children}){
  
  return(
    <>
    <header>
        <nav>
            <ul>
                <li><Link to="ResourceList">Javascript</Link></li>
                <li><Link to="resources">css</Link></li>
            </ul>
            
        </nav>
    </header>
    <main>
    {children}
    </main>
    <footer>Footer</footer>
    </>
)
}