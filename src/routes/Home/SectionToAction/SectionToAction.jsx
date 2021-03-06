import React from 'react';
import { lang } from 'utils';
import { contact } from 'data/hero';
import Button from 'components/Button/Button';
import './SectionToAction.scss';

const texts = {
  book: {
    en: 'Book a Call',
    pt: 'Agendar uma conversa',
    he: 'Book a Call',
  },
};

const SectionToAction = () => (
  <section id="SectionToAction" row="" align="around center">
    <Button link={contact.agenda}>
      {lang(texts.book)}
    </Button>
  </section>
);

export default SectionToAction;
