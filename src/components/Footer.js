
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div class="social-container">
      
      <a href="https://github.com/christopherpohl/wt2-upstarter-dev"
        className="git social">
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
      

      <a href="https://www.youtube.com/"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="1x" />
</a>
<a href="https://www.facebook.com/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a>
<a href="https://www.twitter.com/" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="1x" />
    </a>
    <a href="https://www.instagram.com"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="1x" />
    </a> 
    </div>
    
  );
}

export default Footer;