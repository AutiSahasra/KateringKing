import React, { useState, useEffect } from 'react';
import CardNav from '../common/CardNav';
import kateringEmblem from '../../assets/katering-emblem.svg';
import kateringWordmark from '../../assets/katering-wordmark.svg';
import { api, navLinksData } from '../../services/api';

export { CardNav };

export default function Navbar({ onOpenEnquiry }) {
  const [links, setLinks] = useState(navLinksData);

  useEffect(() => {
    api.getMenus().then((data) => {
      if (data && Array.isArray(data) && data.length > 0) {
        setLinks(data);
      }
    });
  }, []);

  return (
    <CardNav
      emblem={kateringEmblem}
      wordmark={kateringWordmark}
      logoAlt="Katering King"
      links={links}
      ctaText="Enquire Now"
      onCtaClick={() => onOpenEnquiry && onOpenEnquiry(null)}
    />
  );
}
