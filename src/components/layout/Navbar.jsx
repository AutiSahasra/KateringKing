import React from 'react';
import CardNav from '../common/CardNav';
import kateringEmblem from '../../assets/katering-emblem.svg';
import kateringWordmark from '../../assets/katering-wordmark.svg';

export { CardNav };

export default function Navbar({ onOpenEnquiry }) {
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Packages', to: '/packages' },
    { label: 'About', to: '/about' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <CardNav
      emblem={kateringEmblem}
      wordmark={kateringWordmark}
      logoAlt="Katering King"
      links={navLinks}
      ctaText="Enquire Now"
      onCtaClick={() => onOpenEnquiry && onOpenEnquiry(null)}
    />
  );
}
