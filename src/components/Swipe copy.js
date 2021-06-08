import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png',
    context: 'Dies ist eine Beschreibung'
  },
  {
    name: 'Richard Hendricks',
    url: 'https://doepke-logistik.de/wp-content/uploads/2014/12/person-icon-1674.png',
    context: 'Dies ist eine Beschreibung'
  }

]

function Simple () {
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
   
      
      <div id='outer-container'>
      
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
           <div id="inner-container">
                <div id="row1">
                <img id="img1" src={character.url}></img>
                </div>
                <div id="row2">
                <div>{character.name}</div>
                <div>{character.context}</div>
                </div>
               
            </div>
           
            
          </TinderCard>
        )}
     
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Simple