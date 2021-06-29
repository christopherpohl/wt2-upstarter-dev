import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, {useState } from "react"
import {faBars} from '@fortawesome/free-solid-svg-icons'

const db = {
    name: 'Richard Hendricks',
    url: 'https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png',
    context: 'Dies ist eine Beschreibung',
    stats: 'https://gifimage.net/wp-content/uploads/2018/11/gif-graph-4.gif',
    stats_static: 'https://s20.directupload.net/images/210609/ar5sjvwd.jpg'
  }



function Profil() {
  
    const character = db;
  
  
    return (
    <div id="inner-container">
        <div id="row1">
        <img id="img1" src={character.url}></img>
        </div>
        <div id="row2">
        <div><h3>{character.name}</h3></div>
        <div>{character.context}</div>
        </div>
        <div id="row3">
      
        <img  class="static" src={character.stats_static}></img>
        <img  id="img2" class="active" src={character.stats}></img>
        
        </div>
    </div>
      

  )
}

export default Profil;