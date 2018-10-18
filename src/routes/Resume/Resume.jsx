// @ts-nocheck
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrint, faFileDownload, faEnvelope, faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';

import Button from '../../components/Button/Button';

import Education from './Education/Education';
import Timeline from './Timeline/Timeline';
import SkillList from './Skills/Skill-List';
import './Resume.scss';
import resumePDF from './resume.pdf';
import {
  social, contact, address, bio, text, ocupation, name,
} from '../../data/hero';

const Resume = () => (
  <div id="Resume" column="" align="center">
    <main contain="" align="start">
      <h2>{name[window.lang]}</h2>
      <h3>{ocupation[window.lang]}</h3>

      <header row="nowrap" mobile-wrap="">
        <div flex="auto" className="pv1">
          <p>{bio[window.lang]}</p>
          <br />
          <p>{text[window.lang]}</p>
        </div>

        <address flex="auto" className="p1">
          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faMapMarkedAlt} />
            {address.city},{address.country}
          </p>

          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faEnvelope} />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faWhatsapp} />
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>

          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faSkype} />
            <a href={contact.skype.url}>
              {contact.skype.label}
            </a>
          </p>
        </address>
      </header>

      <SkillList />

      <h4>Experience</h4>
      <Timeline />

      <h4>Education</h4>
      <Education />

      <footer hide-print="" align="start start" className="column Resume">
        <div row="">
          <Button newtab link={resumePDF} theme="default mr1" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileDownload} />
            Download PDF
          </Button>

          {/* <Button onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </Button> */}

          <Button
            mobile-flex="auto"
            link={social.instagram.url}
            theme="social instagram"
            newtab
          >
            <FontAwesomeIcon icon={social.instagram.icon} />
            <p>
              <span>{social.instagram.name}</span>
              <sub className="social-tag">
                @{social.instagram.user}
              </sub>
            </p>
          </Button>

          <Button
            mobile-flex="auto"
            link={social.facebook.url}
            theme="social facebook"
            newtab
          >
            <FontAwesomeIcon icon={social.facebook.icon} />
            <p><span>{social.facebook.name}</span></p>
          </Button>

          <Button
            mobile-flex="auto"
            link={social.linkedin.url}
            theme="social linkedin"
            newtab
          >
            <FontAwesomeIcon icon={social.linkedin.icon} />
            <p><span>{social.linkedin.name}</span></p>
          </Button>

          <Button
            mobile-flex="auto"
            link={social.github.url}
            theme="social github"
            newtab
          >
            <FontAwesomeIcon icon={social.github.icon} />
            <p>
              <span>{social.github.name}</span>
              <sub className="social-tag">
                @{social.github.user}
              </sub>
            </p>
          </Button>
        </div>
      </footer>
    </main>
  </div>
);

export default Resume;
