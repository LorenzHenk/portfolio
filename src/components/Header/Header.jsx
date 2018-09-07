import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faInstagram, faLinkedin, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';
import holoDefault from './holo-sillhouete.svg';
import holoPlatform from './holo-base.svg';
import hero from '../../data/hero';

import './Header.scss';

const Header = () => (
  <header
    className="contain row nowrap mobile-wrap"
    align="between center"
    id="home-header"
  >
    <div flex="auto">
      <article className="bio">
        <h6 className="dalaran">Hero:</h6>
        <h2>{hero.name[window.lang]}</h2>

        <h6 className="dalaran">Bio:</h6>
        <p>{hero.bio[window.lang]}</p>
        <br />
        <h4>
          Welcome to my portifolio experience
          <span className="beta-tag">beta</span>
        </h4>
      </article>

      <div row="">
        <Button
          mobile-flex="auto"
          link="//instagram.com/chris.lion"
          theme="instagram social"
          newtab
        >
          <FontAwesomeIcon icon={faInstagram} />
          <p>
            <span>Instagram</span>
            <sub className="social-tag">@chris.lion</sub>
          </p>
        </Button>

        <Button
          mobile-flex="auto"
          link="//facebook.com/christhopherleao"
          theme="facebook"
          newtab
        >
          <FontAwesomeIcon icon={faFacebook} />
          <p><span>Facebook</span></p>
        </Button>

        <Button
          mobile-flex="auto"
          link="//linkedin.com/in/chrislion"
          theme="linkedin"
          newtab
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <p><span>LinkedIn</span></p>
        </Button>

        <Button
          mobile-flex="auto"
          link="//github.com/itsmelion"
          theme="github social"
          newtab
        >
          <FontAwesomeIcon icon={faGithub} />
          <p>
            <span>GitHub</span>
            <sub className="social-tag">@itsmelion</sub>
          </p>
        </Button>
      </div>
    </div>

    <div flex="initial">
      <img src={holoDefault} alt="Hero holographic silhouette" />
      <img src={holoPlatform} alt="Hero hologram platform" />
    </div>
  </header>
);

export default Header;