import React, { useState } from 'react'
import Imgix from "react-imgix";
import './abo.css'


const images = [
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

  const buildURL = imagePath =>
  `https://assets.imgix.net/tutorials/${imagePath}.webp`;



  function Abo () {
 return(
      
    <div id="container"> 
    <div className="gallery">
       
      {images.map(image => (
        <div id="inner-abo-container">
        <img id="img1" src={image.url}></img>
        <div class="overlay">{image.name}</div>
        
        </div>
       
     
      ))}

    </div>
    </div>
  )};

  export default Abo
