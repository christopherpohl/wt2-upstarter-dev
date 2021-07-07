import React, { useState, useEffect } from 'react'
import useFetch from "react-fetch-hook"
import Card from 'react-tinder-card'
import axios from 'axios';
import Abo from './abo';

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png',
    context: 'Dies ist eine Beschreibung',
    stats: 'https://gifimage.net/wp-content/uploads/2018/11/gif-graph-4.gif',
    stats_static: 'https://s20.directupload.net/images/210609/ar5sjvwd.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png',
    context: 'Dies ist eine Beschreibung',
    stats: 'https://gifimage.net/wp-content/uploads/2018/11/gif-graph-4.gif',
    stats_static: 'https://s20.directupload.net/images/210609/ar5sjvwd.jpg'
  },
  {
    name: 'Monica Hall',
    url: 'https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png',
    context: 'Dies ist eine Beschreibung',
    stats: 'https://gifimage.net/wp-content/uploads/2018/11/gif-graph-4.gif',
    stats_static: 'https://s20.directupload.net/images/210609/ar5sjvwd.jpg'
  },
  {
    name: 'Jared Dunn',
    url: 'https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png',
    context: 'Dies ist eine Beschreibung',
    stats: 'https://gifimage.net/wp-content/uploads/2018/11/gif-graph-4.gif',
    stats_static: 'https://s20.directupload.net/images/210609/ar5sjvwd.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png',
    context: 'Dies ist eine Beschreibung',
    stats: 'https://gifimage.net/wp-content/uploads/2018/11/gif-graph-4.gif',
    stats_static: 'https://s20.directupload.net/images/210609/ar5sjvwd.jpg'
  }
]

function Swipe () {

  
    
  const { isLoading, data } = useFetch("http://localhost:8080/api/user");
 




  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete,idAbo) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    if(direction =="right"){
      console.log(idAbo);
      console.log(nameToDelete);
      fetch('http://localhost:8080/api/addAbo', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({idAbo,nameToDelete}) })
        .then(res => res.json())

    }
    
    
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    
    
  }

 

  

 

  return isLoading ? (

    <div></div> ): (

      <div className='cardContainer d-flex align-items-center justify-content-center'>
          {
               

          }
        {
        
        data.map((data1) =>
          <Card className='swipe' key={data1.id} onSwipe={(dir) => swiped(dir, data1.id,data1.idAbo)} onCardLeftScreen={() => outOfFrame(data1.id)}>
             <div id="inner-container">
                <div id="row1">
                <img id="img1" src="https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png"></img>
                </div>
                <div id="row2">
                <div><h3>{data1.benutzername}</h3></div>
                <div>Beschreibung</div>
                </div>
                <div id="row3">
              
                <img  class="static" src=""></img>
                <img  id="img2" class="active" src=""></img>
                {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
                </div>
            </div>
          </Card>
        )}
      </div>
      
    
  )
}

export default Swipe
