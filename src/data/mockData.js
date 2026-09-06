export const siteSettings = {
  brandName: 'KateringKing',
  tagline: 'Royal Culinary Art & Bespoke Event Banquets',
  description: 'Creating unforgettable gastronomic journeys for royal weddings, executive galas, and landmark celebrations for over 25 years.',
  phone: '+91 98765 43210',
  whatsappNumber: '919876543210',
  email: 'concierge@kateringking.com',
  address: 'Heritage Estate, Royal Avenue, Jubilee Hills, Hyderabad',
  social: {
    instagram: 'https://instagram.com/kateringking',
    twitter: 'https://x.com/kateringking',
    linkedin: 'https://linkedin.com/company/kateringking',
    whatsapp: 'https://wa.me/919876543210'
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
    id: 'silver-elegance',
    name: 'Silver Elegance',
    kicker: 'Intimate Celebrations & Soirées',
    price: '₹1,250',
    unit: 'per guest',
    minGuests: '50 - 150 guests',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    description: 'A thoughtfully balanced multi-course spread crafted for intimate birthdays, anniversary dinners, and private corporate mixers.',
    inclusions: [
      '4 Signature Passed Hors d\'oeuvres',
      '2 Interactive Live Grills & Chaat Stations',
      '6 Gourmet Regional & Global Main Courses',
      'Artisanal Sourdough & Tandoori Breads',
      '2 Handcrafted Warm & Cold Desserts',
      'Infused Mocktail & Artisan Tea Bar',
      'Complete Bone China & Silver Cutlery Setup'
    ],
    dishes: [
      {
        id: 'se-1',
        name: 'Zafrani Paneer Tikka',
        course: 'Starter',
        dietary: 'Veg',
        chefNote: 'Clay tandoor smoked with saffron yogurt marinade',
        description: 'Prime malai paneer cubes steeped in saffron cream, yellow mustard, and bell peppers, seared over smoldering embers.',
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'se-2',
        name: 'Dahi Ke Kebab & Mint Coulis',
        course: 'Starter',
        dietary: 'Veg',
        chefNote: 'Hung curd croquette with pomegranate glaze',
        description: 'Melt-in-mouth spiced yogurt patties with coriander, green cardamom, and crispy golden crust served with tangy mint.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'se-3',
        name: 'Murgh Malai Kebab',
        course: 'Live Grill',
        dietary: 'Non-Veg',
        chefNote: '18-hour cashew and mace infusion',
        description: 'Succulent chicken morsels marinated in cashew paste, green cardamom, and mild cheddar, smoked with royal clove butter.',
        image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'se-4',
        name: 'Dal Bukhara 24hr Simmer',
        course: 'Main Course',
        dietary: 'Veg',
        chefNote: 'Overnight embers slow-simmered specialty',
        description: 'Whole black lentils, sun-ripened plum tomatoes, and churned butter simmered patiently for 24 hours for velvet texture.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'se-5',
        name: 'Subz Dum Biryani & Burani Raita',
        course: 'Royal Dum',
        dietary: 'Veg',
        chefNote: 'Purdah dough sealed with saffron steam',
        description: 'Aged long-grain basmati layered with tender baby vegetables, kewra, saffron milk, and served with garlic burani raita.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'se-6',
        name: 'Shahi Tukda with Saffron Rabri',
        course: 'Royal Dessert',
        dietary: 'Chef Signature',
        chefNote: 'Ghee-toasted brioche in thickened pistachio cream',
        description: 'Crisp golden brioche slices drenched in aromatic saffron-cardamom rabri and topped with crushed Iranian pistachios.',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'royal-gold-banquet',
    name: 'Royal Gold Banquet',
    kicker: 'Signature Grand Weddings & Galas',
    price: '₹2,100',
    unit: 'per guest',
    minGuests: '150 - 500+ guests',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    description: 'Our most celebrated culinary orchestration. Featuring theatrical live counters, royal Awadhi dum preparations, and global fusion courses.',
    inclusions: [
      '7 Premium Canapés & Artisan Finger Bites',
      '4 Live Culinary Theatres (Sushi, Wood-Fired, Dim Sum, Dum)',
      '10 Royal Signature Main Dishes (Veg & Non-Veg)',
      'Dum Biryani & Saffron Pilaf Tasting Flights',
      'Gourmet Patisserie & Liquid Nitrogen Kulfi Bar',
      'Dedicated Uniformed White-Glove Butler Service',
      'Executive Chef On-Site Menu Walkthrough'
    ],
    dishes: [
      {
        id: 'rg-1',
        name: 'Truffle Galouti on Sheermal',
        course: 'Canapé',
        dietary: 'Chef Signature',
        chefNote: '160-spice Awadhi recipe with black truffle aroma',
        description: 'Silken minced patties that dissolve instantly on the tongue, served on warm mini saffron sheermal with coriander emulsion.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rg-2',
        name: 'Bhatti Ka Tiger Prawns',
        course: 'Live Theatre',
        dietary: 'Non-Veg',
        chefNote: 'Jumbo coastal prawns seared over volcanic coals',
        description: 'Plump jumbo bay prawns tossed with crushed coriander, pomegranate molasses, Kashmiri chili, and fired on live skewers.',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rg-3',
        name: 'Hand-Pleated Truffle Dim Sum',
        course: 'Live Counter',
        dietary: 'Veg',
        chefNote: 'Translucent crystal skins with shiitake and edamame',
        description: 'Artisan steamed dumplings filled with water chestnuts and wild mushrooms, drizzled with roasted chili garlic oil.',
        image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rg-4',
        name: 'Awadhi Dum Gosht Biryani',
        course: 'Main Course',
        dietary: 'Chef Signature',
        chefNote: 'Slow-cooked in dough-sealed bronze deghs',
        description: 'Prime highland lamb cuts cooked with caramelized shallots, saffron, and aged basmati rice for royal fragrance.',
        image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rg-5',
        name: 'Paneer Kundan Qaliyan',
        course: 'Main Course',
        dietary: 'Veg',
        chefNote: 'Golden saffron gravy from the royal court of Rampur',
        description: 'Pressed cottage cheese medallions poached in velvety almond cream gravy with aromatic saffron threads and gold vark.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'rg-6',
        name: 'Liquid Nitrogen Kulfi Dust',
        course: 'Live Dessert',
        dietary: 'Chef Signature',
        chefNote: 'Flash-frozen live theater with Iranian pistachios',
        description: 'Rich condensed saffron cream flash-frozen before guests, served with rose caviar, falooda pearls, and toasted nuts.',
        image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'imperial-grand-gala',
    name: 'Imperial Grand Gala',
    kicker: 'Presidential Summits & Destination Weddings',
    price: '₹3,400',
    unit: 'per guest',
    minGuests: '300 - 1,500+ guests',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle of fine banquet dining. Bespoke silver-domed service, exotic global imports, truffles, caviar stations, and custom menu choreography.',
    inclusions: [
      'Unlimited Bespoke Hors d\'oeuvres & Caviar Service',
      '6 International Live Theatres by Master Guest Chefs',
      'Complete Multi-Cuisine Panorama (Pan-Asian, Mediterranean, Royal Indian)',
      'Artisanal Cheese & Charcuterie Tasting Room',
      'Grand Dessert Pavilion with 12 French & Heritage Delights',
      'Custom Ice Sculptures & Themed Tableware Curation',
      'Full Hospitality Operations & VIP Concierge Liaison'
    ],
    dishes: [
      {
        id: 'ig-1',
        name: 'Beluga Caviar & Salmon Blinis',
        course: 'Canapé',
        dietary: 'Chef Signature',
        chefNote: 'Wild Imperial Beluga caviar and Norwegian salmon',
        description: 'Warm buckwheat blinis topped with oak-smoked salmon rosettes, Imperial caviar pearls, and fresh chive crème fraîche.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ig-2',
        name: '24K Gold Lamb Chops',
        course: 'Live Theatre',
        dietary: 'Non-Veg',
        chefNote: 'French-trimmed racks finished with 24K edible gold',
        description: 'Tender New Zealand lamb chops seared to perfection with fresh rosemary jus and enveloped in pure gold leaf.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ig-3',
        name: 'Wild Morel & Truffle Risotto',
        course: 'Live Theatre',
        dietary: 'Veg',
        chefNote: 'Tossed live in a 24-month Parmigiano wheel',
        description: 'Carnaroli risotto infused with Himalayan morels, fresh thyme, and finished with shaved black winter truffles.',
        image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ig-4',
        name: 'Raan-e-Sikandari Carvery',
        course: 'Main Course',
        dietary: 'Chef Signature',
        chefNote: '14-hour braised baby lamb leg carved on-site',
        description: 'Whole leg of lamb slow-roasted with royal spices and rum jus, hand-carved with spiced baby potatoes.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ig-5',
        name: 'Lobster Thermidor Fondant',
        course: 'Main Course',
        dietary: 'Non-Veg',
        chefNote: 'Fresh coastal lobster gratinated with cave Gruyère',
        description: 'Tender lobster medallions simmered with wild mushrooms and Cognac velouté, baked under golden Gruyère crust.',
        image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'ig-6',
        name: 'Valrhona Gold Opera Gateau',
        course: 'Royal Dessert',
        dietary: 'Chef Signature',
        chefNote: 'Seven layers of almond Joconde and dark ganache',
        description: 'Decadent French almond sponge soaked in coffee liqueur, layered with French chocolate ganache and gilded in edible gold.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export const galleryCategories = [
  { id: 'all', label: 'All Showcases' },
  { id: 'weddings', label: 'Royal Weddings' },
  { id: 'culinary', label: 'Culinary Art' },
  { id: 'counters', label: 'Live Theatres' },
  { id: 'corporate', label: 'Executive Galas' }
];

export const galleryItems = [
  {
    id: 1,
    title: 'Imperial Banquet Setup',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    caption: 'Crystal chandeliers and candle-lit floral banqueting for 800 guests.'
  },
  {
    id: 2,
    title: 'Sous-Vide Salmon with Saffron Glaze',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=80',
    caption: 'Delicate Atlantic salmon garnished with edible flowers and saffron jus.'
  },
  {
    id: 3,
    title: 'Theatrical Dim Sum & Wok Station',
    category: 'counters',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80',
    caption: 'Live bamboo steamer towers with hand-pleated truffle and edamame dumplings.'
  },
  {
    id: 4,
    title: 'Fortune 500 Annual Gala Reception',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
    caption: 'Precision catering and synchronized silver-cloche service for corporate leadership.'
  },
  {
    id: 5,
    title: 'Royal Awadhi Dum Biryani Deg',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    caption: 'Slow-cooked in sealed copper vessels with 32 secret heritage spices.'
  },
  {
    id: 6,
    title: 'French Macaron & Pastry Tower',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80',
    caption: 'Gold-leaf dusted pistachio, raspberry, and Belgian dark chocolate macarons.'
  },
  {
    id: 7,
    title: 'Sunset Garden Cocktail Reception',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
    caption: 'Open lawn canapé bar with craft botanical mocktails under fairy canopy.'
  },
  {
    id: 8,
    title: 'Live Artisan Wood-Fired Pizza',
    category: 'counters',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80',
    caption: 'Fermented 72-hour sourdough with San Marzano tomatoes and fior di latte.'
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
