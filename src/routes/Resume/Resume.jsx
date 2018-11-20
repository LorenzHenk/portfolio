// @ts-nocheck
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileDownload,
  faEnvelope,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';

import Button from '../../components/Button/Button';

import Education from './Education/Education';
import Timeline from './Timeline/Timeline';
import SkillList from './Skills/Skill-List';
import './Resume.scss';
import {
  social,
  contact,
  address,
  bio,
  text,
  ocupation,
  name,
  picture,
} from '../../data/hero';
import Certifications from '../../components/Certifications/Certifications';
import certifications from 'data/certifications';

const resume = {
  en:
    'https://drive.google.com/uc?export=download&id=1ZfczKsFOD5rbYbzSuERyGgVHqbLW46DV',
  pt:
    'https://drive.google.com/uc?export=download&id=1Ech4HtSX6ntf3RRr1Q1wLnoAj8MspYdZ',
};

const Resume = () => (
  <div id="Resume" column="" align="center">
    <main contain="" align="start">
      <header className="row nowrap profile" mobile-wrap="">
        <img className="avatar" src={picture.avatar} alt={name[window.lang]} />
        <div flex="auto" className="p1">
          <div>
            <h2>{name[window.lang]}</h2>
            <h3>{ocupation[window.lang]}</h3>
          </div>

          <address flex="auto" className="mb2">
            <p row="nowrap">
              <FontAwesomeIcon className="mr1" icon={faMapMarkedAlt} />
              {address.city},&nbsp;{address.country}
            </p>

            <p row="nowrap">
              <FontAwesomeIcon className="mr1" icon={faEnvelope} />
              <a className="link" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>

            <p row="nowrap">
              <FontAwesomeIcon className="mr1" icon={faWhatsapp} />
              <a className="link" href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
            </p>

            <p row="nowrap">
              <FontAwesomeIcon className="mr1" icon={faSkype} />
              <a className="link" href={contact.skype.url}>
                {contact.skype.label}
              </a>
            </p>
          </address>

          <p>{bio[window.lang]}</p>
          <br />
          <p>{text[window.lang]}</p>
        </div>
      </header>

      <SkillList />

      <section id="Certifications">
        <h4>Certifications</h4>

        <div row="" align="start start">
          {certifications.map(certification => (
            <Certifications data={certification} />
          ))}
        </div>
      </section>

      <h4>Experience</h4>
      <Timeline />

      <h4>Education</h4>
      <Education />

      <footer hide-print="" className="column Resume">
        <div row="">
          <Button link={resume[window.lang]} newtab theme="default social">
            <FontAwesomeIcon icon={faFileDownload} />
            Download PDF
          </Button>

          {/*
          <Button onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </Button>
          */}

          <Button
            mobile-flex="auto"
            link={social.instagram.url}
            theme="social instagram"
            newtab
          >
            <FontAwesomeIcon icon={social.instagram.icon} />
            <p>
              <span>{social.instagram.name}</span>
              <sub className="social-tag">@{social.instagram.user}</sub>
            </p>
          </Button>

          <Button
            mobile-flex="auto"
            link={social.facebook.url}
            theme="social facebook"
            newtab
          >
            <FontAwesomeIcon icon={social.facebook.icon} />
            <p>
              <span>{social.facebook.name}</span>
            </p>
          </Button>

          <Button
            mobile-flex="auto"
            link={social.linkedin.url}
            theme="social linkedin"
            newtab
          >
            <FontAwesomeIcon icon={social.linkedin.icon} />
            <p>
              <span>{social.linkedin.name}</span>
            </p>
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
              <sub className="social-tag">@{social.github.user}</sub>
            </p>
          </Button>
        </div>
      </footer>
    </main>
  </div>
);

export default Resume;
