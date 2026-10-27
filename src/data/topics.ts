/**
 * English topic-page registry for pasarkhadijahkb.com (38 pages).
 * Every entry must satisfy one concrete visitor search intent.
 * Site facts (address, hours, rating) come from ../data/market (FACTS).
 */

export type TopicGroup = 'visit' | 'food' | 'culture' | 'itinerary';

export interface TopicSection {
  id: string;
  heading: string;
  body: string;
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  title: string;
  h1: string;
  description: string;
  intro: string;
  sections: TopicSection[];
  faq: { q: string; a: string }[];
  related: string[];
  updated: string;
}

export const GROUP_LABELS: Record<TopicGroup, string> = {
  visit: 'Visit & Practical Info',
  food: 'Food & Drink',
  culture: 'Culture & Heritage',
  itinerary: 'Itineraries',
};

export const GROUP_LABELS_MS: Record<TopicGroup, string> = {
  visit: 'Lawatan & Info Praktikal',
  food: 'Makanan & Minuman',
  culture: 'Budaya & Warisan',
  itinerary: 'Itinerari',
};

export const GROUP_LABELS_ZH: Record<TopicGroup, string> = {
  visit: '实用信息与游玩',
  food: '美食与饮品',
  culture: '文化与遗产',
  itinerary: '行程路线',
};

export const GROUP_ORDER: TopicGroup[] = ['visit', 'food', 'culture', 'itinerary'];

export const TOPICS: Topic[] = [
  // ===================== A. VISIT =====================
  {
    slug: 'opening-hours',
    group: 'visit',
    title: 'Pasar Siti Khadijah Opening Hours 2026 — When It Opens & Closes',
    h1: 'Pasar Siti Khadijah Opening Hours',
    description:
      'Daily opening and closing times for Siti Khadijah Market, how each floor differs, Friday prayer breaks and festive-season changes, with Tourism Kelantan and Google Maps references.',
    intro:
      'Siti Khadijah Market is a working public market, so hours shift by floor, by stall and by season. Use the guide below to set expectations, then confirm on the day.',
    sections: [
      {
        id: 'daily',
        heading: 'Typical daily hours',
        body: 'Google Maps, checked on 19 October 2026, lists the market at 07:30–17:30 daily, while Tourism Kelantan gives 07:00–18:00. Treat these as a reference range rather than a guarantee for every stall.',
      },
      {
        id: 'floors',
        heading: 'Hours differ by floor',
        body: 'The ground-floor fresh market and the upper food court often start earliest and wind down first. Textile, souvenir and handicraft stalls may open later and stay open into the late afternoon.',
      },
      {
        id: 'changes',
        heading: 'When hours change',
        body: 'Public holidays, Ramadan and trader breaks can alter individual stalls. There is no single verified uniform closing time, so check the specific trader you plan to visit before setting off.',
      },
    ],
    faq: [
      {
        q: 'What time does Siti Khadijah Market open?',
        a: 'Listings point to 07:00–07:30. The fresh market is busiest from around 08:00; arrive then for the fullest selection.',
      },
      {
        q: 'What time does the market close?',
        a: 'Listings suggest 17:30–18:00, but not every stall stays open that long. Plan purchases for the morning and early afternoon.',
      },
      {
        q: 'Is the market open every day?',
        a: 'Google Maps lists Monday to Sunday trading. Individual stalls may close on public holidays or during Ramadan; verify before a special trip.',
      },
    ],
    related: ['friday-hours', 'ramadan-hours', 'best-time-to-visit', 'floors-guide'],
    updated: '2026-10-19',
  },
  {
    slug: 'friday-hours',
    group: 'visit',
    title: 'Friday at Pasar Siti Khadijah — Prayer Breaks & What Stays Open',
    h1: 'Fridays at Siti Khadijah Market',
    description:
      'How Friday prayer (Zohor) affects stall trading at Siti Khadijah Market, what remains open around midday, and the best time to visit on a Friday.',
    intro:
      'Friday is the weekly congregational prayer day in Kelantan, and it shapes the rhythm of the market. Knowing the pattern helps you avoid arriving during the quiet window.',
    sections: [
      {
        id: 'prayer',
        heading: 'The midday prayer window',
        body: 'Many traders pause around the Zohor prayer, typically near 13:00–14:30. Some stalls close fully; others keep a family member minding the shop.',
      },
      {
        id: 'open',
        heading: 'What stays open',
        body: 'The ground-floor fresh market and cooked-food stalls tend to keep trading, while upper-floor textile and souvenir sellers are more likely to step away briefly.',
      },
      {
        id: 'tip',
        heading: 'Timing your Friday visit',
        body: 'Visit before late morning or after mid-afternoon to catch the fullest range of stalls. Mornings are calmer and cooler.',
      },
    ],
    faq: [
      { q: 'Is the market closed on Friday?', a: 'No. It trades on Friday, but expect a quieter midday spell around the prayer time.' },
      { q: 'What time is the Friday prayer break?', a: 'Roughly 13:00–14:30, though the exact window varies by trader and season.' },
      { q: 'Is Friday a good day to shop?', a: 'Yes, especially before late morning or after mid-afternoon. Avoid relying on the midday hour for specialist stalls.' },
    ],
    related: ['opening-hours', 'ramadan-hours', 'best-time-to-visit'],
    updated: '2026-10-19',
  },
  {
    slug: 'ramadan-hours',
    group: 'visit',
    title: 'Visiting Pasar Siti Khadijah During Ramadan & Festive Seasons',
    h1: 'Ramadan & Festive Seasons',
    description:
      'How Ramadan and public holidays change trading at Siti Khadijah Market, the pre-Eid shopping surge, and a reminder to confirm on the day.',
    intro:
      'During Ramadan and around Hari Raya, the market’s rhythm shifts. Daytime trade can be lighter, while evenings and the days before Eid grow busy with festive shopping.',
    sections: [
      {
        id: 'ramadan',
        heading: 'Ramadan daytime trade',
        body: 'Some stalls reduce daytime hours during Ramadan and trade more in the evening. The food court and fresh market remain the most active.',
      },
      {
        id: 'eid',
        heading: 'Pre-Eid rush',
        body: 'In the days before Hari Raya Aidilfitri the market fills with shoppers buying food, clothing and gifts. Expect crowds and limited parking.',
      },
      {
        id: 'verify',
        heading: 'Confirm before you go',
        body: 'Because festive hours are not uniform, check with the specific trader or the municipal notice boards on site before a long trip.',
      },
    ],
    faq: [
      { q: 'Is the market open during Ramadan?', a: 'Partly. Many stalls trade, often with reduced daytime hours and more evening activity.' },
      { q: 'When is it busiest before Eid?', a: 'The few days immediately before Hari Raya are the peak for festive shopping.' },
      { q: 'Should I avoid Ramadan for a visit?', a: 'No, but go in the evening or confirm stall hours if you need something specific.' },
    ],
    related: ['opening-hours', 'friday-hours', 'visitor-tips'],
    updated: '2026-10-19',
  },
  {
    slug: 'getting-there',
    group: 'visit',
    title: 'How to Get to Pasar Siti Khadijah — Taxi, Grab, Bus & Walking',
    h1: 'How to Get to the Market',
    description:
      'Ways to reach Siti Khadijah Market from Kota Bharu airport, the central station and Wakaf Bharu, plus walking directions and ride-hailing tips.',
    intro:
      'The market sits in the Kota Bharu city centre on Jalan Buluh Kubu, within walking distance of many heritage buildings. Here are the practical ways in.',
    sections: [
      {
        id: 'ride',
        heading: 'Ride-hailing and taxis',
        body: 'Ride apps such as Grab and local taxis serve the city centre. Set the destination to “Pasar Siti Khadijah, Jalan Buluh Kubu” and confirm the fare or metered rate before starting.',
      },
      {
        id: 'station',
        heading: 'From the station and Wakaf Bharu',
        body: 'Kota Bharu’s central bus station and the Wakaf Bharu railway area connect to other towns; from there a short ride or city bus brings you to the market.',
      },
      {
        id: 'walk',
        heading: 'Walking from the centre',
        body: 'If you are already near Independence Square, Masjid Muhammadi or the riverside, the market is an easy walk. Wear light clothing and bring water in the heat.',
      },
    ],
    faq: [
      { q: 'Is the market near the city centre?', a: 'Yes, it is in Bandar Kota Bharu, walkable from the main heritage sights.' },
      { q: 'Can I use Grab to the market?', a: 'Ride apps operate in Kota Bharu; set the market as the drop-off point.' },
      { q: 'Is it walkable from the mosque?', a: 'Masjid Muhammadi and the market are close enough to walk between on foot.' },
    ],
    related: ['parking', 'from-kota-bharu-airport', 'best-time-to-visit'],
    updated: '2026-10-19',
  },
  {
    slug: 'parking',
    group: 'visit',
    title: 'Parking Near Pasar Siti Khadijah — Where to Park in Kota Bharu',
    h1: 'Parking Near the Market',
    description:
      'Public and street parking around Siti Khadijah Market, why the closest bays fill early, and tips for parking a few streets away and walking in.',
    intro:
      'Driving into the Kota Bharu city centre means planning for parking. The bays nearest the market fill quickly at peak hours; a short walk often saves time.',
    sections: [
      {
        id: 'options',
        heading: 'Where to park',
        body: 'Municipal paid parking and roadside bays surround the city centre. Rates and availability follow local signage set by the municipal council (MPKB-BRI); confirm on site.',
      },
      {
        id: 'peak',
        heading: 'Beat the peak',
        body: 'Mornings and weekends are busiest. Arriving before 09:00 or parking a few streets from the market and walking in keeps things simple.',
      },
      {
        id: 'pay',
        heading: 'Paying for parking',
        body: 'Many bays use coupon or machine payment. Keep small change and read the signage; rules differ by road and time of day.',
      },
    ],
    faq: [
      { q: 'Is there parking at the market?', a: 'There is municipal and roadside parking nearby, but no large dedicated lot attached to the building.' },
      { q: 'Is parking free?', a: 'Most city-centre bays are paid during operating hours; check the signs.' },
      { q: 'Where should I park to avoid crowds?', a: 'A few streets away from the market and walk in, especially on weekends.' },
    ],
    related: ['getting-there', 'visitor-tips', 'from-kota-bharu-airport'],
    updated: '2026-10-19',
  },
  {
    slug: 'best-time-to-visit',
    group: 'visit',
    title: 'Best Time to Visit Pasar Siti Khadijah — Hour, Day & Season',
    h1: 'Best Time to Visit',
    description:
      'The best hour, day and season to visit Siti Khadijah Market, why mornings suit the fresh market, and how Kelantan’s wet season affects plans.',
    intro:
      'Timing changes what you see. Mornings favour the fresh market and cooler walking, while weekends are livelier but busier.',
    sections: [
      {
        id: 'hour',
        heading: 'Best hour of the day',
        body: 'Aim for 08:00–10:00. The fresh market is at its fullest, the upper floors are open, and the heat is gentler than midday.',
      },
      {
        id: 'day',
        heading: 'Best day of the week',
        body: 'Weekdays are calmer; weekends draw more shoppers. Fridays have a quieter midday prayer window (see the Friday guide).',
      },
      {
        id: 'season',
        heading: 'Best season',
        body: 'Kelantan’s drier months (roughly November to February) are most comfortable. The wet season (about May to October) still works because the market is covered and indoors.',
      },
    ],
    faq: [
      { q: 'What is the best time of day?', a: 'Around 08:00–10:00 for selection and cooler weather.' },
      { q: 'Is the market good in the rainy season?', a: 'Yes — it is a covered, multi-storey building, so rain rarely spoils a visit.' },
      { q: 'How long should I spend?', a: 'Allow one to two hours for the market itself, more with nearby museums.' },
    ],
    related: ['opening-hours', 'friday-hours', 'rainy-day', 'visitor-tips'],
    updated: '2026-10-19',
  },
  {
    slug: 'directions-from-kl',
    group: 'visit',
    title: 'Kota Bharu from Kuala Lumpur — Flight, Train & Drive to the Market',
    h1: 'Getting to Kota Bharu from Kuala Lumpur',
    description:
      'Options for travelling from Kuala Lumpur to Kota Bharu — flying to Sultan Ismail Petra Airport, train to Wakaf Bharu, or driving — and the last leg to the market.',
    intro:
      'Kota Bharu is reachable from Kuala Lumpur by air, rail and road. This guide covers the long-haul options and the final ride to the market.',
    sections: [
      {
        id: 'fly',
        heading: 'Flying',
        body: 'Sultan Ismail Petra Airport (KBR) near Kota Bharu is served by domestic flights from Kuala Lumpur. From the airport it is a short ride to the city centre and the market.',
      },
      {
        id: 'train',
        heading: 'Train via Wakaf Bharu',
        body: 'Keretapi Tanah Melayu (KTM) serves Wakaf Bharu near Kota Bharu. From the station, continue by taxi or ride-hailing to the market.',
      },
      {
        id: 'drive',
        heading: 'Driving',
        body: 'The drive from Kuala Lumpur is long (around five to six hours depending on stops). Plan rest breaks and note that the East Coast expressways feed toward Kelantan.',
      },
    ],
    faq: [
      { q: 'How far is Kota Bharu from Kuala Lumpur?', a: 'By road it is roughly a five-to-six-hour drive; flying is about an hour.' },
      { q: 'Which airport serves Kota Bharu?', a: 'Sultan Ismail Petra Airport (KBR), a short distance from the city centre.' },
      { q: 'Can I take a train?', a: 'Yes, KTM goes to Wakaf Bharu, then continue by road to the market.' },
    ],
    related: ['from-kota-bharu-airport', 'getting-there', 'weekend-itinerary'],
    updated: '2026-10-19',
  },
  {
    slug: 'entrance-fee',
    group: 'visit',
    title: 'Is Pasar Siti Khadijah Free? Entry, Shopping & What Costs Money',
    h1: 'Entry & What Costs Money',
    description:
      'Whether Siti Khadijah Market charges an entrance fee, what you pay for, and how pricing works for food and souvenirs at a public market.',
    intro:
      'Siti Khadijah Market is a public market, not a ticketed attraction. You generally pay only for what you buy.',
    sections: [
      {
        id: 'free',
        heading: 'No entry fee',
        body: 'Walking through the market and browsing normally costs nothing. Only food, goods and services you choose to buy come with a price.',
      },
      {
        id: 'pay',
        heading: 'What you pay for',
        body: 'Expect to pay for meals, fresh produce, textiles, handicrafts and souvenirs. Prices are usually set per stall; some are negotiable, especially for larger purchases.',
      },
      {
        id: 'cash',
        heading: 'Cash and payment',
        body: 'Small stalls often prefer cash. Some traders accept cashless payment, but carry small notes so you are not stuck at a stall that does not.',
      },
    ],
    faq: [
      { q: 'Is there an entrance fee?', a: 'Usually no — it is a public market you can enter and browse for free.' },
      { q: 'Do I need to pay to take photos?', a: 'No fee, but ask traders before photographing them or their goods out of respect.' },
      { q: 'Are prices fixed?', a: 'Many are set; bargaining is more common for souvenirs and bulk buys than for food.' },
    ],
    related: ['what-to-buy', 'visitor-tips', 'market-food-court'],
    updated: '2026-10-19',
  },
  {
    slug: 'accessibility',
    group: 'visit',
    title: 'Accessibility at Pasar Siti Khadijah — Lifts, Elderly & Strollers',
    h1: 'Accessibility & Family Comfort',
    description:
      'Practical accessibility notes for Siti Khadijah Market: lifts between floors, stroller and elderly tips, and wet-floor cautions at a busy market.',
    intro:
      'The market spans several floors, so plan movement with lifts and escalators where available. Conditions vary, so allow extra time.',
    sections: [
      {
        id: 'lifts',
        heading: 'Moving between floors',
        body: 'The building connects its floors with lifts and escalators, but availability and queue lengths change through the day. Confirm on site and let elderly or mobility-limited companions lead the pace.',
      },
      {
        id: 'stroller',
        heading: 'Strollers and young children',
        body: 'A sturdy stroller works on the wider walkways, though aisles get tight when busy. A baby carrier can be easier at peak hours.',
      },
      {
        id: 'floor',
        heading: 'Wet floors and footing',
        body: 'The fresh-market floor can be wet and slippery. Wear grippy shoes, watch step edges, and keep an eye on children near the produce section.',
      },
    ],
    faq: [
      { q: 'Are there lifts?', a: 'The market links floors with lifts and escalators, though availability varies; check on site.' },
      { q: 'Is it stroller friendly?', a: 'Mostly, but aisles are tight when busy; a carrier may be simpler at peak times.' },
      { q: 'Is it suitable for the elderly?', a: 'Yes, with lifts and a slower pace; avoid the midday crush on weekends.' },
    ],
    related: ['floors-guide', 'family-itinerary', 'visitor-tips'],
    updated: '2026-10-19',
  },
  {
    slug: 'floors-guide',
    group: 'visit',
    title: 'Pasar Siti Khadijah Floor Guide — What’s on Each Level',
    h1: 'Floor-by-Floor Guide',
    description:
      'A level-by-level guide to Siti Khadijah Market: fresh produce, food court, textiles and handicrafts, with notes on layout and facilities.',
    intro:
      'The market is best understood floor by floor. This guide maps the broad categories so you can plan which level to hit first.',
    sections: [
      {
        id: 'ground',
        heading: 'Lower floors — fresh market',
        body: 'The ground and lower trading levels hold fresh produce, herbs, spices, meat, fish and kitchen staples — the colourful heart of a working market.',
      },
      {
        id: 'food',
        heading: 'Food court level',
        body: 'A dedicated level serves cooked Kelantan food and snacks. It is the place to try nasi kerabu, laksam and traditional kuih at local prices.',
      },
      {
        id: 'upper',
        heading: 'Upper floors — textiles and crafts',
        body: 'Higher levels concentrate textiles, Muslim women’s wear, songket, batik and handicrafts. This is also where many women traders operate.',
      },
    ],
    faq: [
      { q: 'Which floor has food?', a: 'The market’s food court level serves cooked meals and snacks.' },
      { q: 'Where are the souvenirs?', a: 'Handicrafts, songket and batik are on the upper trading floors.' },
      { q: 'Is there a stall directory?', a: 'A verified tenant directory has not been published; follow floor signs and ask traders on site.' },
    ],
    related: ['what-to-buy', 'market-food-court', 'batik-songket', 'accessibility'],
    updated: '2026-10-19',
  },
  {
    slug: 'what-to-buy',
    group: 'visit',
    title: 'What to Buy at Pasar Siti Khadijah — Kelantan Souvenirs & Goods',
    h1: 'What to Buy',
    description:
      'A practical shopping list for Siti Khadijah Market: songket, batik, silverware, rattan, local snacks and what to check before you buy.',
    intro:
      'The upper floors are a souvenir hunter’s stop. Focus on distinctly Kelantan goods and confirm materials, sizes and prices before paying.',
    sections: [
      {
        id: 'textiles',
        heading: 'Textiles and wear',
        body: 'Look for songket (gold-and-silver thread weave), batik, telekung and Malay dress. Check the weave, weight and care before buying.',
      },
      {
        id: 'crafts',
        heading: 'Handicrafts and gifts',
        body: 'Silverware, rattan, woodwork and local products make portable gifts. Ask about authenticity and whether an item is handmade.',
      },
      {
        id: 'food',
        heading: 'Food gifts',
        body: 'Serunding (spiced dried meat or fish), packaged sweets and spices travel well. Confirm best-before dates and sealing for the trip home.',
      },
    ],
    faq: [
      { q: 'What is Kelantan known for?', a: 'Songket, batik and traditional kuih are the signature buys.' },
      { q: 'Can I bargain?', a: 'Some negotiation is normal for crafts and bulk buys; food prices are usually fixed.' },
      { q: 'What travels well as a gift?', a: 'Sealed snacks, serunding and small handicrafts are easiest to carry home.' },
    ],
    related: ['batik-songket', 'handicrafts', 'kelantan-kuih', 'entrance-fee'],
    updated: '2026-10-19',
  },
  {
    slug: 'visitor-tips',
    group: 'visit',
    title: 'Pasar Siti Khadijah Visitor Tips — 10 Things to Know Before You Go',
    h1: 'Visitor Tips',
    description:
      'Ten practical tips for visiting Siti Khadijah Market: dress, cash, bargaining etiquette, photography, safety and timing, with links to deeper guides.',
    intro:
      'A quick checklist before you go, drawn from the practical guides on this site. None of it is commercial advice — just how to move comfortably.',
    sections: [
      {
        id: 'prepare',
        heading: 'Before you leave',
        body: 'Carry small cash, wear light breathable clothing and grippy shoes, and aim for a morning arrival. Charge your phone for maps and photos.',
      },
      {
        id: 'onsite',
        heading: 'While you shop',
        body: 'Ask prices politely, give traders space, and confirm materials and sizes for crafts. Photograph people only after asking.',
      },
      {
        id: 'safety',
        heading: 'Comfort and safety',
        body: 'Watch wet floors, keep valuables close in crowds, and stay hydrated. The market is covered, so heat and rain are rarely a problem indoors.',
      },
    ],
    faq: [
      { q: 'What should I wear?', a: 'Light, modest clothing suits the market and nearby mosques; comfortable shoes help on wet floors.' },
      { q: 'Is it safe for tourists?', a: 'It is a busy public market; stay aware of belongings in crowds and you will be fine.' },
      { q: 'Anything I must not miss?', a: 'The food court and the upper-floor textiles are the most distinctive experiences.' },
    ],
    related: ['opening-hours', 'best-time-to-visit', 'parking', 'what-to-buy', 'floors-guide'],
    updated: '2026-10-19',
  },

  // ===================== B. FOOD =====================
  {
    slug: 'food-near-market',
    group: 'food',
    title: 'Food Near Pasar Siti Khadijah — Where Locals Eat in Kota Bharu',
    h1: 'Food Near the Market',
    description:
      'Where to eat around Siti Khadijah Market: the in-market food court plus nearby Kelantan eateries, grouped by rice dishes, noodles, snacks and drinks.',
    intro:
      'Hunger is part of the market experience. This guide covers the food court inside and the casual eating within walking distance, by category rather than by name.',
    sections: [
      {
        id: 'incourt',
        heading: 'Inside the food court',
        body: 'The market’s food level serves cooked Kelantan staples at local prices. Go early for the widest choice of fresh-cooked dishes.',
      },
      {
        id: 'around',
        heading: 'Within walking distance',
        body: 'The streets around the market hold small eateries and stall clusters. Look for rice, noodle and kuih specialists rather than chasing one famous address.',
      },
      {
        id: 'types',
        heading: 'What to look for',
        body: 'Prioritise nasi kerabu, nasi dagang, laksam, ayam percik and traditional kuih. These are the flavours that define a Kota Bharu food walk.',
      },
    ],
    faq: [
      { q: 'Is there food inside the market?', a: 'Yes, a food court level serves cooked Kelantan dishes and snacks.' },
      { q: 'Are there halal options?', a: 'Kelantan’s eateries are overwhelmingly halal; see the halal-food guide for context.' },
      { q: 'What should I try first?', a: 'Nasi kerabu or nasi dagang from the food court is the classic start.' },
    ],
    related: ['market-food-court', 'nasi-kerabu', 'nasi-dagang', 'halal-food'],
    updated: '2026-10-19',
  },
  {
    slug: 'nasi-kerabu',
    group: 'food',
    title: 'Nasi Kerabu Kota Bharu — Kelantan’s Blue Rice Guide',
    h1: 'Nasi Kerabu',
    description:
      'What nasi kerabu is, why it is blue, how it is served in Kota Bharu, and where to find it around Siti Khadijah Market, with cultural notes.',
    intro:
      'Nasi kerabu is Kelantan’s calling-card dish: rice tinted with butterfly-pea flower and piled with herbs, sambal and a protein.',
    sections: [
      {
        id: 'what',
        heading: 'What it is',
        body: 'The rice gets its blue colour from butterfly-pea (clitoria) flowers. It is served with ulam (herbs), sambal, keropok and choices such as fried chicken, beef or fish.',
      },
      {
        id: 'where',
        heading: 'Where to find it',
        body: 'The market food court and nearby stalls serve nasi kerabu, often from early morning. Availability follows the stall’s opening hours.',
      },
      {
        id: 'culture',
        heading: 'Cultural note',
        body: 'Nasi kerabu reflects Kelantan’s herb-rich Malay cuisine. Tourism Kelantan highlights it as a state signature; try it as part of a broader food walk.',
      },
    ],
    faq: [
      { q: 'Why is the rice blue?', a: 'It is coloured naturally with butterfly-pea flower, not artificial dye.' },
      { q: 'Is nasi kerabu spicy?', a: 'It comes with sambal, so heat varies; ask for less if you prefer mild.' },
      { q: 'Is it available at the market?', a: 'Yes, the food court level typically offers it in the morning.' },
    ],
    related: ['food-near-market', 'nasi-dagang', 'kelantan-street-food', 'market-food-court'],
    updated: '2026-10-19',
  },
  {
    slug: 'nasi-dagang',
    group: 'food',
    title: 'Nasi Dagang in Kelantan — Coconut Rice & Fish Curry',
    h1: 'Nasi Dagang',
    description:
      'Kelantan nasi dagang explained: the coconut rice, the fish curry, how it differs from nasi kerabu, and where to eat it near the market.',
    intro:
      'Nasi dagang is the other Kelantan rice staple — glutinous-coconut rice paired with a rich, spiced fish curry.',
    sections: [
      {
        id: 'what',
        heading: 'What it is',
        body: 'The rice is a mix of white and glutinous grains cooked in coconut milk, served with a sour-spiced fish curry (gulai), sambal and extras.',
      },
      {
        id: 'vs',
        heading: 'Nasi dagang vs nasi kerabu',
        body: 'Nasi kerabu is herb-blue and dry-style; nasi dagang is coconut-rich with a curry. Both are breakfast-leaning staples in Kelantan.',
      },
      {
        id: 'where',
        heading: 'Where to eat it',
        body: 'Look for it at the market food court and morning stall clusters. It sells out, so earlier is better.',
      },
    ],
    faq: [
      { q: 'Is nasi dagang the same as nasi kerabu?', a: 'No — nasi dagang is coconut rice with fish curry; nasi kerabu is herb-blue rice.' },
      { q: 'When is it served?', a: 'Mostly breakfast and morning; it can sell out by midday.' },
      { q: 'Is it spicy?', a: 'The curry has warmth; request milder if needed.' },
    ],
    related: ['nasi-kerabu', 'food-near-market', 'kelantan-street-food'],
    updated: '2026-10-19',
  },
  {
    slug: 'kelantan-street-food',
    group: 'food',
    title: 'Kelantan Street Food — Laksam, Nasi Berlauk & More',
    h1: 'Kelantan Street Food',
    description:
      'A field guide to Kelantan street food: laksam, nasi berlauk, roti titab and other local bites, with timing and etiquette notes for visitors.',
    intro:
      'Beyond the two famous rice dishes, Kelantan’s streets offer slurpable noodles and snackable plates worth hunting down.',
    sections: [
      {
        id: 'laksam',
        heading: 'Laksam',
        body: 'Soft rolled rice noodles in a thick, coconut-infused fish gravy, topped with herbs. It is a breakfast and brunch favourite across the state.',
      },
      {
        id: 'berlauk',
        heading: 'Nasi berlauk',
        body: 'Plain or coconut rice served with a spread of small curries and sides — a flexible, affordable plate you build to taste.',
      },
      {
        id: 'snacks',
        heading: 'Snacks and small bites',
        body: 'Roti titab (bread with coconut milk and egg) and various fried or steamed kuih appear at morning stall clusters and the market food court.',
      },
    ],
    faq: [
      { q: 'What is laksam?', a: 'Rice noodle rolls in a coconut fish gravy, a Kelantan breakfast classic.' },
      { q: 'Is street food cheap?', a: 'Generally yes; it is local-priced, so bring small cash.' },
      { q: 'When is street food available?', a: 'Mornings are best; many stalls close by early afternoon.' },
    ],
    related: ['nasi-kerabu', 'nasi-dagang', 'kelantan-kuih', 'food-near-market'],
    updated: '2026-10-19',
  },
  {
    slug: 'halal-food',
    group: 'food',
    title: 'Halal Food Around Pasar Siti Khadijah & Kota Bharu',
    h1: 'Halal Food Around the Market',
    description:
      'Halal dining context for Muslim visitors near Siti Khadijah Market: why most Kota Bharu food is halal, what to check, and etiquette notes.',
    intro:
      'Kelantan is a Muslim-majority state, so halal food is the norm rather than the exception. This guide explains what to expect.',
    sections: [
      {
        id: 'norm',
        heading: 'The default is halal',
        body: 'The vast majority of eateries and market stalls in Kota Bharu serve halal food. The market food court follows this same expectation.',
      },
      {
        id: 'check',
        heading: 'What to check',
        body: 'If in doubt, look for the halal sign or ask the trader. Imported or specialty items may differ, so confirm for strictly observed diets.',
      },
      {
        id: 'etiquette',
        heading: 'Etiquette',
        body: 'During Ramadan, daytime eating in public is sensitive; evenings are the social time to eat out. Dress modestly near food areas and mosques.',
      },
    ],
    faq: [
      { q: 'Is the market food halal?', a: 'Yes, the food court and nearby eateries serve halal food by default.' },
      { q: 'Do I need to worry about halal?', a: 'Rarely, but check signs or ask for strictly observed diets.' },
      { q: 'Any Ramadan notes?', a: 'Avoid public daytime eating during Ramadan out of respect.' },
    ],
    related: ['food-near-market', 'market-food-court', 'islamic-heritage'],
    updated: '2026-10-19',
  },
  {
    slug: 'cafes-nearby',
    group: 'food',
    title: 'Cafes Near Pasar Siti Khadijah — Coffee & AC Breaks',
    h1: 'Cafes Near the Market',
    description:
      'Where to take a coffee and air-conditioned break near Siti Khadijah Market, the kinds of cafes in Kota Bharu, and how they fit a market visit.',
    intro:
      'After a sweaty market walk, a cafe is a welcome reset. Kota Bharu’s city centre has a growing spread of casual cafes.',
    sections: [
      {
        id: 'types',
        heading: 'What to expect',
        body: 'Expect casual coffee shops and modern kopitiams offering iced drinks, local desserts and air-conditioning. They sit within a short walk or ride of the market.',
      },
      {
        id: 'when',
        heading: 'When to use one',
        body: 'Mid-morning or after the food court is a good time to cool down, recharge and plan the next stop on your walk.',
      },
      {
        id: 'note',
        heading: 'A neutral note',
        body: 'This guide describes cafe types and areas, not specific businesses, so you can choose what suits your route and budget.',
      },
    ],
    faq: [
      { q: 'Are there cafes near the market?', a: 'Yes, the city centre around the market has casual cafes and kopitiams.' },
      { q: 'Do cafes serve local drinks?', a: 'Many offer both coffee and local iced drinks and desserts.' },
      { q: 'Good for a break?', a: 'Yes — air-con and a cold drink make a natural mid-visit reset.' },
    ],
    related: ['food-near-market', 'market-food-court', 'best-time-to-visit'],
    updated: '2026-10-19',
  },
  {
    slug: 'budu-tempoyak',
    group: 'food',
    title: 'Budu & Tempoyak — Kelantan’s Fermented Condiments Explained',
    h1: 'Budu & Tempoyak',
    description:
      'Kelantan’s signature condiments budu and tempoyak: what they are, how locals eat them, and where to buy them at Siti Khadijah Market.',
    intro:
      'Two fermented flavours define Kelantanese tables — budu (anchovy sauce) and tempoyak (fermented durian). Both are sold at the market.',
    sections: [
      {
        id: 'budu',
        heading: 'Budu',
        body: 'Budu is a salty, umami fermented anchovy sauce, eaten with rice, lime, chilli and herbs. A little goes a long way; try it with nasi kerabu.',
      },
      {
        id: 'tempoyak',
        heading: 'Tempoyak',
        body: 'Tempoyak is fermented durian, used as a cooking base or a pungent side. Its flavour is strong and acquired — sample before buying a tub.',
      },
      {
        id: 'buy',
        heading: 'Buying at the market',
        body: 'Both appear among the fresh and packaged food stalls. Check sealing and freshness, especially for tempoyak, if you plan to travel with it.',
      },
    ],
    faq: [
      { q: 'What is budu?', a: 'A fermented anchovy sauce, salty and umami, used as a condiment with rice.' },
      { q: 'What is tempoyak?', a: 'Fermented durian, strong-flavoured, used in cooking or as a side.' },
      { q: 'Can I buy them at the market?', a: 'Yes, at the fresh and packaged food stalls; check sealing for travel.' },
    ],
    related: ['food-near-market', 'what-to-buy', 'kelantan-street-food'],
    updated: '2026-10-19',
  },
  {
    slug: 'kelantan-kuih',
    group: 'food',
    title: 'Kelantan Traditional Kuih — Akok, Jala Mas & Tahi Itik',
    h1: 'Kelantan Traditional Kuih',
    description:
      'Kelantan’s traditional kuih — akok, jala mas, tahi itik and more — what they are, when to buy them, and why the market is a good source.',
    intro:
      'Kelantan’s kuih are small, egg-rich and golden. The market’s snack stalls are a reliable place to see and taste them.',
    sections: [
      {
        id: 'akok',
        heading: 'Akok',
        body: 'Akok is a soft, custard-like cake of egg and palm sugar, baked in a mould. It is best the morning it is made.',
      },
      {
        id: 'jala',
        heading: 'Jala mas and tahi itik',
        body: 'Jala mas are delicate golden egg “nets”; tahi itik are tiny crunchy egg nibbles. Both are traditional sweets sold by weight.',
      },
      {
        id: 'buy',
        heading: 'When to buy',
        body: 'Kuih move fastest in the morning. Buy early for freshness and the widest choice at the market food court and stalls.',
      },
    ],
    faq: [
      { q: 'What is akok?', a: 'An egg-and-palm-sugar custard cake, soft and sweet, best fresh in the morning.' },
      { q: 'What are jala mas?', a: 'Thin golden egg “nests” — a traditional Kelantan sweet.' },
      { q: 'Are they available daily?', a: 'Often, but mornings give the best freshness and selection.' },
    ],
    related: ['food-near-market', 'market-food-court', 'what-to-buy'],
    updated: '2026-10-19',
  },
  {
    slug: 'ayam-percik',
    group: 'food',
    title: 'Ayam Percik Kelantan — Grilled Chicken with Spiced Coconut Sauce',
    h1: 'Ayam Percik',
    description:
      'Ayam percik, Kelantan’s grilled chicken with creamy spiced sauce: what it is, where to find it, and how it differs from other states’ versions.',
    intro:
      'Ayam percik is charcoal-grilled chicken lacquered with a coconut-milk and spice sauce — a festive favourite across Kelantan.',
    sections: [
      {
        id: 'what',
        heading: 'What it is',
        body: 'Chicken is grilled over charcoal, then brushed with a sauce of coconut milk, chilli, tamarind and spices. The result is smoky and rich.',
      },
      {
        id: 'where',
        heading: 'Where to find it',
        body: 'It appears at market food stalls, evening bazaars and during festive seasons. The market food court is a reasonable place to look during opening hours.',
      },
      {
        id: 'note',
        heading: 'A note for visitors',
        body: 'Sauciness and spice vary by stall. Ask about heat level if you prefer milder food.',
      },
    ],
    faq: [
      { q: 'What is ayam percik?', a: 'Charcoal-grilled chicken with a spiced coconut-milk sauce.' },
      { q: 'Is it spicy?', a: 'Usually warm; ask for a milder portion if you prefer.' },
      { q: 'Can I get it at the market?', a: 'Often at the food court and stalls, especially around festive periods.' },
    ],
    related: ['food-near-market', 'nasi-kerabu', 'ramadan-hours'],
    updated: '2026-10-19',
  },
  {
    slug: 'market-food-court',
    group: 'food',
    title: 'Eating Inside Pasar Siti Khadijah — The Upper-Floor Food Court',
    h1: 'The Market Food Court',
    description:
      'A practical guide to the food court inside Siti Khadijah Market: layout, what to eat, prices, payment and hygiene, plus how it fits a visit.',
    intro:
      'The market’s food level is where a market trip becomes a meal. Here is how to use it comfortably.',
    sections: [
      {
        id: 'layout',
        heading: 'How it works',
        body: 'Stalls line a shared seating area. Order at the counter, pay, and find a table. Mornings are busiest with breakfast and kuih trade.',
      },
      {
        id: 'pay',
        heading: 'Payment and price',
        body: 'Prices are local and modest. Small cash is handy; some stalls take cashless payment but do not rely on it.',
      },
      {
        id: 'hygiene',
        heading: 'Comfort and hygiene',
        body: 'It is a working market, so standards vary by stall. Choose busy stalls with high turnover and watch your belongings.',
      },
    ],
    faq: [
      { q: 'Where is the food court?', a: 'On the market’s dedicated food level, reached by the building’s lifts and stairs.' },
      { q: 'Is it cheap?', a: 'Yes, it is local-priced; bring small cash.' },
      { q: 'What time is it busiest?', a: 'Mornings, especially for breakfast and fresh kuih.' },
    ],
    related: ['food-near-market', 'floors-guide', 'nasi-kerabu', 'kelantan-kuih'],
    updated: '2026-10-19',
  },

  // ===================== C. CULTURE =====================
  {
    slug: 'history',
    group: 'culture',
    title: 'History of Pasar Siti Khadijah — Kota Bharu’s Iconic Market',
    h1: 'History of the Market',
    description:
      'The background of Siti Khadijah Market: its name, when it was built, its role in Kota Bharu, and the civic sources that document it.',
    intro:
      'Siti Khadijah Market is one of Kota Bharu’s most recognised buildings. Its name and design reflect the city’s trading culture.',
    sections: [
      {
        id: 'name',
        heading: 'Why “Siti Khadijah”',
        body: 'The market is named after Siti Khadijah, honouring women in trade — fitting for a market long associated with women traders. It is a symbolic, not a religious, name.',
      },
      {
        id: 'built',
        heading: 'A modern market building',
        body: 'The current multi-storey market was developed in the late 20th century to consolidate trading in the city centre. Exact dates vary by source; Tourism Kelantan and municipal references are the most reliable.',
      },
      {
        id: 'role',
        heading: 'Its role today',
        body: 'It remains a working public market and a civic landmark, drawing both locals shopping and visitors exploring Kelantan’s food and craft culture.',
      },
    ],
    faq: [
      { q: 'Who was Siti Khadijah?', a: 'The market is named after a figure honouring women in trade; it is a symbolic name.' },
      { q: 'When was the market built?', a: 'The modern building dates to the late 20th century; confirm precise dates with Tourism Kelantan.' },
      { q: 'Is it a tourist attraction?', a: 'It is a working market and a city landmark, popular with visitors for food and crafts.' },
    ],
    related: ['women-traders', 'architecture', 'nearby-attractions'],
    updated: '2026-10-19',
  },
  {
    slug: 'women-traders',
    group: 'culture',
    title: 'The Women Traders of Pasar Siti Khadijah — A Kelantan Tradition',
    h1: 'The Women Traders',
    description:
      'Why Siti Khadijah Market is known for women traders, the cultural background in Kelantan, and respectful photography and etiquette tips.',
    intro:
      'One of the market’s distinctive features is the prominence of women traders, especially on the upper textile and craft floors.',
    sections: [
      {
        id: 'tradition',
        heading: 'A local trading tradition',
        body: 'Kelantan has a long pattern of women participating actively in market trade. The market’s name celebrates that role, and many stalls are run by women.',
      },
      {
        id: 'floors',
        heading: 'Where they trade',
        body: 'Women traders are especially visible on the textile, clothing and handicraft floors, where songket, batik and dress are sold.',
      },
      {
        id: 'respect',
        heading: 'Visiting respectfully',
        body: 'Ask before photographing people or their goods. A polite hello and a clear interest in the craft go a long way with traders.',
      },
    ],
    faq: [
      { q: 'Why are there many women traders?', a: 'It reflects Kelantan’s tradition of women in market trade, celebrated by the market’s name.' },
      { q: 'Can I photograph them?', a: 'Ask first; many are happy if you are respectful and curious.' },
      { q: 'Which floors are they on?', a: 'Especially the textile and handicraft upper floors.' },
    ],
    related: ['history', 'batik-songket', 'handicrafts'],
    updated: '2026-10-19',
  },
  {
    slug: 'architecture',
    group: 'culture',
    title: 'Pasar Siti Khadijah Architecture — The Four-Storey Market Building',
    h1: 'The Building & Architecture',
    description:
      'The design of Siti Khadijah Market: its stacked storeys, central atrium and natural ventilation, and how the layout shapes a visit.',
    intro:
      'The market’s tiered, open design is part of its character — a building made for airflow and movement rather than enclosed shopping.',
    sections: [
      {
        id: 'form',
        heading: 'A stacked, open market',
        body: 'The building rises through several trading floors around a central atrium, letting light and air move through. It reads as a market, not a mall.',
      },
      {
        id: 'air',
        heading: 'Ventilation and comfort',
        body: 'Open sides and the atrium help with heat and smell in a fresh market. Even so, upper floors are cooler than the busy ground level at peak times.',
      },
      {
        id: 'movement',
        heading: 'Getting around',
        body: 'Lifts, escalators and stairs connect the floors. Start low for produce, finish high for crafts, and use the atrium sightlines to orient yourself.',
      },
    ],
    faq: [
      { q: 'How many floors does it have?', a: 'It is a multi-storey market centred on an open atrium; floor use follows the guide above.' },
      { q: 'Is it air-conditioned?', a: 'It relies on open ventilation rather than full air-conditioning, typical of a working market.' },
      { q: 'Is the layout easy to navigate?', a: 'The atrium helps you orient; lifts and stairs connect the levels.' },
    ],
    related: ['floors-guide', 'history', 'accessibility'],
    updated: '2026-10-19',
  },
  {
    slug: 'batik-songket',
    group: 'culture',
    title: 'Batik & Songket Shopping at Pasar Siti Khadijah',
    h1: 'Batik & Songket',
    description:
      'How to shop for batik and songket at Siti Khadijah Market: what each is, how to tell quality, fair pricing and bargaining etiquette.',
    intro:
      'Kelantan is a heartland of batik and songket. The market’s upper floors are a practical place to compare both.',
    sections: [
      {
        id: 'difference',
        heading: 'Batik vs songket',
        body: 'Batik is wax-resist dyed cloth; songket is woven with gold or silver thread. Songket is usually pricier because of the metallic weave and labour.',
      },
      {
        id: 'quality',
        heading: 'Checking quality',
        body: 'For batik, look at colour penetration and detail. For songket, check the density and evenness of the metallic thread and the weave’s hand-feel.',
      },
      {
        id: 'buy',
        heading: 'Buying well',
        body: 'Compare a few stalls, confirm fabric and size, and ask about care. Polite negotiation is normal for larger pieces; fixed-price food stalls are different.',
      },
    ],
    faq: [
      { q: 'What is songket?', a: 'A handwoven cloth with gold or silver thread, traditional to Malay courts including Kelantan.' },
      { q: 'Is batik cheaper than songket?', a: 'Generally yes; songket’s metallic weave makes it more labour-intensive.' },
      { q: 'Can I bargain?', a: 'Yes, politely, especially for bigger textile purchases.' },
    ],
    related: ['what-to-buy', 'handicrafts', 'women-traders'],
    updated: '2026-10-19',
  },
  {
    slug: 'kelantan-culture',
    group: 'culture',
    title: 'Kelantan Culture Primer — What Makes the State Unique',
    h1: 'Kelantan Culture',
    description:
      'An introduction to Kelantan’s culture — its Malay traditions, performing arts, crafts and how the market connects to them, with official references.',
    intro:
      'Kelantan is often called the cultural heart of Malaysia’s east coast. The market is a living window into that heritage.',
    sections: [
      {
        id: 'arts',
        heading: 'Arts and performance',
        body: 'The state is known for wayang kulit (shadow puppetry), mak yong theatre, wau (kites) and gasing (spinning tops) — traditional forms documented by cultural bodies.',
      },
      {
        id: 'craft',
        heading: 'Craft heritage',
        body: 'Batik, songket and silverwork are living crafts you can see and buy at the market, linking daily trade to wider tradition.',
      },
      {
        id: 'food',
        heading: 'Food as culture',
        body: 'Dishes like nasi kerabu and budu are not just meals but cultural markers — part of why the market’s food floor matters.',
      },
    ],
    faq: [
      { q: 'What is Kelantan famous for?', a: 'Malay performing arts, batik, songket and distinctive cuisine.' },
      { q: 'How does the market connect to culture?', a: 'It is where crafts and food traditions are bought and sold daily.' },
      { q: 'Where can I learn more?', a: 'Tourism Kelantan and state cultural bodies document the arts and crafts.' },
    ],
    related: ['batik-songket', 'handicrafts', 'women-traders', 'history'],
    updated: '2026-10-19',
  },
  {
    slug: 'handicrafts',
    group: 'culture',
    title: 'Kelantan Handicrafts & Souvenirs — What to Bring Home',
    h1: 'Handicrafts & Souvenirs',
    description:
      'A guide to Kelantan handicrafts at Siti Khadijah Market: silverware, rattan, woodwork, songket and practical buying and shipping notes.',
    intro:
      'If you want a souvenir with a sense of place, the market’s craft floors are the place to compare authentic Kelantan work.',
    sections: [
      {
        id: 'types',
        heading: 'What to look for',
        body: 'Silverware, rattan and woven items, woodwork and songket are the staples. Each carries a different price and weight for travel.',
      },
      {
        id: 'authentic',
        heading: 'Authenticity checks',
        body: 'Ask whether an item is handmade, what it is made from, and how to care for it. Genuine crafts cost more than mass-produced look-alikes.',
      },
      {
        id: 'travel',
        heading: 'Taking it home',
        body: 'Fragile pieces need padding; check airline and customs rules for food and plant-based items. Seal food gifts well.',
      },
    ],
    faq: [
      { q: 'What are the best souvenirs?', a: 'Songket, batik, silverware and small rattan or wood crafts.' },
      { q: 'How do I avoid fakes?', a: 'Ask about materials and making; compare several stalls and prices.' },
      { q: 'Can I ship items?', a: 'Many travellers carry them; for fragile or bulky pieces ask about packing and shipping on site.' },
    ],
    related: ['batik-songket', 'what-to-buy', 'kelantan-culture'],
    updated: '2026-10-19',
  },
  {
    slug: 'nearby-attractions',
    group: 'culture',
    title: 'Attractions Near Pasar Siti Khadijah — Istana Jahar, Masjid & More',
    h1: 'Nearby Attractions',
    description:
      'Heritage sights within walking distance of Siti Khadijah Market: Istana Jahar, Istana Batu, Masjid Muhammadi and Independence Square, with visit context.',
    intro:
      'The market sits in old Kota Bharu, where several heritage buildings cluster. Pair a market trip with a short heritage walk.',
    sections: [
      {
        id: 'istana',
        heading: 'Istana Jahar & Istana Batu',
        body: 'These royal buildings host museums on Kelantan customs and regalia. They are short walks from the market and give context to the state’s culture.',
      },
      {
        id: 'mosque',
        heading: 'Masjid Muhammadi',
        body: 'The state mosque is a city landmark near the market. Visitors should dress modestly and visit outside prayer times where possible.',
      },
      {
        id: 'square',
        heading: 'Independence Square',
        body: 'A central open space tying together the heritage district; useful as a navigation anchor between the market and the museums.',
      },
    ],
    faq: [
      { q: 'What is near the market?', a: 'Istana Jahar, Istana Batu museums, Masjid Muhammadi and Independence Square.' },
      { q: 'Can I walk between them?', a: 'Yes, they are close in the city centre; wear light clothing.' },
      { q: 'Are the museums free?', a: 'Check current state museum admission on site or with Tourism Kelantan.' },
    ],
    related: ['islamic-heritage', 'kota-bharu-half-day', 'history'],
    updated: '2026-10-19',
  },
  {
    slug: 'kelantan-river',
    group: 'culture',
    title: 'Kelantan River & Riverside Walk Near the Market',
    h1: 'The Kelantan River',
    description:
      'The Kelantan River beside Kota Bharu: its historical role in trade, a riverside walk from the market, and how water shaped the city.',
    intro:
      'The Kelantan River has long shaped life and trade in Kota Bharu. The market’s location near the water is no accident.',
    sections: [
      {
        id: 'history',
        heading: 'A trading waterway',
        body: 'Historically the river moved goods and people before modern roads. Markets grew near it for access — a pattern the city still shows.',
      },
      {
        id: 'walk',
        heading: 'A riverside walk',
        body: 'From the market you can walk toward the river and open spaces for a quieter end to a market visit, especially in the cooler evening.',
      },
      {
        id: 'note',
        heading: 'Practical note',
        body: 'Riverbanks are public and informal; keep to open paths, watch children near water, and avoid the hottest midday if walking far.',
      },
    ],
    faq: [
      { q: 'Is the market near the river?', a: 'Yes, it is in the city centre close to the Kelantan River.' },
      { q: 'Can I walk along the river?', a: 'Yes, there are open riverside areas within a walk of the market.' },
      { q: 'Is a river walk safe?', a: 'Stay on open paths and supervise children near water.' },
    ],
    related: ['nearby-attractions', 'kota-bharu-half-day', 'best-time-to-visit'],
    updated: '2026-10-19',
  },

  // ===================== D. ITINERARY =====================
  {
    slug: 'kota-bharu-half-day',
    group: 'itinerary',
    title: 'Kota Bharu Half-Day Itinerary — Market + Museums',
    h1: 'Kota Bharu Half-Day Itinerary',
    description:
      'A half-day plan for Kota Bharu: morning at Siti Khadijah Market, a food-court breakfast, and a walk to nearby museums, with timing and budget notes.',
    intro:
      'Short on time? This half-day loop pairs the market with the heritage museums a few minutes away.',
    sections: [
      {
        id: 'plan',
        heading: 'The route (about 4 hours)',
        body: '08:00 arrive at the market; 08:15 breakfast at the food court; 09:00 browse fresh and craft floors; 10:30 walk to Istana Jahar and Istana Batu museums; 11:30 riverside or square break.',
      },
      {
        id: 'budget',
        heading: 'Budget notes',
        body: 'The market itself is free to enter; budget for food and any crafts. Museum admission, if any, is set by the state — check on site.',
      },
      {
        id: 'tip',
        heading: 'Timing tips',
        body: 'Start early for the food court and cool weather, and keep the museums for late morning. See the best-time guide for detail.',
      },
    ],
    faq: [
      { q: 'Can I do it in half a day?', a: 'Yes — about four hours covers the market and the nearest museums.' },
      { q: 'What time should I start?', a: 'Around 08:00 to catch the food court and avoid heat.' },
      { q: 'Is it walkable?', a: 'The market and museums are close in the city centre.' },
    ],
    related: ['best-time-to-visit', 'nearby-attractions', 'market-food-court', 'kota-bharu-itinerary'],
    updated: '2026-10-19',
  },
  {
    slug: 'kota-bharu-itinerary',
    group: 'itinerary',
    title: 'Kota Bharu Full-Day Itinerary — Markets, Culture & Food',
    h1: 'Kota Bharu Full-Day Itinerary',
    description:
      'A full-day Kota Bharu plan built around Siti Khadijah Market, heritage museums, local food and an evening at Wakaf Che Yeh night market.',
    intro:
      'A complete day that blends market, culture, food and an evening bazaar — the best single-day shape for first-time visitors.',
    sections: [
      {
        id: 'plan',
        heading: 'The day (about 8–9 hours)',
        body: 'Morning: market + food court. Late morning: Istana Jahar, Istana Batu, Masjid Muhammadi. Afternoon: cafe break and craft shopping. Evening: Wakaf Che Yeh night market.',
      },
      {
        id: 'logistics',
        heading: 'Getting between stops',
        body: 'The city-centre stops are walkable; Wakaf Che Yeh is a short ride away in the evening. Use ride-hailing or a taxi for the night market.',
      },
      {
        id: 'budget',
        heading: 'Budget notes',
        body: 'Plan for food across the day, any crafts, and transport to Wakaf Che Yeh. None of the public sites require commercial bookings.',
      },
    ],
    faq: [
      { q: 'Is one day enough?', a: 'Yes for the highlights: market, museums, food and the night market.' },
      { q: 'How do I reach Wakaf Che Yeh?', a: 'A short ride from the city centre by taxi or ride-hailing in the evening.' },
      { q: 'What should I not miss?', a: 'The market food court and the evening night market are the bookends.' },
    ],
    related: ['wakaf-che-yeh', 'kota-bharu-half-day', 'nearby-attractions', 'weekend-itinerary'],
    updated: '2026-10-19',
  },
  {
    slug: 'rainy-day',
    group: 'itinerary',
    title: 'Rainy Day in Kota Bharu — Why the Market Is Perfect Indoors',
    h1: 'Rainy Day Plan',
    description:
      'A rainy-day plan for Kota Bharu centred on the covered Siti Khadijah Market, with museums and cafes as dry backups during the wet season.',
    intro:
      'Kelantan’s wet season (about May to October) brings heavy showers. The market’s covered, multi-storey design makes it a natural rainy-day anchor.',
    sections: [
      {
        id: 'market',
        heading: 'Start under cover',
        body: 'Spend the wettest part of the day in the market — fresh food, cooked meals and crafts are all indoors across the floors.',
      },
      {
        id: 'museums',
        heading: 'Add indoor culture',
        body: 'Istana Jahar and Istana Batu museums are short, mostly sheltered walks away and round out a rainy morning.',
      },
      {
        id: 'cafe',
        heading: 'Break at a cafe',
        body: 'Slip into a city-centre cafe between showers to recharge. Save outdoor riverside walks for a drier window.',
      },
    ],
    faq: [
      { q: 'Is the market good in rain?', a: 'Yes — it is covered and multi-storey, so showers rarely spoil it.' },
      { q: 'What else is indoors?', a: 'The heritage museums near the market are good dry backups.' },
      { q: 'When is the wet season?', a: 'Roughly May to October, with afternoon storms common.' },
    ],
    related: ['best-time-to-visit', 'kota-bharu-itinerary', 'cafes-nearby', 'nearby-attractions'],
    updated: '2026-10-19',
  },
  {
    slug: 'wakaf-che-yeh',
    group: 'itinerary',
    title: 'Wakaf Che Yeh Night Market — Kelantan’s Evening Bazaar',
    h1: 'Wakaf Che Yeh Night Market',
    description:
      'Wakaf Che Yeh night market near Kota Bharu: what it sells, when it opens, how to get there from the city centre, and how it differs from the day market.',
    intro:
      'Wakaf Che Yeh is a well-known evening bazaar a short drive from the city centre — the lively counterpoint to a daytime market visit.',
    sections: [
      {
        id: 'what',
        heading: 'What it is',
        body: 'An evening market of clothing, household goods, snacks and street food. It comes alive after dark and is busiest on weekend nights.',
      },
      {
        id: 'when',
        heading: 'When it runs',
        body: 'It operates in the evening; exact opening hours follow the traders and season. Go after the day market has wound down.',
      },
      {
        id: 'how',
        heading: 'Getting there',
        body: 'It is a short ride from Kota Bharu city centre by taxi or ride-hailing. Plan your return, as late-night transport thins out.',
      },
    ],
    faq: [
      { q: 'How far is Wakaf Che Yeh?', a: 'A short drive from the city centre, roughly several kilometres.' },
      { q: 'When is it open?', a: 'Evenings; it is an after-dark bazaar, busiest on weekends.' },
      { q: 'Is it like Siti Khadijah Market?', a: 'No — it is an evening bazaar of clothes, goods and street food, not a daytime fresh market.' },
    ],
    related: ['kota-bharu-itinerary', 'weekend-itinerary', 'food-near-market'],
    updated: '2026-10-19',
  },
  {
    slug: 'islamic-heritage',
    group: 'itinerary',
    title: 'Islamic Heritage Trail in Kota Bharu — Mosques & Market',
    h1: 'Islamic Heritage Trail',
    description:
      'A respectful Islamic heritage walk in Kota Bharu linking Masjid Muhammadi, the market named for a trading woman, and modest-dress etiquette.',
    intro:
      'Kota Bharu’s identity is woven with Islamic culture. This trail links the landmarks with the market in a respectful, practical route.',
    sections: [
      {
        id: 'mosque',
        heading: 'Masjid Muhammadi',
        body: 'The state mosque is the spiritual anchor of the city. Visit outside prayer times and dress modestly; women may be asked to cover appropriately.',
      },
      {
        id: 'market',
        heading: 'The market’s namesake',
        body: 'Siti Khadijah honours women in trade, complementing the city’s Islamic heritage. The market is a fitting stop on a culture walk.',
      },
      {
        id: 'etiquette',
        heading: 'Etiquette',
        body: 'Dress conservatively, ask before photographing people, and keep noise low near prayer spaces. Fridays centre on the congregational prayer.',
      },
    ],
    faq: [
      { q: 'Can visitors enter the mosque?', a: 'Generally yes outside prayer times and with modest dress; confirm on site.' },
      { q: 'Why include the market?', a: 'Its name honours a trading woman, tying trade to the city’s heritage.' },
      { q: 'Any Friday advice?', a: 'Expect a quieter midday around the prayer; see the Friday guide.' },
    ],
    related: ['halal-food', 'nearby-attractions', 'friday-hours', 'women-traders'],
    updated: '2026-10-19',
  },
  {
    slug: 'family-itinerary',
    group: 'itinerary',
    title: 'Family Itinerary in Kota Bharu with Kids',
    h1: 'Family Itinerary',
    description:
      'A kid-friendly Kota Bharu day: the market’s colours and food, museums, a riverside break and safety tips for families.',
    intro:
      'The market is a sensory outing for children — colours, smells and snacks — if you plan around crowds, heat and footing.',
    sections: [
      {
        id: 'plan',
        heading: 'A family-friendly day',
        body: 'Morning market walk with snack stops, a short museum visit, then a riverside or square break. Keep sessions short and shaded.',
      },
      {
        id: 'safety',
        heading: 'Safety with kids',
        body: 'Hold hands near the wet fresh floor, watch belongings in crowds, and carry water. A baby carrier beats a stroller at peak crush.',
      },
      {
        id: 'food',
        heading: 'Food for picky eaters',
        body: 'The food court has plain rice and grilled options alongside the adventurous dishes, so most children find something familiar.',
      },
    ],
    faq: [
      { q: 'Is the market good for kids?', a: 'Yes as a short, sensory visit; watch wet floors and crowds.' },
      { q: 'Stroller or carrier?', a: 'A carrier is easier at busy times; aisles get tight.' },
      { q: 'Is there kid-friendly food?', a: 'Plain rice and grilled items at the food court usually work.' },
    ],
    related: ['accessibility', 'best-time-to-visit', 'kota-bharu-half-day', 'nearby-attractions'],
    updated: '2026-10-19',
  },
  {
    slug: 'weekend-itinerary',
    group: 'itinerary',
    title: 'Weekend in Kota Bharu — 2-Day Plan with the Market',
    h1: 'Weekend in Kota Bharu',
    description:
      'A two-day Kota Bharu plan: day one on the market, museums and food; day two on nearby coast or Wakaf Che Yeh, with transport and timing notes.',
    intro:
      'A weekend lets you enjoy the market at a relaxed pace and add a second-day outing without rushing.',
    sections: [
      {
        id: 'day1',
        heading: 'Day one — city and market',
        body: 'Market and food court in the morning, museums and mosque at late morning, cafe break, then Wakaf Che Yeh at night.',
      },
      {
        id: 'day2',
        heading: 'Day two — beyond the centre',
        body: 'Use the second day for a coastal or countryside outing, or more craft shopping. Keep transport simple with ride-hailing.',
      },
      {
        id: 'tip',
        heading: 'Weekend tips',
        body: 'Weekends are livelier but busier at the market; arrive early. Book nothing commercial — this is a public-market plan.',
      },
    ],
    faq: [
      { q: 'Is two days enough?', a: 'Yes for the city highlights plus one outing.' },
      { q: 'What to do on day two?', a: 'A coastal or countryside trip, or deeper craft shopping.' },
      { q: 'Are weekends crowded?', a: 'Yes at the market; go early and use the food court before peak.' },
    ],
    related: ['kota-bharu-itinerary', 'wakaf-che-yeh', 'kota-bharu-half-day', 'family-itinerary'],
    updated: '2026-10-19',
  },
  {
    slug: 'from-kota-bharu-airport',
    group: 'itinerary',
    title: 'From Kota Bharu Airport to Pasar Siti Khadijah',
    h1: 'Airport to the Market',
    description:
      'Getting from Sultan Ismail Petra Airport to Siti Khadijah Market: distance, ride-hailing and taxi options, and travel time into the city centre.',
    intro:
      'If you land at Kota Bharu airport, the market is a short ride into the city centre. Here is the last leg made simple.',
    sections: [
      {
        id: 'distance',
        heading: 'Distance and time',
        body: 'The airport is a short distance from the city centre; the ride to the market is typically quick outside peak traffic. Confirm the fare before starting.',
      },
      {
        id: 'ride',
        heading: 'Ride options',
        body: 'Taxis and ride-hailing apps meet flights at the airport. Set the destination to “Pasar Siti Khadijah, Jalan Buluh Kubu”.',
      },
      {
        id: 'tip',
        heading: 'Arrival tips',
        body: 'If you arrive early, head straight to the market for the morning food court; if late, save the market for the next morning.',
      },
    ],
    faq: [
      { q: 'How far is the airport from the market?', a: 'A short distance; the ride into the city centre is quick.' },
      { q: 'Is there Grab at the airport?', a: 'Ride apps and taxis serve the airport; confirm the fare.' },
      { q: 'When should I go to the market?', a: 'Mornings are best; if you land late, go the next morning.' },
    ],
    related: ['getting-there', 'directions-from-kl', 'parking', 'best-time-to-visit'],
    updated: '2026-10-19',
  },
];

export const TOPIC_SLUGS: string[] = TOPICS.map((t) => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
