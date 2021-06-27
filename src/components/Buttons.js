import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"

import { Link} from "react-router-dom"



function Buttons() {

return(
<div className="landing-links">
<ul>
<li className="lBtn"><div className="land-btn">
    <a href="/login">Einloggen</a>
</div></li>
<li className="rBtn"><div className="land-btn">
    <a href="/register">Registrieren</a>
</div></li>
</ul>
</div>
)

}
export default Buttons;