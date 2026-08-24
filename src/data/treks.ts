import { Trek, Region, TrekReview, PackingItem } from '../types';

export const REGIONS: Region[] = [
  {
    id: 'everest',
    slug: 'everest-khumbu',
    name: 'Everest & Khumbu',
    country: 'Nepal',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'The crown jewel of Himalayan mountaineering, home to Mt. Everest (8,848m), ancient Tengboche monastery, and iconic Sherpa culture.',
    fullDescription: 'The Khumbu region in northeastern Nepal is revered by mountaineers worldwide. Trekking through deep valleys sculpted by glacial torrents, past mani stones etched with sacred Buddhist mantras, you reach the foot of the worlds highest peaks: Everest, Lhotse, Nuptse, and the iconic pyramid of Ama Dablam.',
    peakHighlight: 'Mt. Everest (8,848m) & Ama Dablam (6,812m)',
    highestPointMeters: 5545,
    trekCount: 3,
    bestMonths: 'Mar – May & Sep – Dec',
    highlights: ['Sherpa Capital Namche Bazaar', 'Tengboche Buddhist Monastery', 'Kala Patthar Sunrise Viewpoint', 'Gokyo Turquoise Glacial Lakes'],
    permitNotes: 'Sagarmatha National Park Permit & Pasang Lhamu Rural Municipality Card required.'
  },
  {
    id: 'annapurna',
    slug: 'annapurna-sanctuary',
    name: 'Annapurna & Sanctuary',
    country: 'Nepal',
    heroImage: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca0c33?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'A classic mosaic of subtropical rhododendron forests, Gurung stone villages, and the mighty Annapurna Massif.',
    fullDescription: 'The Annapurna Conservation Area is one of the most biodiverse high-mountain environments on earth. From lush subtropical river valleys to arid trans-Himalayan Tibetan-style plateaus across Thorong La Pass, Annapurna offers exceptional tea-house comfort paired with massive 8,000m peaks.',
    peakHighlight: 'Annapurna I (8,091m) & Machapuchare (6,993m)',
    highestPointMeters: 5416,
    trekCount: 2,
    bestMonths: 'Sep – Nov & Mar – May',
    highlights: ['Thorong La High Pass (5,416m)', 'Tilicho Lake - Worlds Highest Glacial Lake', 'Fishtail Peak Sunrise', 'Natural Tatopani Hot Springs'],
    permitNotes: 'Annapurna Conservation Area Permit (ACAP) & TIMS card required.'
  },
  {
    id: 'manaslu',
    slug: 'manaslu-tsum-valley',
    name: 'Manaslu & Tsum Valley',
    country: 'Nepal',
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'An unspoiled restricted wilderness trek circumnavigating the "Mountain of the Spirit" with Tibetan Buddhist enclaves.',
    fullDescription: 'Manaslu offers the true essence of authentic Himalayan exploration without the heavy crowds of Everest. The trail winds along the roaring Budhi Gandaki River gorge before climbing over the rugged Larkya La Pass, looking across into the hidden sacred valley of Tsum.',
    peakHighlight: 'Mt. Manaslu (8,163m, 8th highest)',
    highestPointMeters: 5106,
    trekCount: 1,
    bestMonths: 'Mar – May & Oct – Nov',
    highlights: ['Larkya La High Pass crossing', 'Sacred hidden valley of Tsum', 'Ancient Mu Gompa monastery', 'Authentic teahouse homestays'],
    permitNotes: 'Manaslu Restricted Area Permit (RAP), MCAP & ACAP mandatory; requires minimum 2 trekkers + certified guide.'
  },
  {
    id: 'langtang',
    slug: 'langtang-helambu',
    name: 'Langtang & Gosaikunda',
    country: 'Nepal',
    heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'The "Valley of Glaciers" nestled north of Kathmandu, rich with Tamang heritage, yak pastures, and sacred high lakes.',
    fullDescription: 'Rebuilt with resilience and warm hospitality, Langtang Valley sits right on the Tibetan border. The route combines scenic alpine meadows under Langtang Lirung with the high sacred alpine lakes of Gosaikunda, a revered pilgrimage destination for Hindus and Buddhists alike.',
    peakHighlight: 'Langtang Lirung (7,227m) & Dorje Lakpa',
    highestPointMeters: 4610,
    trekCount: 1,
    bestMonths: 'Feb – May & Sep – Dec',
    highlights: ['Kyanjin Gompa artisan yak cheese bakery', 'Ascent of Kyanjin Ri / Tsergo Ri', 'Gosaikunda Holy Alpine Lakes', 'Tamang Heritage Trail'],
    permitNotes: 'Langtang National Park Permit & TIMS card required.'
  },
  {
    id: 'mustang',
    slug: 'upper-mustang',
    name: 'Upper Mustang',
    country: 'Nepal',
    heroImage: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'The fabled forbidden Kingdom of Lo — a mystical desert plateau of wind-carved red cliffs and 1,000-year-old sky caves.',
    fullDescription: 'Geographically and culturally a continuation of the Tibetan plateau, Upper Mustang was closed to foreigners until 1992. Today, walled capitals like Lo Manthang preserve ancient Tibetan Buddhist traditions, King palaces, and centuries-old painted frescoes tucked in dramatic amber canyon cliffs.',
    peakHighlight: 'Nilgiri, Tilicho Peak & Dhaulagiri Range',
    highestPointMeters: 3820,
    trekCount: 1,
    bestMonths: 'May – Nov (Monsoon-free rainshadow region)',
    highlights: ['Walled Capital of Lo Manthang', 'Centuries-old Sky Caves of Chhoser', 'Red Cliff Gorges of Dhakmar', 'Summer Tiji Festival ceremonies'],
    permitNotes: 'Upper Mustang Restricted Area Permit ($500 for 10 days) + ACAP required.'
  },
  {
    id: 'bhutan-tibet',
    slug: 'bhutan-himalaya',
    name: 'Bhutan & Trans-Himalaya',
    country: 'Bhutan',
    heroImage: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1400&q=80',
    shortDescription: 'The serene Land of the Thunder Dragon, home to untouched virgin peaks, Taktsang Tiger’s Nest, and deep dzong valleys.',
    fullDescription: 'High-altitude trekking in Bhutan provides an extraordinary glimpse into a nation governed by Gross National Happiness and rigorous environmental conservation. All trekking routes cross pristine wilderness where mountains remain sacred and unclimbed.',
    peakHighlight: 'Gangkhar Puensum (7,570m, highest unclimbed peak)',
    highestPointMeters: 5320,
    trekCount: 1,
    bestMonths: 'Sep – Nov & Mar – May',
    highlights: ['Taktsang (Tigers Nest) cliffside monastery', 'Cross high Bhutanese mountain passes', 'Pristine virgin pine forests', 'Paro and Punakha Dzongs'],
    permitNotes: 'Bhutan Tourist Visa & Sustainable Development Fee (SDF) included in package.'
  }
];

export const TREKS: Trek[] = [
  {
    id: 'ebc-gokyo-chola',
    slug: 'everest-base-camp-gokyo-chola-pass',
    name: 'Everest Base Camp & Gokyo Lakes via Cho La Pass',
    tagline: 'The ultimate Khumbu grand circuit across turquoise glacial lakes and Everest base',
    regionId: 'everest',
    regionName: 'Everest & Khumbu',
    country: 'Nepal',
    difficulty: 'Challenging',
    durationDays: 16,
    maxAltitudeMeters: 5545,
    bestSeasons: ['Spring (Mar-May)', 'Autumn (Sep-Nov)'],
    priceUSD: 1650,
    originalPriceUSD: 1890,
    rating: 4.96,
    reviewCount: 142,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'This flagship 16-day expedition combines the best of the Khumbu region into one breathtaking loop. Rather than trekking up and back on the crowded main trail, we divert through the sacred Gokyo Valley, climb Gokyo Ri for unobstructed vistas of four 8,000m giants (Everest, Lhotse, Makalu, and Cho Oyu), traverse the glaciated Cho La Pass (5,420m), and reach Everest Base Camp and the iconic Kala Patthar sunrise ridge.',
    highlights: [
      'Summit Kala Patthar (5,545m) for the closest panoramic sunrise over Mount Everest',
      'Stand at the iconic Everest Base Camp (5,364m) alongside the Khumbu Icefall',
      'Gaze upon the five sapphire glacial lakes of the Gokyo Valley',
      'Traverse the technical glaciated Cho La Pass (5,420m)',
      'Explore Namche Bazaar and Tengboche Monastery with Lama blessings'
    ],
    included: [
      'All airport transfers in private vehicle (Kathmandu)',
      'Round-trip domestic flights: Kathmandu / Ramechhap to Lukla (both ways)',
      '15 nights twin-share tea house lodge accommodation with heated dining halls',
      'All 3 daily meals (Breakfast, Lunch, Dinner) + fresh fruit platters',
      'Licensed UIAGM/NNMGA Certified Lead Sherpa Guide + Assistant Guides (1:4 ratio)',
      'Experienced Porters (1 porter per 2 trekkers, max 20kg weight limit)',
      'Sagarmatha National Park Entry Permit & Khumbu Local Municipality Card',
      'Comprehensive high-altitude first aid kit, pulse oximeter & Gamow bag access',
      'Himalayan Trail Co. branded high-performance duffle bag & sleeping bag liner',
      'Garmin inReach 24/7 Satellite Emergency SOS Tracking'
    ],
    excluded: [
      'International airfares to/from Kathmandu',
      'Nepal entry visa fees ($50 for 30 days)',
      'Travel and high-altitude emergency medical evacuation insurance (mandatory)',
      'Personal gear rentals (down jackets, sleeping bags available on checkout)',
      'Hot showers, Wi-Fi, and electronic device charging fees at high teahouses',
      'Tips for guides and porters (recommended $100-$150 total)'
    ],
    routeSummary: {
      startPoint: 'Lukla (2,840m)',
      endPoint: 'Lukla (2,840m)',
      accommodation: 'Comfortable Himalayan Teahouse Lodges',
      meals: 'Full Board (B, L, D included daily)',
      transportation: 'Domestic Twin Otter Flight to Lukla',
      permitRequired: ['Sagarmatha National Park Permit', 'Khumbu Pasang Lhamu Card']
    },
    itinerary: [
      {
        day: 1,
        title: 'Scenic Flight to Lukla & Trek to Phakding',
        description: 'Early morning flight through mountain passes to the airstrip of Tenzing-Hillary Airport in Lukla. Meet your porter team and begin an easy downhill walk along the Dudh Koshi river valley.',
        elevationGain: '+50m / -350m',
        sleepAltitudeMeters: 2610,
        distanceKm: 8,
        walkingHours: '3.5 - 4 hrs',
        highlights: ['Tenzing-Hillary Lukla airstrip landing', 'Suspension bridges across Dudh Koshi river']
      },
      {
        day: 2,
        title: 'Trek along Dudh Koshi to Namche Bazaar',
        description: 'Cross the iconic Hillary Suspension bridge draped in prayer flags and make the steep pine forest climb up to the bustling Sherpa capital of Namche Bazaar.',
        elevationGain: '+830m',
        sleepAltitudeMeters: 3440,
        distanceKm: 11,
        walkingHours: '5 - 6 hrs',
        highlights: ['First glimpse of Mt. Everest at Top Danda', 'Hillary Suspension Bridge crossing']
      },
      {
        day: 3,
        title: 'Acclimatization Day in Namche Bazaar (3,440m)',
        description: 'Hike to the Everest View Hotel (3,880m) for panoramic vistas of Everest and Ama Dablam. Visit the Sherpa Culture Museum and Hillary Memorial.',
        elevationGain: '+440m (Active Acclimatization)',
        sleepAltitudeMeters: 3440,
        distanceKm: 6,
        walkingHours: '4 hrs',
        highlights: ['Panoramic Ama Dablam viewpoint', 'Sherpa Photo Gallery and Museum']
      },
      {
        day: 4,
        title: 'Trek to Dole via Mong La Pass',
        description: 'Leave the crowded main EBC trail, climbing up to Mong La ridge for dramatic views of Mt. Ama Dablam before descending into rhododendron woods to Dole.',
        elevationGain: '+670m',
        sleepAltitudeMeters: 4110,
        distanceKm: 12,
        walkingHours: '5 - 6 hrs',
        highlights: ['Mong La pass panoramic ridge', 'Waterfalls along the Dudh Koshi gorge']
      },
      {
        day: 5,
        title: 'Trek through Yak Pastures to Machhermo',
        description: 'Ascend gently through scenic yak grazing pastures and alpine scrub with magnificent views of Cho Oyu (8,188m) looming on the Tibetan horizon.',
        elevationGain: '+360m',
        sleepAltitudeMeters: 4470,
        distanceKm: 7,
        walkingHours: '4 - 5 hrs',
        highlights: ['Sightings of Himalayan monal pheasants', 'High-altitude rescue station briefing']
      },
      {
        day: 6,
        title: 'Trek to Gokyo & First Glacial Lakes',
        description: 'Pass the first and second emerald Gokyo Lakes before arriving at the settlement of Gokyo right on the shores of Dudh Pokhari (the third sacred lake).',
        elevationGain: '+320m',
        sleepAltitudeMeters: 4790,
        distanceKm: 7,
        walkingHours: '4 hrs',
        highlights: ['Ngozumpa Glacier lateral moraine', 'Turquoise waters of Gokyo Lakes']
      },
      {
        day: 7,
        title: 'Summit Gokyo Ri (5,357m) & Hike to Dragnag',
        description: 'Pre-dawn climb up Gokyo Ri for one of the greatest mountain vistas on Earth: Everest, Lhotse, Makalu, and Cho Oyu. Afternoon gentle walk across Ngozumpa glacier to Dragnag.',
        elevationGain: '+567m / -567m',
        sleepAltitudeMeters: 4700,
        distanceKm: 8,
        walkingHours: '5 - 6 hrs',
        highlights: ['4 of the worlds 14 eight-thousanders in one frame', 'Ngozumpa glacier crossing']
      },
      {
        day: 8,
        title: 'Cross Cho La Pass (5,420m) to Dzongla',
        description: 'The crux day! Early morning ascent up steep scree and across a glaciated ice shelf to the top of Cho La Pass. Celebrate at the prayer-flag covered crest and descend to Dzongla.',
        elevationGain: '+720m / -590m',
        sleepAltitudeMeters: 4830,
        distanceKm: 9,
        walkingHours: '7 - 8 hrs',
        highlights: ['Glacier crossing with microspikes', 'Dramatic Cholatse and Taboche sheer north faces']
      },
      {
        day: 9,
        title: 'Trek to Lobuche along Khumbu Glacier',
        description: 'An easy scenic traverse linking back into the main trail at Lobuche, passing memorials to fallen mountaineers on the ridge above Dughla.',
        elevationGain: '+90m',
        sleepAltitudeMeters: 4920,
        distanceKm: 7,
        walkingHours: '3.5 - 4 hrs',
        highlights: ['Expedition climber memorial stones', 'Khumbu glacier terminus']
      },
      {
        day: 10,
        title: 'Trek to Gorak Shep & Everest Base Camp (5,364m)',
        description: 'Push along the rocky lateral moraine to Gorak Shep, drop heavy bags, and continue all the way to Everest Base Camp right beneath the iconic Khumbu Icefall.',
        elevationGain: '+444m',
        sleepAltitudeMeters: 5164,
        distanceKm: 13,
        walkingHours: '7 - 8 hrs',
        highlights: ['Standing at Everest Base Camp', 'Seracs and ice towers of the Khumbu Icefall']
      },
      {
        day: 11,
        title: 'Kala Patthar Sunrise (5,545m) & Descend to Pheriche',
        description: 'Climb Kala Patthar in darkness to watch golden morning sun strike Everest summit and Nuptse face. Descend down to the comfort of Pheriche.',
        elevationGain: '+381m / -1,245m',
        sleepAltitudeMeters: 4300,
        distanceKm: 14,
        walkingHours: '6 - 7 hrs',
        highlights: ['Everest South Col view from Kala Patthar', 'HRA Medical post in Pheriche']
      },
      {
        day: 12,
        title: 'Trek to Tengboche Monastery',
        description: 'Descend through rhododendron forests and crossing suspension bridges back to the grand Tengboche monastery courtyard.',
        elevationGain: '+200m / -640m',
        sleepAltitudeMeters: 3860,
        distanceKm: 10,
        walkingHours: '4.5 hrs',
        highlights: ['Afternoon monk chanting ceremony at Tengboche', 'Unrivaled Ama Dablam backdrop']
      },
      {
        day: 13,
        title: 'Trek back to Namche Bazaar',
        description: 'Trek through Sanasa and along high cliff trails back to Namche Bazaar for celebratory Himalayan craft beer and hot showers.',
        elevationGain: '+150m / -570m',
        sleepAltitudeMeters: 3440,
        distanceKm: 10,
        walkingHours: '4 hrs',
        highlights: ['Namche bakery celebration', 'Souvenir shopping & handicraft stalls']
      },
      {
        day: 14,
        title: 'Trek down to Lukla via Hillary Bridge',
        description: 'Final long walking day retracing our steps along the Dudh Koshi river back to Lukla airstrip.',
        elevationGain: '+200m / -800m',
        sleepAltitudeMeters: 2840,
        distanceKm: 19,
        walkingHours: '6 - 7 hrs',
        highlights: ['Farewell dinner party with Sherpa guides and porters']
      },
      {
        day: 15,
        title: 'Morning Flight Lukla to Kathmandu',
        description: 'Board the morning Twin Otter flight back to Kathmandu. Private transfer to your hotel and evening celebratory Nepali dinner with cultural dances.',
        sleepAltitudeMeters: 1350,
        walkingHours: 'Flight 35 min',
        highlights: ['Aerial mountain view out plane window', 'Traditional Thali dinner in Thamel']
      },
      {
        day: 16,
        title: 'Kathmandu Departure / Onward Journey',
        description: 'Airport transfer for your international flight home or extension to Chitwan Jungle Safari.',
        sleepAltitudeMeters: 1350,
        walkingHours: 'Departure Day'
      }
    ],
    departures: [
      {
        id: 'ebc-2026-09-12',
        startDate: '2026-09-12',
        endDate: '2026-09-27',
        availableSlots: 6,
        maxSlots: 12,
        leadGuide: 'Pemba Dorje Sherpa (8x Everest Summiteer)',
        priceUSD: 1650,
        status: 'Guaranteed'
      },
      {
        id: 'ebc-2026-10-03',
        startDate: '2026-10-03',
        endDate: '2026-10-18',
        availableSlots: 3,
        maxSlots: 12,
        leadGuide: 'Mingma Tenzing Sherpa (UIAGM Mountain Guide)',
        priceUSD: 1650,
        status: 'Filling Fast'
      },
      {
        id: 'ebc-2026-10-24',
        startDate: '2026-10-24',
        endDate: '2026-11-08',
        availableSlots: 8,
        maxSlots: 12,
        leadGuide: 'Ang Maya Sherpa (Wilderness First Responder)',
        priceUSD: 1650,
        status: 'Guaranteed'
      },
      {
        id: 'ebc-2026-11-14',
        startDate: '2026-11-14',
        endDate: '2026-11-29',
        availableSlots: 10,
        maxSlots: 12,
        leadGuide: 'Dawa Gelje Sherpa',
        priceUSD: 1590,
        status: 'Guaranteed'
      }
    ],
    faqs: [
      {
        question: 'How physically demanding is the Cho La Pass crossing?',
        answer: 'Cho La Pass requires sturdy physical endurance and sure-footedness. You will be walking on loose scree and traversing a mild glacial ice field. We provide microspikes for safety, and our guide-to-client ratio ensures 1-on-1 assistance whenever needed.'
      },
      {
        question: 'What happens if I experience acute mountain sickness (AMS)?',
        answer: 'Our lead guides carry pulse oximeters and measure blood oxygen levels twice daily (morning and evening). If symptoms occur, the Golden Rule is immediate rest and descension. All guides carry emergency medication and our operations base coordinates helicopter evacuation with Garmin inReach in minutes.'
      },
      {
        question: 'What is the accommodation like on the trail?',
        answer: 'We select the finest heated dining teahouses in each village. Bedrooms are twin-share with comfortable foam mattresses and warm blankets (though we also recommend our -15°C sleeping bags). Higher up at Gorak Shep and Dzongla, amenities are simple but cozy and clean.'
      }
    ]
  },
  {
    id: 'annapurna-circuit-tilicho',
    slug: 'annapurna-circuit-tilicho-lake',
    name: 'Annapurna Circuit & High Tilicho Lake',
    tagline: 'Cross the world’s greatest mountain pass and explore the highest glacial lake',
    regionId: 'annapurna',
    regionName: 'Annapurna & Sanctuary',
    country: 'Nepal',
    difficulty: 'Challenging',
    durationDays: 17,
    maxAltitudeMeters: 5416,
    bestSeasons: ['Autumn (Sep-Nov)', 'Spring (Mar-May)'],
    priceUSD: 1420,
    originalPriceUSD: 1580,
    rating: 4.93,
    reviewCount: 98,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca0c33?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca0c33?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The Annapurna Circuit is legendary for its sweeping ecological contrast, starting in lush subtropical green paddy fields and climbing through alpine pine forests into the desert rainshadow of the Tibetan plateau. This complete version includes the high detour to Tilicho Lake (4,919m) and the iconic crossing of Thorong La Pass (5,416m).',
    highlights: [
      'Conquer Thorong La Pass (5,416m), the highest navigable trekking pass in the world',
      'Hike to the frozen alpine waters of Tilicho Lake (4,919m)',
      'Discover Tibetan-influenced Buddhist temples in Manang and Muktinath',
      'Panoramic sunrise over the Dhaulagiri and Annapurna Massifs',
      'Relax in the lakeside paradise of Pokhara after the trek'
    ],
    included: [
      'Private 4WD overland jeep transfer from Kathmandu to Besisahar/Chame',
      '15 nights teahouse accommodation + 1 night 4-star hotel in Pokhara',
      'All meals on trek (Breakfast, Lunch, Dinner)',
      'ACAP permit and TIMS registration cards',
      'Licensed UIAGM/NNMGA mountain guide & porters',
      'Domestic flight from Jomsom to Pokhara & tourist coach to Kathmandu',
      'First aid kit, oxygen saturation tracking, and satellite phone'
    ],
    excluded: [
      'International flights and Nepal Visa',
      'Personal travel insurance',
      'Hot springs entrance & personal beverages'
    ],
    routeSummary: {
      startPoint: 'Chame / Dharapani (2,160m)',
      endPoint: 'Jomsom / Pokhara (820m)',
      accommodation: 'Traditional Mountain Teahouse Lodges',
      meals: 'Full Board (B, L, D included daily)',
      transportation: 'Private 4WD Jeep + Domestic flight from Jomsom',
      permitRequired: ['Annapurna Conservation Area Permit (ACAP)', 'TIMS Card']
    },
    itinerary: [
      { day: 1, title: 'Drive Kathmandu to Besisahar & Chame (2,160m)', description: 'Scenic drive along Trishuli river valley entering Marsyangdi river canyon.', sleepAltitudeMeters: 2160, distanceKm: 190, walkingHours: '7 hrs drive' },
      { day: 2, title: 'Trek Chame to Pisang (3,200m)', description: 'Enter the pine forests with views of the sheer curved rock face of Paungda Danda.', sleepAltitudeMeters: 3200, distanceKm: 14, walkingHours: '5 hrs' },
      { day: 3, title: 'Upper Pisang to Manang via Ghyaru', description: 'Spectacular high trail with close-up panoramas of Annapurna II and IV.', sleepAltitudeMeters: 3540, distanceKm: 16, walkingHours: '6.5 hrs' },
      { day: 4, title: 'Acclimatization Day in Manang (3,540m)', description: 'Explore Braga Gompa, visit Gangapurna glacier lake, and attend the HRA medical talk.', sleepAltitudeMeters: 3540, distanceKm: 5, walkingHours: '3.5 hrs' },
      { day: 5, title: 'Trek Manang to Siri Kharka (4,060m)', description: 'Branch off the main trail towards the dramatic canyons leading to Tilicho.', sleepAltitudeMeters: 4060, distanceKm: 9, walkingHours: '4.5 hrs' },
      { day: 6, title: 'Siri Kharka to Tilicho Base Camp (4,150m)', description: 'Walk through dynamic scree fields beneath towering shale cliffs.', sleepAltitudeMeters: 4150, distanceKm: 7, walkingHours: '4 hrs' },
      { day: 7, title: 'Excursion to Tilicho Lake (4,919m) & return to Siri Kharka', description: 'Early ascent to the mesmerizing turquoise waters of Tilicho Lake under the Great Barrier.', sleepAltitudeMeters: 4060, distanceKm: 14, walkingHours: '7.5 hrs' },
      { day: 8, title: 'Trek to Yak Kharka (4,050m)', description: 'Rejoin the classic circuit trail climbing above tree line into high pastures.', sleepAltitudeMeters: 4050, distanceKm: 10, walkingHours: '4.5 hrs' },
      { day: 9, title: 'Trek Yak Kharka to Thorong Phedi (4,450m)', description: 'Short ascent to the base of Thorong La pass with altitude rest.', sleepAltitudeMeters: 4450, distanceKm: 7, walkingHours: '3.5 hrs' },
      { day: 10, title: 'Cross Thorong La Pass (5,416m) to Muktinath (3,760m)', description: 'Start at 4:00 AM under starry skies to crest Thorong La at sunrise. Long descent to sacred Muktinath.', sleepAltitudeMeters: 3760, distanceKm: 16, walkingHours: '8 - 9 hrs' },
      { day: 11, title: 'Muktinath to Kagbeni & Jomsom (2,720m)', description: 'Walk down the windy Kali Gandaki gorge into the historic mud-brick citadel of Kagbeni.', sleepAltitudeMeters: 2720, distanceKm: 14, walkingHours: '5 hrs' },
      { day: 12, title: 'Flight Jomsom to Pokhara', description: 'Thrilling mountain flight between Annapurna and Dhaulagiri down to subtropical Pokhara.', sleepAltitudeMeters: 820, distanceKm: 25, walkingHours: 'Flight 20 min' },
      { day: 13, title: 'Rest & Exploration in Pokhara', description: 'Relax by Phewa Lake, visit the International Mountain Museum, and enjoy spa massages.', sleepAltitudeMeters: 820, walkingHours: 'Rest Day' },
      { day: 14, title: 'Return Drive/Flight to Kathmandu', description: 'Transfer back to Kathmandu for farewell dinner and shopping in Thamel.', sleepAltitudeMeters: 1350, distanceKm: 200, walkingHours: '6 hrs drive' }
    ],
    departures: [
      { id: 'ac-2026-09-20', startDate: '2026-09-20', endDate: '2026-10-06', availableSlots: 8, maxSlots: 12, leadGuide: 'Tenzing Norbu Sherpa', priceUSD: 1420, status: 'Guaranteed' },
      { id: 'ac-2026-10-10', startDate: '2026-10-10', endDate: '2026-10-26', availableSlots: 2, maxSlots: 12, leadGuide: 'Pemba Dorje Sherpa', priceUSD: 1420, status: 'Filling Fast' },
      { id: 'ac-2026-11-01', startDate: '2026-11-01', endDate: '2026-11-17', availableSlots: 11, maxSlots: 12, leadGuide: 'Lhakpa Nuru Sherpa', priceUSD: 1380, status: 'Guaranteed' }
    ],
    faqs: [
      { question: 'Is Tilicho Lake frozen in autumn?', answer: 'In October and November, Tilicho is usually open turquoise water with glaciers drifting. By late December to March, the lake surface freezes over into pure crystalline white ice.' },
      { question: 'Can beginners do the Annapurna Circuit?', answer: 'While Thorong La is high (5,416m), the gradual ascent along the Marsyangdi valley provides one of the best natural acclimatization profiles in the Himalayas. Strong aerobic conditioning is recommended.' }
    ]
  },
  {
    id: 'manaslu-tsum-circuit',
    slug: 'manaslu-circuit-tsum-valley',
    name: 'Manaslu Circuit & Sacred Tsum Valley',
    tagline: 'Off-the-beaten-path restricted wilderness encircling the 8th highest mountain',
    regionId: 'manaslu',
    regionName: 'Manaslu & Tsum Valley',
    country: 'Nepal',
    difficulty: 'Strenuous',
    durationDays: 18,
    maxAltitudeMeters: 5106,
    bestSeasons: ['Autumn (Oct-Nov)', 'Spring (Mar-May)'],
    priceUSD: 1590,
    originalPriceUSD: 1750,
    rating: 4.97,
    reviewCount: 64,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The Manaslu Circuit combined with the mystical Beyul (sacred hidden valley) of Tsum is Nepal’s premier authentic wilderness trek. As a strictly restricted area, it preserves intact Tibetan culture, centuries-old Buddhist monasteries like Mu Gompa, and dramatic cliffs along the roaring Budhi Gandaki gorge before reaching Larkya La Pass (5,106m).',
    highlights: [
      'Cross the challenging Larkya La Pass (5,106m) with views of Himlung and Annapurna II',
      'Explore the sacred non-violent hidden sanctuary of Tsum Valley',
      'Visit ancient Mu Gompa and Milarepa meditation caves',
      'Stay in authentic village homestays and community-run teahouses',
      'Pristine pine, bamboo, and rhododendron river gorges with hanging suspension bridges'
    ],
    included: [
      'Special Manaslu Restricted Area Permit (RAP), MCAP and ACAP permits',
      'Private 4x4 rugged overland transport Kathmandu to Machha Khola and return',
      '17 nights teahouse and monastery lodge accommodation',
      'All meals on trek prepared with locally grown organic ingredients',
      'Experienced licensed high-altitude guide & porters (1:2 ratio)',
      'Emergency satellite device & first aid kit'
    ],
    excluded: ['International airfare', 'Nepal visa fees', 'Personal gear & tips'],
    routeSummary: {
      startPoint: 'Machha Khola (900m)',
      endPoint: 'Dharapani / Besisahar (1,860m)',
      accommodation: 'Remote Teahouses & Gompa Lodges',
      meals: 'Full Board (B, L, D included daily)',
      transportation: 'Private 4WD Expedition Vehicle',
      permitRequired: ['Manaslu Restricted Permit', 'MCAP', 'ACAP', 'Tsum Valley Permit']
    },
    itinerary: [
      { day: 1, title: 'Overland Drive Kathmandu to Machha Khola (900m)', description: 'Drive along scenic river roads to the trailhead in the Budhi Gandaki canyon.', sleepAltitudeMeters: 900, distanceKm: 160, walkingHours: '7 hrs drive' },
      { day: 2, title: 'Trek to Jagat (1,340m)', description: 'Follow the river gorge crossing suspension bridges and hot springs at Tatopani.', sleepAltitudeMeters: 1340, distanceKm: 14, walkingHours: '6 hrs' },
      { day: 3, title: 'Trek Jagat to Lokpa (Entrance to Tsum Valley, 2,240m)', description: 'Enter the restricted Tsum Valley territory through dense pine forests.', sleepAltitudeMeters: 2240, distanceKm: 16, walkingHours: '6.5 hrs' },
      { day: 4, title: 'Trek Lokpa to Chumling (2,386m)', description: 'Climb into Lower Tsum with traditional stone architecture and Tibetan prayer walls.', sleepAltitudeMeters: 2386, distanceKm: 10, walkingHours: '4.5 hrs' },
      { day: 5, title: 'Trek Chumling to Chhule-Nile (3,360m)', description: 'Pass Milarepas cave where the Buddhist saint meditated in the 11th century.', sleepAltitudeMeters: 3360, distanceKm: 13, walkingHours: '6 hrs' },
      { day: 6, title: 'Excursion to Mu Gompa (3,700m) & return to Chhule', description: 'Visit the highest monastery in Tsum valley near the Tibetan border.', sleepAltitudeMeters: 3360, distanceKm: 9, walkingHours: '5 hrs' },
      { day: 7, title: 'Trek back to Deng (1,860m)', description: 'Descend out of Tsum Valley and rejoin the main Budhi Gandaki trail.', sleepAltitudeMeters: 1860, distanceKm: 17, walkingHours: '7 hrs' },
      { day: 8, title: 'Trek Deng to Namrung (2,630m)', description: 'Pass Mani walls and apple orchards with first views of Manaslu North.', sleepAltitudeMeters: 2630, distanceKm: 19, walkingHours: '6.5 hrs' },
      { day: 9, title: 'Trek Namrung to Samagaon (3,530m)', description: 'Grand entry into the Tibetan plateau valley at the foot of Mt. Manaslu.', sleepAltitudeMeters: 3530, distanceKm: 14, walkingHours: '5.5 hrs' },
      { day: 10, title: 'Acclimatization Day at Samagaon / Manaslu Base Camp (4,400m)', description: 'Hike to Birendra Tal glacial lake and Manaslu Base Camp.', sleepAltitudeMeters: 3530, distanceKm: 11, walkingHours: '5 hrs' },
      { day: 11, title: 'Trek Samagaon to Samdo (3,860m)', description: 'Short walk to the last Tibetan border refugee trading village.', sleepAltitudeMeters: 3860, distanceKm: 8, walkingHours: '3.5 hrs' },
      { day: 12, title: 'Trek Samdo to Dharamsala / Larkya Phedi (4,460m)', description: 'Climb to the high base camp preparing for the pass.', sleepAltitudeMeters: 4460, distanceKm: 7, walkingHours: '4 hrs' },
      { day: 13, title: 'Cross Larkya La Pass (5,106m) to Bimthang (3,720m)', description: 'Epic pre-dawn push crossing the vast frozen pass with views of Himlung Himal, Cheo Himal, and Annapurna II.', sleepAltitudeMeters: 3720, distanceKm: 16, walkingHours: '8 - 9 hrs' },
      { day: 14, title: 'Trek Bimthang to Tilije (2,300m)', description: 'Descend through enchanted rhododendron and pine forests along Dudh Khola.', sleepAltitudeMeters: 2300, distanceKm: 14, walkingHours: '5.5 hrs' },
      { day: 15, title: 'Trek to Dharapani & Drive to Besisahar', description: 'Final trail section and drive to Besisahar for celebration.', sleepAltitudeMeters: 760, distanceKm: 35, walkingHours: '4 hrs trek + 3 hrs drive' },
      { day: 16, title: 'Drive back to Kathmandu', description: 'Scenic drive back to Kathmandu hotel.', sleepAltitudeMeters: 1350, distanceKm: 175, walkingHours: '6 hrs drive' }
    ],
    departures: [
      { id: 'mc-2026-09-25', startDate: '2026-09-25', endDate: '2026-10-12', availableSlots: 6, maxSlots: 10, leadGuide: 'Mingma Dorje Sherpa', priceUSD: 1590, status: 'Guaranteed' },
      { id: 'mc-2026-10-15', startDate: '2026-10-15', endDate: '2026-11-01', availableSlots: 4, maxSlots: 10, leadGuide: 'Pemba Dorje Sherpa', priceUSD: 1590, status: 'Filling Fast' }
    ],
    faqs: [
      { question: 'Why is Manaslu considered a restricted area?', answer: 'Due to its proximity to the Tibet autonomous region and fragile ancient culture, the Nepal government requires special permits, a minimum group of 2 trekkers, and an accredited certified guide.' }
    ]
  },
  {
    id: 'langtang-gosaikunda-lakes',
    slug: 'langtang-valley-gosaikunda-lakes',
    name: 'Langtang Valley & Gosaikunda Holy Lakes',
    tagline: 'Lush rhododendron river valleys, artisan yak cheese, and alpine pilgrimage lakes',
    regionId: 'langtang',
    regionName: 'Langtang & Gosaikunda',
    country: 'Nepal',
    difficulty: 'Moderate',
    durationDays: 11,
    maxAltitudeMeters: 4610,
    bestSeasons: ['Spring (Mar-May)', 'Autumn (Sep-Dec)'],
    priceUSD: 980,
    originalPriceUSD: 1120,
    rating: 4.89,
    reviewCount: 76,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Located just north of the Kathmandu Valley, Langtang offers a fast escape into raw alpine grandeur. Combine the rebuilt mountain culture of Kyanjin Gompa beneath Langtang Lirung with a climb up to Laurebina Pass and the sacred high lakes of Gosaikunda (4,380m).',
    highlights: [
      'Summit Kyanjin Ri (4,773m) or Tsergo Ri (4,984m) for views into Tibet',
      'Visit Kyanjin Gompa monastery and traditional yak cheese factory',
      'Marvel at sacred Gosaikunda and Bhairav Kunda alpine lakes',
      'Cross the scenic Laurebina Pass (4,610m) with Ganesh Himal views',
      'Short travel distance from Kathmandu by private jeep'
    ],
    included: [
      'Private round-trip jeep transportation Kathmandu to Syabrubesi and Dhunche',
      '10 nights teahouse accommodation with warm dining rooms',
      'Full board meals (Breakfast, Lunch, Dinner daily)',
      'Langtang National Park Permit & TIMS cards',
      'Expert licensed guide and dedicated porters'
    ],
    excluded: ['Personal beverages', 'Tips', 'Travel insurance'],
    routeSummary: {
      startPoint: 'Syabrubesi (1,460m)',
      endPoint: 'Dhunche (1,960m)',
      accommodation: 'Tamang Teahouse Lodges',
      meals: 'Full Board (B, L, D included daily)',
      transportation: 'Private 4WD Jeep',
      permitRequired: ['Langtang National Park Permit', 'TIMS Card']
    },
    itinerary: [
      { day: 1, title: 'Drive Kathmandu to Syabrubesi (1,460m)', description: 'Drive north across Trishuli Bazar into the Langtang National Park foothills.', sleepAltitudeMeters: 1460, distanceKm: 125, walkingHours: '6 hrs drive' },
      { day: 2, title: 'Trek Syabrubesi to Lama Hotel (2,470m)', description: 'Walk through dense oak and rhododendron forest alongside the Langtang Khola.', sleepAltitudeMeters: 2470, distanceKm: 11, walkingHours: '5.5 hrs' },
      { day: 3, title: 'Trek Lama Hotel to Langtang Village (3,430m)', description: 'Valley opens up into alpine pastures with prayer wheels and mani walls.', sleepAltitudeMeters: 3430, distanceKm: 14, walkingHours: '5.5 hrs' },
      { day: 4, title: 'Trek to Kyanjin Gompa (3,870m)', description: 'Short scenic climb to Kyanjin monastery beneath towering Langtang Lirung ice walls.', sleepAltitudeMeters: 3870, distanceKm: 7, walkingHours: '3.5 hrs' },
      { day: 5, title: 'Climb Kyanjin Ri (4,773m) & Explore Valley', description: 'Panoramic morning peak ascent with 360-degree mountain amphitheater.', sleepAltitudeMeters: 3870, distanceKm: 8, walkingHours: '5 hrs' },
      { day: 6, title: 'Trek back to Rimche (2,450m)', description: 'Fast descent retracing our steps through lush forest.', sleepAltitudeMeters: 2450, distanceKm: 15, walkingHours: '5.5 hrs' },
      { day: 7, title: 'Trek Rimche to Thulo Syabru (2,250m)', description: 'Traverse along scenic ridges to the traditional Tamang village of Thulo Syabru.', sleepAltitudeMeters: 2250, distanceKm: 9, walkingHours: '4 hrs' },
      { day: 8, title: 'Trek to Shin Gompa / Chandan Bari (3,330m)', description: 'Climb through mossy hemlock forests with views of Ganesh Himal and cheese farm.', sleepAltitudeMeters: 3330, distanceKm: 7, walkingHours: '4 hrs' },
      { day: 9, title: 'Trek to Gosaikunda Holy Lakes (4,380m)', description: 'Cross Laurebina ridge and arrive at the sacred glacial waters of Gosaikunda.', sleepAltitudeMeters: 4380, distanceKm: 9, walkingHours: '5 hrs' },
      { day: 10, title: 'Descend Gosaikunda to Dhunche (1,960m)', description: 'Long beautiful downhill trail back to Dhunche town.', sleepAltitudeMeters: 1960, distanceKm: 16, walkingHours: '6 hrs' },
      { day: 11, title: 'Drive Dhunche to Kathmandu', description: 'Scenic afternoon drive back to Kathmandu.', sleepAltitudeMeters: 1350, distanceKm: 115, walkingHours: '5.5 hrs drive' }
    ],
    departures: [
      { id: 'lg-2026-09-15', startDate: '2026-09-15', endDate: '2026-09-25', availableSlots: 8, maxSlots: 12, leadGuide: 'Ang Maya Sherpa', priceUSD: 980, status: 'Guaranteed' },
      { id: 'lg-2026-10-10', startDate: '2026-10-10', endDate: '2026-10-20', availableSlots: 5, maxSlots: 12, leadGuide: 'Dawa Gelje Sherpa', priceUSD: 980, status: 'Filling Fast' }
    ],
    faqs: [
      { question: 'Is Langtang safe after the 2015 earthquake?', answer: 'Yes! Langtang has been completely rebuilt with stronger seismic-resilient stone and timber lodges, wider engineered trails, and thriving local communities eager to welcome travelers.' }
    ]
  },
  {
    id: 'upper-mustang-kingdom',
    slug: 'upper-mustang-forbidden-kingdom',
    name: 'Upper Mustang: The Hidden Kingdom of Lo',
    tagline: 'Venture into the mystical forbidden desert kingdom of ancient sky caves and red cliffs',
    regionId: 'mustang',
    regionName: 'Upper Mustang',
    country: 'Nepal',
    difficulty: 'Moderate',
    durationDays: 14,
    maxAltitudeMeters: 3820,
    bestSeasons: ['May – Nov (Monsoon-free rainshadow)'],
    priceUSD: 2100,
    originalPriceUSD: 2350,
    rating: 4.98,
    reviewCount: 52,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Upper Mustang is a living museum of ancient Tibetan civilization. Sheltered behind the Dhaulagiri and Annapurna massifs, it receives virtually zero monsoon rain in summer. Trek through dramatic wind-carved canyons and canyons of red and ochre cliffs to the walled capital of Lo Manthang.',
    highlights: [
      'Explore the ancient 15th-century walled capital city of Lo Manthang',
      'Visit prehistoric sky caves of Chhoser carved high in vertical canyon walls',
      'Trek during summer months without monsoon rain interference',
      'Intact Tibetan Buddhism with active monastic communities and King palaces'
    ],
    included: [
      'Special Mustang Restricted Permit ($500 USD per person included)',
      'All overland 4WD and domestic flights (Pokhara - Jomsom return)',
      '13 nights premium lodge accommodation',
      'Full board meals & private Sherpa guide/porter service'
    ],
    excluded: ['International airfare', 'Personal beverages', 'Tips'],
    routeSummary: {
      startPoint: 'Jomsom / Kagbeni (2,800m)',
      endPoint: 'Jomsom (2,720m)',
      accommodation: 'Tibetan Heritage Teahouses',
      meals: 'Full Board (B, L, D included daily)',
      transportation: 'Scenic Flight + Private 4WD Jeep',
      permitRequired: ['Upper Mustang Restricted Area Permit', 'ACAP']
    },
    itinerary: [
      { day: 1, title: 'Flight Pokhara to Jomsom & Trek to Kagbeni', description: 'Enter the desert gateway at Kagbeni checkpost.', sleepAltitudeMeters: 2800, distanceKm: 11, walkingHours: '3.5 hrs' },
      { day: 2, title: 'Trek Kagbeni to Chele (3,050m)', description: 'Enter restricted zone along the Kali Gandaki canyon.', sleepAltitudeMeters: 3050, distanceKm: 15, walkingHours: '5.5 hrs' },
      { day: 3, title: 'Trek Chele to Syangboche (3,800m)', description: 'Cross high passes with vistas of Nilgiri and Damodar Himal.', sleepAltitudeMeters: 3800, distanceKm: 14, walkingHours: '6 hrs' },
      { day: 4, title: 'Trek Syangboche to Ghami (3,520m)', description: 'Pass the longest sacred Mani wall in Mustang.', sleepAltitudeMeters: 3520, distanceKm: 12, walkingHours: '5 hrs' },
      { day: 5, title: 'Trek Ghami to Tsarang (3,560m)', description: 'Hike past red cliffs of Dhakmar to the ancient Tsarang Dzong.', sleepAltitudeMeters: 3560, distanceKm: 11, walkingHours: '4.5 hrs' },
      { day: 6, title: 'Trek Tsarang to Walled City of Lo Manthang (3,810m)', description: 'First view of the grand walled capital of Lo from the pass of Lo.', sleepAltitudeMeters: 3810, distanceKm: 13, walkingHours: '4.5 hrs' },
      { day: 7, title: 'Exploration of Lo Manthang & Sky Caves of Chhoser', description: 'Visit Jhampa Gompa, Thubchen Gompa, and multi-story sky caves.', sleepAltitudeMeters: 3810, distanceKm: 12, walkingHours: 'Full day explore' },
      { day: 8, title: 'Lo Manthang to Drakmar (3,820m)', description: 'Walk through Ghar Gompa, one of the oldest active monasteries in Nepal.', sleepAltitudeMeters: 3820, distanceKm: 16, walkingHours: '6.5 hrs' },
      { day: 9, title: 'Trek Drakmar to Shyangmochen', description: 'Descend through wind-carved canyon spires.', sleepAltitudeMeters: 3800, distanceKm: 14, walkingHours: '5.5 hrs' },
      { day: 10, title: 'Trek to Chhusang (2,980m)', description: 'Downhill trek back towards the Kali Gandaki floor.', sleepAltitudeMeters: 2980, distanceKm: 15, walkingHours: '5.5 hrs' },
      { day: 11, title: 'Trek Chhusang to Jomsom via Muktinath', description: 'Cross to Muktinath and celebrate in Jomsom.', sleepAltitudeMeters: 2720, distanceKm: 18, walkingHours: '6.5 hrs' },
      { day: 12, title: 'Flight Jomsom to Pokhara', description: 'Return flight to Pokhara.', sleepAltitudeMeters: 820, walkingHours: 'Flight 20 min' },
      { day: 13, title: 'Pokhara to Kathmandu', description: 'Travel back to Kathmandu.', sleepAltitudeMeters: 1350, walkingHours: 'Transfer' },
      { day: 14, title: 'Kathmandu Departure', description: 'Departure day.', sleepAltitudeMeters: 1350, walkingHours: 'Transfer' }
    ],
    departures: [
      { id: 'um-2026-06-10', startDate: '2026-06-10', endDate: '2026-06-23', availableSlots: 6, maxSlots: 10, leadGuide: 'Mingma Tenzing Sherpa', priceUSD: 2100, status: 'Guaranteed' },
      { id: 'um-2026-08-15', startDate: '2026-08-15', endDate: '2026-08-28', availableSlots: 8, maxSlots: 10, leadGuide: 'Tenzing Norbu Sherpa', priceUSD: 2100, status: 'Guaranteed' }
    ],
    faqs: [
      { question: 'Can I trek in Mustang during July and August monsoon?', answer: 'Yes! Upper Mustang lies entirely in the rain shadow of the Annapurna and Dhaulagiri ranges. While the rest of Nepal experiences monsoon rains, Mustang enjoys dry, sunny days with clear blue skies.' }
    ]
  },
  {
    id: 'mardi-himal-ridge',
    slug: 'mardi-himal-scenic-ridge',
    name: 'Mardi Himal High Ridge Trek',
    tagline: 'A hidden jewel short trek along high ridges right beneath Machapuchare (Fishtail)',
    regionId: 'annapurna',
    regionName: 'Annapurna & Sanctuary',
    country: 'Nepal',
    difficulty: 'Moderate',
    durationDays: 7,
    maxAltitudeMeters: 4500,
    bestSeasons: ['Spring (Mar-May)', 'Autumn (Sep-Dec)'],
    priceUSD: 690,
    originalPriceUSD: 790,
    rating: 4.91,
    reviewCount: 88,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca0c33?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Short on time but seeking high-altitude thrill? Mardi Himal is the perfect 7-day escape. Following a dramatic, razor-sharp ridge directly towards the sacred peak of Machapuchare, you stay in tranquil teahouses with unobstructed vistas of Annapurna South and Hiunchuli.',
    highlights: [
      'Reach Mardi Himal High Camp (3,580m) & Base Camp viewpoint (4,500m)',
      'Unsurpassed close-up view of sacred Machapuchare (Fishtail Peak)',
      'Trek through moss-covered fairy rhododendron forests',
      'Ideal for trekkers with limited holiday time'
    ],
    included: [
      'Round-trip transport Pokhara to Kande/Siding',
      '6 nights teahouse accommodation',
      'Full meals on trek (B, L, D)',
      'ACAP permit & TIMS card',
      'Guide and porter support'
    ],
    excluded: ['International travel', 'Tips', 'Pokhara hotel'],
    routeSummary: {
      startPoint: 'Kande / Phedi (1,770m)',
      endPoint: 'Siding / Pokhara (1,280m)',
      accommodation: 'Ridge Teahouse Lodges',
      meals: 'Full Board (B, L, D included daily)',
      transportation: 'Private Vehicle from Pokhara',
      permitRequired: ['ACAP', 'TIMS']
    },
    itinerary: [
      { day: 1, title: 'Pokhara to Kande & Trek to Forest Camp (2,550m)', description: 'Scenic drive to Kande and climb through Australian Camp to Forest Camp.', sleepAltitudeMeters: 2550, distanceKm: 11, walkingHours: '5 hrs' },
      { day: 2, title: 'Trek Forest Camp to Low Camp (2,970m)', description: 'Ascend through rhododendron woods with emerging views of Machapuchare.', sleepAltitudeMeters: 2970, distanceKm: 7, walkingHours: '4 hrs' },
      { day: 3, title: 'Trek Low Camp to High Camp (3,580m)', description: 'Emerge above tree line onto the open ridge overlooking Annapurna South.', sleepAltitudeMeters: 3580, distanceKm: 6, walkingHours: '4 hrs' },
      { day: 4, title: 'Sunrise Hike to Mardi Base Camp (4,500m) & Trek to Badal Danda', description: 'Dawn push along the narrow ridge to the base camp viewpoint. Descend to Badal Danda.', sleepAltitudeMeters: 3210, distanceKm: 12, walkingHours: '7 hrs' },
      { day: 5, title: 'Trek Badal Danda to Siding Village (1,750m)', description: 'Downhill walk into traditional Gurung village homestay.', sleepAltitudeMeters: 1750, distanceKm: 9, walkingHours: '4.5 hrs' },
      { day: 6, title: 'Trek to Lumre & Drive to Pokhara', description: 'Short walk to roadhead and private drive back to Pokhara.', sleepAltitudeMeters: 820, distanceKm: 6, walkingHours: '2 hrs trek + 2 hrs drive' },
      { day: 7, title: 'Pokhara Departure', description: 'End of expedition.', sleepAltitudeMeters: 820, walkingHours: 'Departure' }
    ],
    departures: [
      { id: 'mh-2026-10-05', startDate: '2026-10-05', endDate: '2026-10-11', availableSlots: 8, maxSlots: 12, leadGuide: 'Pemba Dorje Sherpa', priceUSD: 690, status: 'Guaranteed' },
      { id: 'mh-2026-11-02', startDate: '2026-11-02', endDate: '2026-11-08', availableSlots: 10, maxSlots: 12, leadGuide: 'Dawa Gelje Sherpa', priceUSD: 690, status: 'Guaranteed' }
    ],
    faqs: [
      { question: 'Is Mardi Himal suitable for first-time Himalayan trekkers?', answer: 'Yes! Its short duration and gradual ascent make it one of the safest and most rewarding introductory treks in Nepal.' }
    ]
  },
  {
    id: 'bhutan-snowman-trek',
    slug: 'bhutan-snowman-trek-expedition',
    name: 'Bhutan: The Legendary Snowman Trek',
    tagline: 'One of the most remote, pristine high-altitude mountain expeditions on Earth',
    regionId: 'bhutan-tibet',
    regionName: 'Bhutan & Trans-Himalaya',
    country: 'Bhutan',
    difficulty: 'Extreme',
    durationDays: 25,
    maxAltitudeMeters: 5320,
    bestSeasons: ['Oct – Nov', 'Apr – May'],
    priceUSD: 6200,
    originalPriceUSD: 6800,
    rating: 5.0,
    reviewCount: 28,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Regarded by mountaineering veterans as one of the hardest and most beautiful high-altitude treks in existence. Crossing eleven high Himalayan passes over 4,500m along the border of Bhutan and Tibet, you trek through isolated Lunana settlements beneath unclimbed virgin giants like Gangkhar Puensum.',
    highlights: [
      'Cross 11 high mountain passes across the remote Lunana wilderness',
      'Gaze upon Gangkhar Puensum (7,570m), the highest unclimbed mountain in the world',
      'Hike to cliffside Tigers Nest (Taktsang) Monastery in Paro',
      'Full expedition camp with yak caravans, private camp chef, and heated dining tents'
    ],
    included: [
      'Bhutan Government Visa & Daily Sustainable Development Fee ($100/day included)',
      'Full alpine camping equipment, dining tent, hot water bottles, and private cook',
      'Pack yaks and horse handlers for all expedition luggage',
      'Certified Bhutanese lead mountain guide + medical emergency satellite support'
    ],
    excluded: ['International flight to Paro', 'Personal gear & gratuities'],
    routeSummary: {
      startPoint: 'Paro / Gunitsawa (2,800m)',
      endPoint: 'Sephu / Thimphu (2,400m)',
      accommodation: 'Expedition Tents & Heritage Hotels in Paro/Thimphu',
      meals: 'Full Board (B, L, D prepared fresh by expedition chef)',
      transportation: 'Private Vehicle throughout Bhutan',
      permitRequired: ['Bhutan Tourist Visa', 'Special Lunana Expedition Permit']
    },
    itinerary: [
      { day: 1, title: 'Arrive Paro & Taktsang Monastery', description: 'Acclimatization hike to iconic Tigers Nest.', sleepAltitudeMeters: 2280, walkingHours: '5 hrs' },
      { day: 2, title: 'Trek to Shana & Soi Thangthangkha', description: 'Enter pristine pine wilderness following the Pa Chhu.', sleepAltitudeMeters: 3610, walkingHours: '6 hrs' },
      { day: 3, title: 'Trek to Jangothang (Jhomolhari Base Camp)', description: 'Spectacular views of Mt. Jhomolhari (7,326m).', sleepAltitudeMeters: 4080, walkingHours: '5 hrs' },
      { day: 4, title: 'Cross Nyele La Pass (4,700m) to Lingshi', description: 'High pass crossing with views into Tibet.', sleepAltitudeMeters: 4010, walkingHours: '7 hrs' },
      { day: 5, title: 'Cross Yeli La Pass (4,930m) to Shodu', description: 'Pass turquoise mountain tarns and glacial streams.', sleepAltitudeMeters: 4080, walkingHours: '7 hrs' },
      { day: 6, title: 'Push into Lunana Highlands', description: 'Remote high plateau expedition camping.', sleepAltitudeMeters: 4400, walkingHours: '6 hrs' }
    ],
    departures: [
      { id: 'bt-2026-10-01', startDate: '2026-10-01', endDate: '2026-10-25', availableSlots: 4, maxSlots: 8, leadGuide: 'Dorji Tshering (Certified Bhutan Expedition Leader)', priceUSD: 6200, status: 'Filling Fast' }
    ],
    faqs: [
      { question: 'Why is Bhutan trekking more expensive?', answer: 'The Royal Government of Bhutan enforces a high-value, low-impact tourism policy with a mandatory Sustainable Development Fee (SDF) to preserve its untouched wilderness and culture. Our price covers all government royalties, permits, chefs, and luxury camp infrastructure.' }
    ]
  }
];

export const REVIEWS: TrekReview[] = [
  {
    id: 'rev-1',
    author: 'Evelyn Vance',
    country: 'United Kingdom',
    date: 'April 2026',
    rating: 5,
    trekName: 'Everest Base Camp & Gokyo Lakes',
    comment: 'Crossing the Cho La pass was hands down the most exhilarating day of my life. Our lead guide Pemba was a fountain of mountain wisdom and kept our spirits sky-high even at 5,400 meters. The teahouses were warm, the dhal bhat was legendary, and having satellite safety gave my family complete peace of mind.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Markus Lindqvist',
    country: 'Sweden',
    date: 'November 2025',
    rating: 5,
    trekName: 'Annapurna Circuit & Tilicho Lake',
    comment: 'The detour to Tilicho Lake is unmissable. Standing beside that deep turquoise glacial lake nestled under towering snowy peaks felt surreal. The Thorong La crossing was physically demanding, but Himalayan Trail Co’s acclimatization plan worked like clockwork. 10/10.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Sarah Chen',
    country: 'Canada',
    date: 'October 2025',
    rating: 5,
    trekName: 'Manaslu Circuit & Tsum Valley',
    comment: 'If you dislike crowded trails, do Manaslu. The Tibetan cultural immersion in Tsum Valley, listening to the morning monk chants at Mu Gompa, and conquering Larkya La felt like real expedition exploration from the golden age of mountaineering.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'James Harrington',
    country: 'Australia',
    date: 'March 2026',
    rating: 5,
    trekName: 'Mardi Himal Ridge Trek',
    comment: 'I only had 9 days off work and thought I could never experience the Himalayas properly. Mardi Himal completely blew me away. Walking along that knife-edge ridge with Machapuchare towering right in front of your face was unforgettable.',
    verified: true
  }
];

export const PACKING_CHECKLIST: PackingItem[] = [
  { id: 'p1', name: 'Thermal base layer tops (Merino wool)', category: 'Clothing', essential: true, notes: '2x sets for cold days and sleeping' },
  { id: 'p2', name: 'Trekking trousers (Quick-dry / Convertible)', category: 'Clothing', essential: true, notes: '2x pairs' },
  { id: 'p3', name: 'Down jacket (-15°C to -20°C rated)', category: 'Clothing', essential: true, notes: 'Available for rental upon checkout' },
  { id: 'p4', name: 'Waterproof / Windproof Gore-Tex shell jacket', category: 'Clothing', essential: true, notes: 'Breathable with pit-zips' },
  { id: 'p5', name: 'Fleece mid-layer jacket', category: 'Clothing', essential: true },
  { id: 'p6', name: 'Sturdy broken-in trekking boots with ankle support', category: 'Footwear', essential: true, notes: 'Must be broken in before arriving!' },
  { id: 'p7', name: 'Camp shoes / Teahouse sandals', category: 'Footwear', essential: false, notes: 'For evening relaxation in lodges' },
  { id: 'p8', name: 'Merino wool hiking socks (4-5 pairs)', category: 'Footwear', essential: true },
  { id: 'p9', name: 'Microspikes / Ice cleats', category: 'Alpine Gear', essential: true, notes: 'Required for Cho La / Thorong La / Larkya La' },
  { id: 'p10', name: 'Four-season sleeping bag (-15°C comfort rating)', category: 'Alpine Gear', essential: true, notes: 'Available for rental' },
  { id: 'p11', name: 'Telescopic trekking poles (Pair)', category: 'Alpine Gear', essential: true, notes: 'Saves 25% knee impact on descents' },
  { id: 'p12', name: 'Headlamp with spare batteries / USB charger', category: 'Alpine Gear', essential: true, notes: 'Crucial for pre-dawn summit starts' },
  { id: 'p13', name: 'UV400 Category 3/4 Glacier Sunglasses', category: 'Alpine Gear', essential: true, notes: 'Protects from snow blindness' },
  { id: 'p14', name: 'Altitude sickness meds (Diamox / Acetazolamide)', category: 'Health & Med', essential: true, notes: 'Consult doctor before travel' },
  { id: 'p15', name: 'Water purification tablets / Grayl filtration bottle', category: 'Health & Med', essential: true, notes: 'Avoid single-use plastics' },
  { id: 'p16', name: 'Blister treatment kit (Compeed / Leukotape)', category: 'Health & Med', essential: true },
  { id: 'p17', name: 'Broad-spectrum SPF 50+ Sunscreen & Lip Balm', category: 'Health & Med', essential: true },
  { id: 'p18', name: 'High capacity power bank (20,000 mAh)', category: 'Tech & Docs', essential: true, notes: 'Keeps phones/cameras charged in cold' },
  { id: 'p19', name: 'Passport (6+ months validity) & Insurance Card', category: 'Tech & Docs', essential: true }
];

export const SHERPA_TEAM = [
  {
    name: 'Pemba Dorje Sherpa',
    role: 'Lead Expedition Director & 8x Everest Summiteer',
    experience: '22 Years in High Himalayas',
    certifications: 'UIAGM / IFMGA International Mountain Guide, Wilderness First Responder',
    bio: 'Born in Pangboche in the shadow of Ama Dablam, Pemba has led over 60 successful expeditions across Everest, K2, and the Annapurna Sanctuary with an unblemished 100% safety record.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Mingma Tenzing Sherpa',
    role: 'Senior Technical Route Master',
    experience: '16 Years Alpine Leadership',
    certifications: 'NNMGA Certified Alpine Specialist, Avalanche Rescue Level 3',
    bio: 'Renowned for his calm demeanor and meticulous weather forecasting, Mingma specializes in high pass traverses (Cho La, Thorong La, Larkya La) and glaciology education.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Ang Maya Sherpa',
    role: 'Lead Cultural Guide & High Altitude Medic',
    experience: '12 Years Himalayan Guiding',
    certifications: 'Wilderness Advanced First Aid (WAFA), Eco-Tourism Master Trainer',
    bio: 'One of the pioneering female mountain leaders in Nepal, Ang Maya brings deep Buddhist cultural storytelling and compassionate client pacing to every expedition.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  }
];
