import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import Titel from './Titel.js';
import Menue from './Menue.js';
import Willkommen from './Willkommen.js';
import Leistungen from './Leistungen.js';
import Mehr from './Mehr.js';
import WusstenSieSchon from './WusstenSieSchon.js';
import Kontakt from './Kontakt.js';
import Impressum from './Impressum.js';


function App() {
  return (
    
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <Container fluid>
        <Willkommen />
      </Container>
    </div>
  );
}

export default App;
