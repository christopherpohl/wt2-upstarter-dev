import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, {useState } from "react"
import {faBars} from '@fortawesome/free-solid-svg-icons'




function Burger() {
  
    const [showMenu, setShowMenu] = useState(false)

    let menu

    if(showMenu){
        menu = 
        <div className="burg-links" >
            <ul>
            <li><div className="burg-btn"><a href="/swipe">Ausloggen</a></div></li>
            <li><div className="burg-btn"><a href="/swipe">Optionen</a></div></li>
            <li><div className="burg-btn"><a href="/swipe">Swipe Bereich</a></div></li>
            <li><div className="burg-btn"><a href="/swipe">Mein Bereich</a></div></li>
            <li><div className="burg-btn"><a href="/login">Startseite</a></div></li>
            </ul>
            </div>
    }
  
  
    return (
    <nav className="burg-nav">
        <span className="text-xxl">
            <FontAwesomeIcon icon={faBars} 
            onClick={() => setShowMenu(!showMenu)}>

            </FontAwesomeIcon>
        </span>
        { menu }
    </nav>
      

  )
}

export default Burger;