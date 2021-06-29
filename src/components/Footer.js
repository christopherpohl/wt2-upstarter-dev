
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


    <footer class="text-center text-white" classNAme="footer">
      <section class="lg-4">

      </section>
      <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
      ><i class="fab fa-facebook-f">Instagram</i
      ></a>






      <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
      ><i class="fab fa-twitter">Facebook</i
      ></a>


      <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
      ><i class="fab fa-google">Twitter</i
      ></a>


      <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
      ><i class="fab fa-instagram">Youtube</i
      ></a>

      <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
      ><i class="fab fa-instagram">LinkIN</i
      ></a>











    </footer >);
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