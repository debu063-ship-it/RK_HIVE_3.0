export const BRAND_INFO = {
  name: "RK HIVE",
  tagline: "Lounge, Dining & Automobile Centre • Asansol",
  description: "A trusted local landmark on Shakespeare Sarani, Asansol — bringing together Hive The Lounge RK (family dining, cafe & party celebrations) and Hive RK Enterprise Automobiles (pre-owned motorcycles, scooters & cars).",
  location: "Shakespeare Sarani, Jyotinagar, Near Blessed Hospital & Gitanjali Dhaba, Asansol, West Bengal – 713305",
  landmark: "Near Blessed Hospital & Gitanjali Dhaba (close to Galaxy Mall / Housing Colony More)",
  contact: {
    phone: "+91 98320 00000",
    phoneDisplay: "+91 98320 XXXXX [Click to Call Owner]",
    email: "contact@rkhiveasansol.com",
    whatsappNumber: "919832000000",
    whatsappLink: "https://wa.me/919832000000?text=Hello%20RK%20HIVE%20Asansol,%20I%20would%20like%20to%20inquire%20about...",
    hours: "Lounge: 11:30 AM – 11:00 PM • Automobiles: 10:00 AM – 8:30 PM",
  },
  ratings: {
    justdial: "4.1 / 5",
    justdialReviews: "450+ Verified Ratings",
    justdialUrl: "https://www.justdial.com/Asansol/Hive-The-Lounge-Rk",
    googleUrl: "https://maps.google.com/?q=Hive+The+Lounge+RK+Shakespeare+Sarani+Asansol",
  }
};

export const LOUNGE_DATA = {
  title: "Hive The Lounge RK 2.0",
  subtitle: "Family Dining, Mocktails & Celebration Lounge in Asansol",
  description: "A vibrant, comfortable neighborhood restaurant and lounge along Shakespeare Sarani. Serving rich Mughlai gravies, sizzling tandoori platters, Indo-Chinese favorites, and chilled mocktails in a cozy booth ambiance.",
  heroImage: "/images/lounge-dining.jpg",
  detailImage: "/images/lounge-food.jpg?v=2",
  ambianceImage: "/images/lounge-ambiance.jpg",
  pricingAverage: "Approx. ₹400 – ₹600 for two people",
  features: [
    {
      title: "Comfortable Booth Dining",
      tagline: "Spacious Sofa Seating for Groups",
      desc: "Warm ambient pendant lighting and partitioned booth seating calibrated for family lunches, friendly meetups, and couple dates."
    },
    {
      title: "Birthday & Party Celebrations",
      tagline: "Dedicated Event Space",
      desc: "Customizable birthday decor, group platters, cake-cutting zone, and lively party music arrangements for private get-togethers."
    },
    {
      title: "Multi-Cuisine Delights",
      tagline: "Chinese, Tandoor & Mughlai",
      desc: "Prepared fresh by experienced chefs, offering crowd favorites from crispy chili baby corn to rich butter chicken and momos."
    }
  ],
  menuHighlights: [
    {
      name: "Crispy Chilli Baby Corn / Paneer",
      category: "Indo-Chinese Starter",
      notes: "Wok-tossed with fresh bell peppers, spring onions, and spicy garlic sauce",
      price: "₹180 – ₹230"
    },
    {
      name: "Tandoori Chicken / Reshmi Kebab",
      category: "Clay Oven Speciality",
      notes: "Tender chicken marinated in hung curd, Kashmiri chilies, and aromatic roasted spices",
      price: "₹240 – ₹320"
    },
    {
      name: "Schezwan Hakka Noodles & Manchurian",
      category: "Main Course Combo",
      notes: "Fresh wok-fried noodles tossed with garden vegetables and spicy Manchurian gravy",
      price: "₹190 – ₹250"
    },
    {
      name: "Blue Lagoon & Virgin Mint Mojito",
      category: "Chilled Refreshers",
      notes: "Muddled fresh mint leaves, lime juice, sparkling soda, and crushed ice",
      price: "₹120 – ₹160"
    }
  ],
  salons: [
    {
      id: "dining-1",
      name: "Main Lounge & Booth Hall",
      capacity: "2 to 8 Guests per Booth",
      features: "Air-conditioned comfort, comfortable high-back sofas, ambient lighting & music"
    },
    {
      id: "dining-2",
      name: "Celebration & Party Enclave",
      capacity: "Groups of 15 to 40 Guests",
      features: "Pre-booked birthday decor, custom party food combos, dedicated serving staff"
    }
  ]
};

export const AUTO_DATA = {
  title: "Hive RK Enterprise Automobiles",
  subtitle: "Pre-Owned Two-Wheelers & Cars • Sales, Purchase & Exchange",
  description: "Located at the Hive RK Enterprise Automobiles building on Shakespeare Sarani. Asansol's trusted stop for buying, selling, and exchanging verified second-hand motorcycles, scooters, and reliable family cars.",
  heroImage: "/images/auto-bikes.jpg?v=2",
  carsImage: "/images/auto-cars.jpg?v=2",
  services: [
    {
      title: "Fair Value Bike & Car Exchange",
      desc: "Bring your current two-wheeler or car for instant transparent evaluation. Upgrade to a certified pre-owned model with minimal paperwork."
    },
    {
      title: "RTO Transfer & Documentation",
      desc: "Complete assistance with RC transfer, insurance renewal, pollution certificates, and hypothecation removal."
    },
    {
      title: "Verified Mechanical Check",
      desc: "Every pre-owned vehicle undergoes engine compression, electricals, braking, and chassis inspection prior to sale."
    }
  ],
  collection: [
    {
      id: "bike-1",
      model: "Royal Enfield Classic 350",
      year: "2021 – 2023 Models",
      status: "In Stock (Multiple Colors)",
      engine: "349cc J-Series Single Cylinder",
      power: "20.2 BHP @ 6,100 RPM",
      acceleration: "Mileage: ~35-38 km/l",
      weight: "Disc Brakes with Dual-Channel ABS",
      priceRange: "₹1,25,000 – ₹1,65,000",
      image: "/images/auto-bikes.jpg?v=2",
      badge: "Cruiser Favorite"
    },
    {
      id: "bike-2",
      model: "Yamaha R15 V3 / FZ-S FI",
      year: "2020 – 2022 Models",
      status: "Verified Pre-Owned",
      engine: "155cc VVA Liquid Cooled / 149cc FI",
      power: "18.4 BHP Sport Tuned",
      acceleration: "Mileage: ~40-45 km/l",
      weight: "Single Owner • Low KM Driven",
      priceRange: "₹85,000 – ₹1,30,000",
      image: "/images/auto-bikes.jpg?v=2",
      badge: "Sport Commuter"
    },
    {
      id: "car-1",
      model: "Maruti Suzuki Swift / WagonR",
      year: "2018 – 2022 Models",
      status: "Inspected & Certified",
      engine: "1.2L K-Series Petrol / CNG",
      power: "Chilled AC, Power Steering",
      acceleration: "Mileage: ~20-25 km/l",
      weight: "Complete Service History Available",
      priceRange: "₹2,80,000 – ₹4,80,000",
      image: "/images/auto-cars.jpg?v=2",
      badge: "Family Hatchback"
    }
  ]
};
