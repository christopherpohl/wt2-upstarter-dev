
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://github.com/christopherpohl/wt2-upstarter-dev"
        className="youtube social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      

      <a href="https://www.youtube.com/"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="https://www.instagram.com"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a> 
    </div>
    
  );
}
