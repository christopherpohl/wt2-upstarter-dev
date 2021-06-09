import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

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
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>

      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
             <div id="inner-container">
                <div id="row1">
                <img  width="20%" height="20%" id="img1" src={character.url}></img>
                </div>
                <div id="row2">
                <div><h3>{character.name}</h3></div>
                <div>{character.context}</div>
                </div>
                <div id="row3">
              
                <img width="100%" height="45%" class="static" src={character.stats_static}></img>
                <img width="10%" height="10%" id="img2" class="active" src={character.stats}></img>
                
                </div>
            </div>
          </TinderCard>
        )}
      </div>
      
    </div>
  )
}

export default Swipe
