export const WHATSAPP_NUMBER = '917777998789';
export const WHATSAPP_DISPLAY = '77 77 99 87 89';
export const WHATSAPP_INTL_DISPLAY = '+91 77 77 99 87 89';
export const WHATSAPP_URL = 'https://wa.me/917777998789';

export const siteSettings = {
  brandName: 'KateringKing',
  tagline: 'Royal Culinary Art & Bespoke Event Banquets',
  description: 'Creating unforgettable gastronomic journeys for royal weddings, executive galas, and landmark celebrations for over 25 years.',
  phone: '+91 77779 98789',
  phoneDisplay: '77 77 99 87 89',
  phoneIntlDisplay: '+91 77 77 99 87 89',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: WHATSAPP_DISPLAY,
  whatsappIntlDisplay: WHATSAPP_INTL_DISPLAY,
  whatsappUrl: WHATSAPP_URL,
  email: 'concierge@kateringking.com',
  address: 'Heritage Estate, Royal Avenue, Jubilee Hills, Hyderabad',
  social: {
    instagram: 'https://www.instagram.com/kateringkingservices?igsh=MThtM3E2Y3BhdnNqag==',
    instagramHandle: '@kateringkingservices',
    facebook: 'https://www.facebook.com/kateringkingservices',
    facebookHandle: 'kateringkingservices',
    whatsapp: WHATSAPP_URL,
    whatsappDisplay: WHATSAPP_DISPLAY,
    whatsappNumber: WHATSAPP_INTL_DISPLAY
  }
};

export const trustStats = [
  { id: 1, value: 500, suffix: '+', label: 'Royal Events Catered', sub: 'Grand weddings & summits' },
  { id: 2, value: 25, suffix: '+', label: 'Years Culinary Legacy', sub: 'Michelin-trained masters' },
  { id: 3, value: 120, suffix: '+', label: 'Bespoke Recipes', sub: 'Curated world menus' },
  { id: 4, value: 99, suffix: '.8%', label: 'Flawless Client Rating', sub: 'Verified banquet reviews' }
];

export const cateringPackages = [
  {
    id: 'royal-signature',
    name: 'Royal Signature Package',
    minGuests: '150 - 1,500+ guests',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Premium package for weddings, receptions and grand celebrations.',
    bestFor: 'Luxury weddings, receptions, VIP events and premium celebrations.',
    inclusions: [
      '10 Royal Centerpiece & Heritage Dishes',
      'Whole Lamb Dum Ki Raan & Kareli Live Carvery',
      'Traditional Stone-Grill Phattar Ka Gosht Setup',
      'Hyderabadi Warqi & Lukmi Passed Appetizers',
      'Exclusive Royal Nizami Banquet Staging'
    ],
    dishes: [
      {
        id: 'rs-1',
        name: 'Dum Ki Raan',
        course: 'Main Course / Carvery',
        dietary: 'Chef Signature',
        chefNote: 'Slow-cooked whole leg of lamb in 32 aromatic court spices',
        description: 'Whole lamb leg slowly cooked with aromatic spices until exceptionally tender and rich.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-2',
        name: 'Kareli Roast',
        course: 'Main Course',
        dietary: 'Non-Veg',
        chefNote: 'Roasted shanks steeped in roasted coriander & brown onion paste',
        description: 'Succulent lamb shanks roasted with a deeply spiced, traditional marinade.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-3',
        name: 'Musbi – Dum Ka Bakra',
        course: 'Royal Centerpiece',
        dietary: 'Chef Signature',
        chefNote: 'Grand pit-roasted whole goat stuffed with spiced rice & nuts',
        description: 'A grand whole-goat preparation, slow-cooked with rich spices for a spectacular centerpiece.',
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-4',
        name: 'Muthi Ke Kebab',
        course: 'Starters',
        dietary: 'Non-Veg',
        chefNote: 'Hand-pressed minced lamb infused with green cardamom & mace',
        description: 'Delicate hand-shaped kebabs with a rich, spiced meat mixture and refined texture.',
        image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-5',
        name: 'Warqi Samosa',
        course: 'Starters',
        dietary: 'Non-Veg',
        chefNote: 'Multi-layered artisan puff crust with spiced filling',
        description: 'Flaky, layered pastry filled with a savory spiced filling.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-6',
        name: 'Lukmi – Mutton/Chicken',
        course: 'Starters',
        dietary: 'Non-Veg',
        chefNote: 'Authentic Hyderabadi square pastry pockets with seasoned mince',
        description: 'Hyderabadi-style savory pastry parcels filled with seasoned mutton or chicken.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-7',
        name: 'Murgh Mussallam',
        course: 'Royal Centerpiece',
        dietary: 'Chef Signature',
        chefNote: 'Whole royal chicken roasted with saffron gravy & silver vark',
        description: 'Whole chicken prepared with aromatic spices and traditional stuffing, designed as a centerpiece.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-8',
        name: 'Phattar Ka Gosht',
        course: 'Live Grill',
        dietary: 'Non-Veg',
        chefNote: 'Cooked on red granite stones heated with charcoal embers',
        description: 'Tender meat cooked using the traditional stone-grilling technique for a distinctive roasted flavor.',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-9',
        name: 'Dum Ke Chops',
        course: 'Main Course',
        dietary: 'Non-Veg',
        chefNote: 'Seared lamb chops braised in copper degh under dum',
        description: 'Tender lamb chops slowly cooked with aromatic spices and a rich marinade.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rs-10',
        name: 'Cold Fish Salad',
        course: 'Starters / Salad',
        dietary: 'Non-Veg',
        chefNote: 'Refreshing delicate fish with citrus vinaigrette & microgreens',
        description: 'A refreshing fish preparation that balances the richness of the main courses.',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'hyderabadi-heritage',
    name: 'Hyderabadi Heritage Package',
    minGuests: '200 - 2,500+ guests',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'A complete journey through authentic Nizami and Hyderabadi cuisine.',
    bestFor: 'Traditional weddings, Hyderabadi-themed celebrations, family functions and cultural events.',
    inclusions: [
      'Authentic Nizami Soups, Starters & Slow-Simmered Haleem',
      'Heritage Dum Ka Gosht, Lagani Gosht & Dum Ka Murg',
      'Mirchi Ka Salan & Bagara Baingan Accompaniments',
      'Royal 4-Variety Biryani Collection (Mutton, Chicken, Yakhni, Sufyani, Zafrani)',
      'Double Ka Meetha, Qubani Ka Meetha & Badam Ki Kheer'
    ],
    dishes: [
      {
        id: 'hh-1',
        name: 'Mutton Marag',
        course: 'Soups & Starters',
        dietary: 'Non-Veg',
        chefNote: 'Velvety almond and cashew broth with tender baby lamb',
        description: 'A delicate, aromatic mutton broth traditionally served as a refined Hyderabadi starter.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-2',
        name: 'Malai Paya',
        course: 'Soups & Starters',
        dietary: 'Non-Veg',
        chefNote: '12-hour slow simmered trotters in rich malai and saffron broth',
        description: 'Slow-cooked trotters prepared into a rich, creamy and flavorful broth.',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-3',
        name: 'Paya Shorba',
        course: 'Soups & Starters',
        dietary: 'Non-Veg',
        chefNote: 'Traditional simmered spiced broth infused with whole garam masalas',
        description: 'Traditional slow-simmered trotters soup, packed with spices and depth.',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-4',
        name: 'Haleem',
        course: 'Soups & Starters',
        dietary: 'Chef Signature',
        chefNote: 'Slow-cooked for 10 hours with pounded wheat, mutton, pure ghee & spices',
        description: 'A slow-cooked blend of meat, wheat and lentils, creating Hyderabad\'s iconic rich and hearty dish.',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-5',
        name: 'Shikampuri Kebab',
        course: 'Soups & Starters',
        dietary: 'Non-Veg',
        chefNote: 'Spiced minced meat stuffed with hung curd, mint & green chillies',
        description: 'Soft, melt-in-the-mouth kebabs traditionally filled with a tangy yogurt center.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-6',
        name: 'Shaami Kebab – Mutton/Chicken',
        course: 'Soups & Starters',
        dietary: 'Non-Veg',
        chefNote: 'Silken meat and chana dal patties pan-fried on heavy iron tawa',
        description: 'Finely minced meat blended with lentils and spices, shaped and pan-cooked into tender kebabs.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-7',
        name: 'Talawa Gosht',
        course: 'Soups & Starters',
        dietary: 'Non-Veg',
        chefNote: 'Mutton pan-fried with roasted spices until dark, juicy and deeply caramelized',
        description: 'Spiced meat pieces cooked until richly browned, offering an intense roasted flavor.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-8',
        name: 'Dum Ka Gosht',
        course: 'Main Course – Non-Veg',
        dietary: 'Non-Veg',
        chefNote: 'Mutton marinated in fried onions, curd & almond paste, cooked on slow dum',
        description: 'Mutton slow-cooked under dum with aromatic spices to develop a deep, rich flavor.',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-9',
        name: 'Lagani Gosht',
        course: 'Main Course – Non-Veg',
        dietary: 'Non-Veg',
        chefNote: 'Prepared in wide shallow copper lagan with roasted poppy seeds & coconut',
        description: 'Traditional Hyderabadi mutton curry prepared with a flavorful, spice-rich gravy.',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-10',
        name: 'Mutton Asif Jahi',
        course: 'Main Course – Non-Veg',
        dietary: 'Chef Signature',
        chefNote: 'Regal recipe from the Nizam\'s court flavored with saffron and royal spices',
        description: 'A royal-style mutton preparation inspired by the culinary traditions of the Asaf Jahi era.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-11',
        name: 'Dum Ka Murg',
        course: 'Main Course – Non-Veg',
        dietary: 'Non-Veg',
        chefNote: 'Farm chicken slow-cooked with cashew paste, saffron and cardamom',
        description: 'Chicken slowly cooked with spices using the traditional dum technique.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-12',
        name: 'Mirchi Ka Salan',
        course: 'Vegetarian Accompaniments',
        dietary: 'Veg',
        chefNote: 'Bhavnagri chillies simmered in roasted peanuts, sesame seeds & tamarind',
        description: 'Long green chillies cooked in a distinctive sesame, peanut and coconut-based Hyderabadi gravy.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-13',
        name: 'Bagara Baingan',
        course: 'Vegetarian Accompaniments',
        dietary: 'Veg',
        chefNote: 'Baby brinjals simmered in aromatic roasted coconut-peanut masala',
        description: 'Baby eggplants simmered in a rich, nutty and aromatic Hyderabadi masala.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-14',
        name: 'Dum Ki Biryani – Chicken/Mutton',
        course: 'Biryani Collection',
        dietary: 'Chef Signature',
        chefNote: 'Traditional kachchi dum method in dough-sealed degh with saffron milk',
        description: 'Fragrant basmati rice and marinated meat layered and slow-cooked together under dum.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-15',
        name: 'Kaccha Yakhni Biryani',
        course: 'Biryani Collection',
        dietary: 'Chef Signature',
        chefNote: 'Raw spiced meat and soaked basmati cooked simultaneously on charcoal dum',
        description: 'Traditional biryani where raw marinated meat cooks together with the rice, creating deep flavor.',
        image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-16',
        name: 'Sufyani Biryani',
        course: 'Biryani Collection',
        dietary: 'Non-Veg',
        chefNote: 'Delicate white biryani infused with almond milk, khoya and mild spices',
        description: 'A lighter, aromatic biryani distinguished by delicate spices and refined flavors.',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-17',
        name: 'Zafrani Biryani',
        course: 'Biryani Collection',
        dietary: 'Chef Signature',
        chefNote: 'Infused with pure Kashmiri saffron strands, ghee and fried brown onions',
        description: 'Luxurious biryani enhanced with saffron for an aromatic, elegant finish.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-18',
        name: 'Double Ka Meetha',
        course: 'Traditional Desserts',
        dietary: 'Veg',
        chefNote: 'Ghee-crisped bread drenched in thickened saffron rabri, almonds & pistachios',
        description: 'Fried bread soaked in sweetened milk and finished with nuts and aromatic flavors.',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-19',
        name: 'Qubani Ka Meetha',
        course: 'Traditional Desserts',
        dietary: 'Veg',
        chefNote: 'Slow-stewed dried apricots served with thick malai and apricot kernel nuts',
        description: 'Slow-cooked dried apricots transformed into a rich, fruity Hyderabadi dessert.',
        image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'hh-20',
        name: 'Badam Ki Kheer',
        course: 'Traditional Desserts',
        dietary: 'Veg',
        chefNote: 'Whole milk reduced with blanched almond paste, cardamom and saffron',
        description: 'Creamy milk dessert slowly reduced with almonds for a rich, nutty finish.',
        image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'classic-hyderabadi-feast',
    name: 'Classic Hyderabadi Feast',
    minGuests: '100 - 500 guests',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
    description: 'A balanced package featuring Hyderabad\'s most recognizable dishes.',
    bestFor: 'Birthday celebrations, family functions, engagement ceremonies and medium-sized events.',
    inclusions: [
      'Tender Shikampuri, Shaami Kebabs & Talawa Gosht',
      'Slow-Cooked Dum Ka Gosht & Dum Ka Murg Gravies',
      'Authentic Mirchi Ka Salan & Bagara Baingan',
      'Mutton Dum Biryani & Chicken Dum Biryani',
      'Signature Double Ka Meetha & Qubani Ka Meetha'
    ],
    dishes: [
      {
        id: 'chf-1',
        name: 'Shikampuri Kebab',
        course: 'Starters',
        dietary: 'Non-Veg',
        chefNote: 'Soft kebabs with a distinct, creamy spiced yogurt center',
        description: 'Soft, flavorful kebabs with a distinctive yogurt-filled center.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-2',
        name: 'Shaami Kebab',
        course: 'Starters',
        dietary: 'Non-Veg',
        chefNote: 'Pan-seared patties of finely minced mutton and chana dal',
        description: 'Tender minced meat and lentil kebabs infused with aromatic spices.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-3',
        name: 'Talawa Gosht',
        course: 'Starters',
        dietary: 'Non-Veg',
        chefNote: 'Crisped boneless mutton bites with curry leaves & crushed pepper',
        description: 'Richly spiced meat cooked until beautifully browned.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-4',
        name: 'Dum Ka Gosht',
        course: 'Main Course',
        dietary: 'Non-Veg',
        chefNote: 'Braised mutton in spiced cashew yogurt gravy cooked under seal',
        description: 'Slow-cooked mutton with deep, aromatic flavors.',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-5',
        name: 'Dum Ka Murg',
        course: 'Main Course',
        dietary: 'Non-Veg',
        chefNote: 'Succulent bone-in chicken slow-cooked with Hyderabadi potli masala',
        description: 'Succulent chicken prepared using the traditional dum method.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-6',
        name: 'Mirchi Ka Salan',
        course: 'Main Course / Accompaniment',
        dietary: 'Veg',
        chefNote: 'Spiced green pepper curry in toasted sesame and peanut gravy',
        description: 'Classic spicy and nutty Hyderabadi accompaniment.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-7',
        name: 'Bagara Baingan',
        course: 'Main Course / Accompaniment',
        dietary: 'Veg',
        chefNote: 'Tender baby eggplants simmered in coconut tamarind sauce',
        description: 'Baby eggplants cooked in a rich Hyderabadi masala.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-8',
        name: 'Mutton Dum Biryani',
        course: 'Biryani',
        dietary: 'Chef Signature',
        chefNote: 'Tender lamb layered with saffron basmati in sealed copper handi',
        description: 'Fragrant rice layered with tender, spiced mutton.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-9',
        name: 'Chicken Dum Biryani',
        course: 'Biryani',
        dietary: 'Non-Veg',
        chefNote: 'Marinated chicken cooked with fragrant basmati and fresh mint',
        description: 'Aromatic basmati rice cooked with marinated chicken.',
        image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-10',
        name: 'Double Ka Meetha',
        course: 'Dessert',
        dietary: 'Veg',
        chefNote: 'Golden fried brioche soaked in saffron milk and silver vark',
        description: 'Classic Hyderabadi bread pudding-style dessert.',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'chf-11',
        name: 'Qubani Ka Meetha',
        course: 'Dessert',
        dietary: 'Veg',
        chefNote: 'Stewed Turkish apricots with sweet almond kernels & cream',
        description: 'Sweet, fruity apricot dessert with a luxurious finish.',
        image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'signature-starters-royal-bites',
    name: 'Signature Starters & Royal Bites',
    minGuests: '75 - 350 guests',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    description: 'Designed for cocktail evenings, receptions and premium pre-dinner service.',
    bestFor: 'Cocktail parties, corporate events, receptions and evening gatherings.',
    inclusions: [
      '7 Handcrafted Passed Hors d\'oeuvres & Kebabs',
      'Crisp Warqi Samosas & Savory Mutton/Chicken Lukmi Parcels',
      'Live Stone-Fired & Pan-Seared Shikampuri Kebab Stations',
      'Gourmet Cold Fish Salad Canapé Presentations',
      'Infused Botanical Mocktails & Butler Service'
    ],
    dishes: [
      {
        id: 'ss-1',
        name: 'Muthi Ke Kebab',
        course: 'Appetizers & Bites',
        dietary: 'Non-Veg',
        chefNote: 'Hand-pressed spiced minced meat skewers',
        description: 'Hand-shaped, delicately spiced kebabs crafted for an elegant first bite.',
        image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ss-2',
        name: 'Warqi Samosa',
        course: 'Appetizers & Bites',
        dietary: 'Non-Veg',
        chefNote: 'Laminated flaky pastry with fragrant spiced mince filling',
        description: 'Crisp, flaky and layered pastry with a savory filling.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ss-3',
        name: 'Lukmi – Mutton/Chicken',
        course: 'Appetizers & Bites',
        dietary: 'Non-Veg',
        chefNote: 'Signature square pastry pillows filled with seasoned meat',
        description: 'Traditional Hyderabadi pastry filled with seasoned meat.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ss-4',
        name: 'Shikampuri Kebab',
        course: 'Appetizers & Bites',
        dietary: 'Non-Veg',
        chefNote: 'Yogurt-filled minced patties seared in pure desi ghee',
        description: 'Soft kebabs with a creamy, tangy center.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ss-5',
        name: 'Shaami Kebab',
        course: 'Appetizers & Bites',
        dietary: 'Non-Veg',
        chefNote: 'Tender spiced minced lamb and lentil patties',
        description: 'Tender meat-and-lentil kebabs with warm aromatic spices.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ss-6',
        name: 'Talawa Gosht',
        course: 'Appetizers & Bites',
        dietary: 'Non-Veg',
        chefNote: 'Deep pan-roasted mutton tossed with curry leaves & green chillies',
        description: 'Boldly seasoned meat with a beautifully roasted exterior.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ss-7',
        name: 'Cold Fish Salad',
        course: 'Canapés & Salads',
        dietary: 'Non-Veg',
        chefNote: 'Lightly poached catch of the day tossed with fresh herbs & lime',
        description: 'Light and refreshing fish preparation to balance richer appetizers.',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'grand-biryani-feast',
    name: 'The Grand Biryani Feast',
    minGuests: '150 - 3,000+ guests',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'A package built around Hyderabad\'s most iconic culinary experience.',
    bestFor: 'Biryani-focused events, weddings, festivals and large gatherings.',
    inclusions: [
      '5 Legendary Biryani Varieties (Mutton, Chicken, Kaccha Yakhni, Sufyani, Zafrani)',
      'Sealed Copper Bronze Degh Live Steam Breaking Ceremony',
      'Authentic Nutty Mirchi Ka Salan & Bagara Baingan',
      'Traditional Burani Garlic Raita & Dahi Ki Chutney',
      'Qubani Ka Meetha with Malai & Double Ka Meetha'
    ],
    dishes: [
      {
        id: 'gbf-1',
        name: 'Mutton Dum Biryani',
        course: 'Main Attraction',
        dietary: 'Chef Signature',
        chefNote: 'Slow-cooked in dough-sealed bronze deghs with fragrant basmati',
        description: 'Richly marinated mutton layered with fragrant basmati rice and slow-cooked under dum.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gbf-2',
        name: 'Chicken Dum Biryani',
        course: 'Main Attraction',
        dietary: 'Non-Veg',
        chefNote: 'Tender chicken pieces simmered with long-grain rice and whole spices',
        description: 'Tender chicken layered with aromatic rice and traditional spices.',
        image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gbf-3',
        name: 'Kaccha Yakhni Biryani',
        course: 'Main Attraction',
        dietary: 'Chef Signature',
        chefNote: 'Raw marinated meat slow-cooked simultaneously with basmati over coals',
        description: 'Authentic slow-cooked preparation where raw marinated meat and rice develop their flavors together.',
        image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gbf-4',
        name: 'Sufyani Biryani',
        course: 'Main Attraction',
        dietary: 'Non-Veg',
        chefNote: 'Mughlai white biryani flavored with almond paste, cream & mild spices',
        description: 'Elegant and aromatic with a comparatively delicate spice profile.',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gbf-5',
        name: 'Zafrani Biryani',
        course: 'Main Attraction',
        dietary: 'Chef Signature',
        chefNote: 'Kashmiri saffron-steeped basmati layered with succulent cuts',
        description: 'Luxurious saffron-infused biryani with a rich aroma.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gbf-6',
        name: 'Mirchi Ka Salan',
        course: 'Accompaniments',
        dietary: 'Veg',
        chefNote: 'Long green chillies cooked in sesame, peanut and coconut gravy',
        description: 'Nutty, spicy gravy traditionally paired with biryani.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gbf-7',
        name: 'Bagara Baingan',
        course: 'Accompaniments',
        dietary: 'Veg',
        chefNote: 'Tender baby brinjals in a rich roasted masala sauce',
        description: 'Rich eggplant preparation providing a creamy contrast to the biryani.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gbf-8',
        name: 'Qubani Ka Meetha',
        course: 'Dessert',
        dietary: 'Veg',
        chefNote: 'Classic slow-cooked apricot compote with rich clotted cream',
        description: 'Traditional apricot dessert.',
        image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gbf-9',
        name: 'Double Ka Meetha',
        course: 'Dessert',
        dietary: 'Veg',
        chefNote: 'Crisp bread pudding steeped in thickened saffron rabri & dry fruits',
        description: 'Rich, sweet bread-based Hyderabadi classic.',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'setups', label: 'Catering Setup' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'counters', label: 'Live Counters' },
  { id: 'team', label: 'Team' },
  { id: 'bts', label: 'Behind the Scenes' }
];

export const galleryItems = [
  {
    id: 1,
    title: 'Imperial Palace Wedding Banquet',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crystal chandeliers and candle-lit floral banqueting for 800 guests.'
  },
  {
    id: 2,
    title: 'Zafrani Paneer & Smoked Embers Platter',
    category: 'food',
    categoryLabel: 'Food',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80',
    caption: 'Prime malai paneer steeped in saffron cream, yellow mustard, and bell peppers.'
  },
  {
    id: 3,
    title: 'Executive Chef Team Staging Plating',
    category: 'team',
    categoryLabel: 'Team',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Executive chefs executing precision garnish and temperature control.'
  },
  {
    id: 4,
    title: 'Grand Floral Buffet Staging Boulevard',
    category: 'setups',
    categoryLabel: 'Catering Setup',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lush floral arrangements and polished silver chafer boulevard.'
  },
  {
    id: 5,
    title: 'Theatrical Dim Sum & Wok Station',
    category: 'counters',
    categoryLabel: 'Live Counters',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    caption: 'Live bamboo steamer towers with hand-pleated truffle and edamame dumplings.'
  },
  {
    id: 6,
    title: 'Fortune 500 Presidential Gala Dinner',
    category: 'corporate',
    categoryLabel: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    caption: 'Synchronized silver-cloche service for corporate leadership gala.'
  },
  {
    id: 7,
    title: 'Royal Awadhi Dum Biryani Handi',
    category: 'food',
    categoryLabel: 'Food',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    caption: 'Slow-cooked in sealed copper vessels with 32 secret heritage spices.'
  },
  {
    id: 8,
    title: 'Uniformed Banquet Stewards & Stewarding Crew',
    category: 'team',
    categoryLabel: 'Team',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=1200&q=80',
    caption: 'Our hospitality stewards ready for synchronized banquet reception service.'
  },
  {
    id: 9,
    title: 'Artisanal French Macaron & Pastry Tower',
    category: 'food',
    categoryLabel: 'Food',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
    caption: 'Gold-leaf dusted pistachio, raspberry, and Belgian dark chocolate macarons.'
  },
  {
    id: 10,
    title: 'Sunset Garden Cocktail Reception Lawn',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Open lawn canapé bar with craft botanical mocktails under fairy canopy.'
  },
  {
    id: 11,
    title: 'Master Patissier Crafting Desserts',
    category: 'bts',
    categoryLabel: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Intricate chocolate tempered domes and caramel spun sugars in staging.'
  },
  {
    id: 12,
    title: 'Live Artisan Wood-Fired Pizza Counter',
    category: 'counters',
    categoryLabel: 'Live Counters',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    caption: 'Fermented 72-hour sourdough with San Marzano tomatoes and fior di latte.'
  },
  {
    id: 13,
    title: 'Luxury Glassware & Gold Cutlery Setting',
    category: 'setups',
    categoryLabel: 'Catering Setup',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    caption: 'Precision silver tableware and cut-crystal water goblets.'
  },
  {
    id: 14,
    title: 'Pre-Event Staging & Tableware Polish',
    category: 'bts',
    categoryLabel: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Rigorous 40-point checklist inspection 90 minutes before guest arrival.'
  },
  {
    id: 15,
    title: 'Executive Kitchen Brigade in Action',
    category: 'team',
    categoryLabel: 'Team',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Synchronized kitchen coordination across 18 specialized live counters.'
  },
  {
    id: 16,
    title: 'Plated Sous-Vide Salmon with Saffron Glaze',
    category: 'food',
    categoryLabel: 'Food',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
    caption: 'Delicate Atlantic salmon garnished with edible microgreens and saffron jus.'
  }
];

export const eventReels = [
  {
    id: 'reel-1',
    title: 'The Royal Mewar Wedding Gala',
    eventType: 'Heritage Palace Wedding',
    guests: '1,200 Guests',
    location: 'Udaipur, Rajasthan',
    duration: '0:45',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    highlightTag: '42 Live Counters',
    recapNotes: 'A magnificent 3-day royal banquet featuring heirloom Nawabi recipes and synchronized cloche service.'
  },
  {
    id: 'reel-2',
    title: 'Global Tech Leaders Summit Dinner',
    eventType: 'Executive Leadership Gala',
    guests: '450 Guests',
    location: 'Cyber City, Hyderabad',
    duration: '0:35',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    highlightTag: 'Michelin Tasting Flight',
    recapNotes: '7-course progressive culinary flight paired with zero-proof botanical infusions.'
  },
  {
    id: 'reel-3',
    title: 'The Emerald Lawn Sangeet Soirée',
    eventType: 'Destination Sangeet',
    guests: '600 Guests',
    location: 'Goa Coastal Villa',
    duration: '0:40',
    thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    highlightTag: 'Coastal Seafood Grill',
    recapNotes: 'Open beachside charcoal grills, fresh kokum catch, and live woodfire flatbreads.'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Maharaja & Maharani Singhania',
    event: 'Daughter\'s Royal Palace Wedding (1,200 Guests)',
    rating: 5,
    quote: 'KateringKing transformed our wedding into an unforgettable sensory masterpiece. The synchronized butler service and live Awadhi counters were discussed by every guest for months!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Vikram Malhotra',
    event: 'Managing Director, Horizon Global Capital',
    rating: 5,
    quote: 'For our annual executive gala, precision was paramount. The culinary execution was flawless, the menu creative, and their banquet management operates like clockwork.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Ananya & Rohan Deshmukh',
    event: 'Intimate Farmhouse Sangeet (250 Guests)',
    rating: 5,
    quote: 'From our very first WhatsApp conversation to the final dessert course, the team gave us white-glove attention. Every single dish looked and tasted like pure Michelin luxury.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];
