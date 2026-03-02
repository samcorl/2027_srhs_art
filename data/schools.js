/**
 * College Prep - School Data
 * CA student perspective: UC/CSU show in-state costs; out-of-state schools show OOS costs.
 * All costs approximate 2025-2026. Verify before applying.
 */

const SCHOOLS = [

  // ─── CALIFORNIA PRIVATE ──────────────────────────────────────────────────

  {
    id: 'calarts',
    name: 'California Institute of the Arts',
    shortName: 'CalArts',
    location: 'Valencia, CA',
    state: 'CA',
    type: 'private-ca',
    website: 'https://calarts.edu',
    social: { instagram: 'https://www.instagram.com/calarts/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Character Animation, Experimental Animation, Film & Video',
    visualFineArtsPrograms: 'BFA in Art (Fine Art, Integrated Media, Photography)',

    tuition: 54280,
    roomBoard: 15500,
    totalCOA: 69780,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '24%',
    portfolioRequired: true,
    portfolioNotes: 'Each program has specific portfolio/audition requirements; see individual program pages.',
    applicationDeadlines: 'Dec 1 (preferred), Jan 5 (final)',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 4,
    visualFineArtsRank: 11,

    highlights: [
      'Founded with Walt Disney\'s vision in 1961',
      'Top pipeline for Disney, Pixar, DreamWorks, and major studios',
      '8:1 student-to-faculty ratio',
      'Experimental, interdisciplinary, and industry-facing programs'
    ],
  },

  {
    id: 'artcenter',
    name: 'Art Center College of Design',
    shortName: 'Art Center',
    location: 'Pasadena, CA',
    state: 'CA',
    type: 'private-ca',
    website: 'https://www.artcenter.edu',
    social: { instagram: 'https://www.instagram.com/artcenteredu/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Illustration, Entertainment Design, Advertising, Interaction Design',
    visualFineArtsPrograms: 'BFA Fine Art (painting, drawing, sculpture); BFA Illustration',

    tuition: 52836,
    roomBoard: 0,
    totalCOA: 68000,
    costLabel: 'Private — same for all students (commuter-friendly; no on-campus housing)',
    caAdvantage: false,

    acceptanceRate: '75%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio is central to admission; 10-20 works. Strong conceptual thinking valued.',
    applicationDeadlines: 'Rolling admissions; apply early for spring/fall terms',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 2,
    visualFineArtsRank: 12,

    highlights: [
      'Industry gold standard for illustration and entertainment design',
      'Graduates work at every major animation studio, game company, and ad agency',
      'Rigorous, professional-track curriculum',
      'Located in greater Los Angeles — direct industry access'
    ],
  },

  {
    id: 'cca',
    name: 'California College of the Arts',
    shortName: 'CCA',
    location: 'San Francisco, CA',
    state: 'CA',
    type: 'private-ca',
    website: 'https://www.cca.edu',
    social: { instagram: 'https://www.instagram.com/cacollegeofarts/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Graphic Design, Interaction Design, Industrial Design, Animation',
    visualFineArtsPrograms: 'BFA Fine Arts (Ceramics, Drawing/Painting, Glass, Jewelry, Photography, Printmaking, Sculpture, Textiles)',

    tuition: 56714,
    roomBoard: 20000,
    totalCOA: 76714,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '88%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required (10-20 pieces). Home test for some programs.',
    applicationDeadlines: 'Feb 1 (priority), rolling after',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 3,
    visualFineArtsRank: 6,

    highlights: [
      'Absorbed the historic San Francisco Art Institute (SFAI) in 2022',
      'Strong Bay Area industry connections (tech, design, art market)',
      'Mission District campus in San Francisco\'s creative heart',
      'One of the broadest fine arts + design program offerings on the West Coast'
    ],
  },

  {
    id: 'otis',
    name: 'Otis College of Art and Design',
    shortName: 'Otis',
    location: 'Los Angeles, CA',
    state: 'CA',
    type: 'private-ca',
    website: 'https://www.otis.edu',
    social: { instagram: 'https://www.instagram.com/otiscollege/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Fine Arts (Drawing, Painting, Sculpture, New Media); BFA Illustration',

    tuition: 50280,
    roomBoard: 19000,
    totalCOA: 69280,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '56%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio of 10-15 works required. Process work (sketchbooks) welcome.',
    applicationDeadlines: 'Feb 15 (priority)',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 18,

    highlights: [
      'Strong connections to LA contemporary art market and galleries',
      'Faculty of active professional artists',
      'Near LACMA, The Broad, and MOCA',
      'LA\'s broad creative economy provides rich internship landscape'
    ],
  },

  // ─── CALIFORNIA UC ────────────────────────────────────────────────────────

  {
    id: 'ucla',
    name: 'UCLA — School of the Arts and Architecture',
    shortName: 'UCLA',
    location: 'Los Angeles, CA',
    state: 'CA',
    type: 'uc',
    website: 'https://www.arts.ucla.edu',
    social: { instagram: 'https://www.instagram.com/uclaarts/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BA Design Media Arts (DMA) — digital design, interactive media, moving image',
    visualFineArtsPrograms: 'BA Art (Studio: Ceramics, Drawing, New Genres, Painting, Photography, Printmaking, Sculpture)',

    tuition: 13804,
    tuitionOOS: 44854,
    roomBoard: 22162,
    totalCOA: 36000,
    totalCOAOOS: 67000,
    costLabel: '🟢 CA In-State: ~$13,804/yr tuition (OOS: ~$44,854)',
    caAdvantage: true,

    acceptanceRate: '9% overall (competitive arts major)',
    portfolioRequired: true,
    portfolioNotes: 'Arts Supplement required at application; strong portfolio essential for admission to arts programs.',
    applicationDeadlines: 'UC Filing Period: Nov 1–30',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 10,
    visualFineArtsRank: 20,

    highlights: [
      'One of the top-ranked MFA programs in the world — undergraduate feeds directly into it',
      'LA arts scene (LACMA, The Broad, Hammer, MOCA) as extended campus',
      'UC in-state tuition is an extraordinary value for the caliber',
      'Apply via UC Application (ucop.edu) — not Common App'
    ],
  },

  {
    id: 'ucdavis',
    name: 'UC Davis — Dept. of Art & Art History',
    shortName: 'UC Davis',
    location: 'Davis, CA',
    state: 'CA',
    type: 'uc',
    website: 'https://art.ucdavis.edu',
    social: { instagram: 'https://www.instagram.com/ucdavisdesign/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Art Studio (Ceramics, Drawing, Digital Media, Painting, Photography, Printmaking, Sculpture)',

    tuition: 14312,
    tuitionOOS: 44066,
    roomBoard: 19358,
    totalCOA: 33670,
    totalCOAOOS: 63424,
    costLabel: '🟢 CA In-State: ~$14,312/yr tuition (OOS: ~$44,066)',
    caAdvantage: true,

    acceptanceRate: '39% overall',
    portfolioRequired: false,
    portfolioNotes: 'Portfolio not required for admission; students apply to the major after acceptance.',
    applicationDeadlines: 'UC Filing Period: Nov 1–30',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 21,

    highlights: [
      'Strong MFA pipeline — UC Davis was historically a major conceptual art hub (Wayne Thiebaud taught here)',
      'Active visiting artist program and Manetti Shrem Museum on campus',
      'UC in-state tuition — exceptional value',
      'Davis is a college town with low cost of living'
    ],
  },

  {
    id: 'ucsd',
    name: 'UC San Diego — Visual Arts (Computing Track)',
    shortName: 'UCSD',
    location: 'La Jolla, CA',
    state: 'CA',
    type: 'uc',
    website: 'https://visarts.ucsd.edu',
    social: { instagram: 'https://www.instagram.com/ucsdvisarts/' },
    categories: ['digital_arts'],

    digitalArtsPrograms: 'BA/BFA Visual Arts — Computing track (interactive media, game design, digital installation); Media track',
    visualFineArtsPrograms: '',

    tuition: 14312,
    tuitionOOS: 44066,
    roomBoard: 20428,
    totalCOA: 34740,
    totalCOAOOS: 64494,
    costLabel: '🟢 CA In-State: ~$14,312/yr tuition (OOS: ~$44,066)',
    caAdvantage: true,

    acceptanceRate: '24% overall',
    portfolioRequired: false,
    portfolioNotes: 'Portfolio not required for general admission. Arts supplement helps.',
    applicationDeadlines: 'UC Filing Period: Nov 1–30',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 19,
    visualFineArtsRank: null,

    highlights: [
      'Unique "Computing" track blends art with programming and interactive tech',
      'Stuart Collection of public art on campus; Calit2 for computational art research',
      'UC in-state value + strong research culture',
      'San Diego creative and tech industries provide internship access'
    ],
  },

  // ─── CALIFORNIA CSU ───────────────────────────────────────────────────────

  {
    id: 'csulb',
    name: 'CSU Long Beach — College of the Arts',
    shortName: 'CSULB',
    location: 'Long Beach, CA',
    state: 'CA',
    type: 'csu',
    website: 'https://www.csulb.edu/art',
    social: { instagram: 'https://www.instagram.com/csulb_schoolofart/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Art (Digital Media, Graphic Design, Animation concentrations)',
    visualFineArtsPrograms: 'BFA Studio Art (Ceramics, Drawing, Fiber, Metals, Painting, Photography, Printmaking, Sculpture)',

    tuition: 7066,
    tuitionOOS: 19226,
    roomBoard: 21000,
    totalCOA: 28066,
    totalCOAOOS: 40226,
    costLabel: '🟢 CA In-State: ~$7,066/yr (OOS: ~$19,226)',
    caAdvantage: true,

    acceptanceRate: '30% overall (art programs competitive)',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio review required for acceptance into the BFA art program (separate from university admission).',
    applicationDeadlines: 'CSU Apply: Oct 1–Nov 30',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 17,
    visualFineArtsRank: 22,

    highlights: [
      'NASAD-accredited — strong professional reputation',
      'One of the best-value fine arts BFAs in California',
      'Proximity to LA arts and entertainment industry',
      'Museum of Art on campus (CSULB LGBTQ+ Art Study Center also notable)'
    ],
  },

  {
    id: 'sjsu',
    name: 'San Jose State University — School of Art & Design',
    shortName: 'SJSU',
    location: 'San Jose, CA',
    state: 'CA',
    type: 'csu',
    website: 'https://www.sjsu.edu/art',
    social: { instagram: 'https://www.instagram.com/sjsudesign/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Art (Digital Art/New Media, Graphic Design, Animation concentrations)',
    visualFineArtsPrograms: 'BFA Art Practice (Ceramics, Drawing, Painting, Photography, Printmaking, Sculpture, Spatial Art)',

    tuition: 7600,
    tuitionOOS: 19480,
    roomBoard: 18000,
    totalCOA: 25600,
    totalCOAOOS: 37480,
    costLabel: '🟢 CA In-State: ~$7,600/yr (OOS: ~$19,480)',
    caAdvantage: true,

    acceptanceRate: '64% overall',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio review for BFA acceptance (after general university admission).',
    applicationDeadlines: 'CSU Apply: Oct 1–Nov 30',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 18,
    visualFineArtsRank: 23,

    highlights: [
      'NASAD-accredited; most affordable NASAD BFA in California',
      'Silicon Valley location means unmatched tech/design industry connections',
      'Near SFMOMA and Bay Area gallery scene',
      '~$7,600/yr in-state — best value fine arts BFA in the state'
    ],
  },

  // ─── TOP NATIONAL PRIVATE ─────────────────────────────────────────────────

  {
    id: 'yale',
    name: 'Yale College (Yale University)',
    shortName: 'Yale',
    location: 'New Haven, CT',
    state: 'CT',
    type: 'private',
    website: 'https://art.yale.edu',
    social: { instagram: 'https://www.instagram.com/yaleschoolofart/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BA in Art (Studio: Painting/Printmaking, Sculpture, Photography, Graphic Design)',

    tuition: 64700,
    roomBoard: 17400,
    totalCOA: 82100,
    costLabel: 'Private — need-blind; meets 100% demonstrated need (avg aid ~$70K)',
    caAdvantage: false,

    acceptanceRate: '~4% (extremely selective)',
    portfolioRequired: true,
    portfolioNotes: 'Arts supplement required. Yale awards a BA, not a BFA — one of very few schools at this level.',
    applicationDeadlines: 'EA: Nov 1 / RD: Jan 2',
    testOptional: false,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 1,

    highlights: [
      'Consistently ranked #1 fine arts program in the US (US News)',
      'Need-blind admission — actual net cost is often far below sticker price',
      'Access to Yale University Art Gallery and world-class faculty',
      'Awards BA (not BFA) but with graduate-level resources'
    ],
  },

  {
    id: 'risd',
    name: 'Rhode Island School of Design',
    shortName: 'RISD',
    location: 'Providence, RI',
    state: 'RI',
    type: 'private',
    website: 'https://www.risd.edu',
    social: { instagram: 'https://www.instagram.com/risd1877/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Graphic Design, Digital + Media (MFA), Industrial Design, Illustration',
    visualFineArtsPrograms: 'BFA Painting, Sculpture, Printmaking, Ceramics, Jewelry + Metalsmithing, Glass, Textiles, Photography, Illustration',

    tuition: 56680,
    roomBoard: 20600,
    totalCOA: 77280,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '19%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio + drawing test. One of the most rigorous art school portfolios in the country.',
    applicationDeadlines: 'EA: Nov 1 / RD: Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 1,
    visualFineArtsRank: 2,

    highlights: [
      'Ranked #1 art and design school in the US by multiple outlets',
      '30+ BFA concentrations — one of the broadest offerings anywhere',
      'Rigorous foundation year before specialization',
      'Providence is 1 hr from Boston, 4 hrs from NYC'
    ],
  },

  {
    id: 'saic',
    name: 'School of the Art Institute of Chicago',
    shortName: 'SAIC',
    location: 'Chicago, IL',
    state: 'IL',
    type: 'private',
    website: 'https://www.saic.edu',
    social: { instagram: 'https://www.instagram.com/saicpics/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Art and Technology Studies, Film/Video/New Media & Animation, Sound, Graphic Design',
    visualFineArtsPrograms: 'BFA Painting, Drawing, Sculpture, Printmaking, Photography, Ceramics, Fiber & Material Studies',

    tuition: 54600,
    roomBoard: 18860,
    totalCOA: 73460,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '69%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required. Conceptual strength and process documentation valued as highly as technical skill.',
    applicationDeadlines: 'EA: Nov 1 / RD: Jan 15',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 9,
    visualFineArtsRank: 3,

    highlights: [
      'Ranked #2 nationally for fine arts (US News)',
      'Adjacent to the Art Institute of Chicago — world-class collections daily',
      'Intensely interdisciplinary; cross-department work encouraged',
      'Known for producing conceptually rigorous, critically engaged artists'
    ],
  },

  {
    id: 'cooperunion',
    name: 'Cooper Union',
    shortName: 'Cooper Union',
    location: 'New York City, NY',
    state: 'NY',
    type: 'private',
    website: 'https://www.cooper.edu',
    social: { instagram: 'https://www.instagram.com/thecooperunion/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Fine Arts (Painting, Drawing, Sculpture, Photography, Printmaking, Video, Performance)',

    tuition: 46600,
    roomBoard: 24000,
    totalCOA: 70600,
    costLabel: 'Private — all students receive 50% scholarship (~$23,300); need-based aid on top',
    caAdvantage: false,

    acceptanceRate: '~12% (extremely selective)',
    portfolioRequired: true,
    portfolioNotes: 'Highly selective portfolio review. Home test required. One of the most competitive fine arts admissions in the US.',
    applicationDeadlines: 'ED: Dec 1 / RD: Jan 10',
    testOptional: false,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 5,

    highlights: [
      'All admitted students receive a 50% tuition scholarship (~$23,300 value) — need-based aid reduces cost further',
      'Historically full-scholarship school; still one of the most financially accessible elite programs',
      'Manhattan location — surrounded by the world\'s most active art market',
      'Extremely selective; admission is a significant credential in itself'
    ],
  },

  {
    id: 'parsons',
    name: 'Parsons School of Design (The New School)',
    shortName: 'Parsons',
    location: 'New York City, NY',
    state: 'NY',
    type: 'private',
    website: 'https://www.newschool.edu/parsons',
    social: { instagram: 'https://www.instagram.com/parsonsdesign/' },
    categories: ['digital_arts'],

    digitalArtsPrograms: 'BFA Communication Design, BFA Design & Technology, BFA Strategic Design & Management',
    visualFineArtsPrograms: '',

    tuition: 57408,
    roomBoard: 21000,
    totalCOA: 78408,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '51%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio + creative challenge required. Strong preference for conceptual + craft blend.',
    applicationDeadlines: 'EA: Nov 1 / RD: Jan 15',
    testOptional: true,

    manga: false,
    mangaNote: 'Comics/Graphic Narrative minor available',

    digitalArtsRank: 5,
    visualFineArtsRank: null,

    highlights: [
      'Ranked #1 design school in the US and Americas by QS World University Rankings (multiple years)',
      'NYC location — unmatched design industry access',
      'BFA Design & Technology is a leading interactive/digital program',
      'Strong connections to fashion, advertising, and tech industries'
    ],
  },

  {
    id: 'pratt',
    name: 'Pratt Institute',
    shortName: 'Pratt',
    location: 'Brooklyn, NY',
    state: 'NY',
    type: 'private',
    website: 'https://www.pratt.edu',
    social: { instagram: 'https://www.instagram.com/prattinstitute/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Digital Arts, Communications Design, Art + Technology',
    visualFineArtsPrograms: 'BFA Fine Arts (Drawing, Painting, Sculpture, Photography, Printmaking)',

    tuition: 58458,
    roomBoard: 18816,
    totalCOA: 77274,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '52%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required (10-20 works). Sketchbook and process work encouraged.',
    applicationDeadlines: 'EA: Nov 1 / RD: Jan 5',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 11,
    visualFineArtsRank: 7,

    highlights: [
      'Ranked #4 in the US by QS World University Rankings for Art & Design',
      'Brooklyn campus in historic Pratt Institute District — vibrant creative neighborhood',
      '13 BFA programs across art, design, and architecture',
      'Strong alumni presence in NYC galleries, studios, and agencies'
    ],
  },

  {
    id: 'sva',
    name: 'School of Visual Arts',
    shortName: 'SVA',
    location: 'New York City, NY',
    state: 'NY',
    type: 'private',
    website: 'https://sva.edu',
    social: { instagram: 'https://www.instagram.com/svanyc/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Computer Art & Animation, BFA Design, BFA Comics ⭐',
    visualFineArtsPrograms: 'BFA Fine Arts (Painting, Drawing, Sculpture, New Media); BFA Illustration; BFA Comics ⭐',

    tuition: 45780,
    roomBoard: 24000,
    totalCOA: 69780,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '75%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required. Comics BFA requires sequential story samples.',
    applicationDeadlines: 'Rolling; priority Dec 1',
    testOptional: true,

    manga: true,
    mangaNote: '⭐ BFA in Comics — dedicated sequential art program explicitly includes manga alongside Western comics.',

    digitalArtsRank: 7,
    visualFineArtsRank: 9,

    highlights: [
      'One of only a few schools with a dedicated BFA in Comics (manga-inclusive)',
      'Manhattan location — alumni at Apple, Google, Disney, Epic Games, Marvel',
      'Lower tuition than comparable NYC private art schools',
      '700+ BFA/MFA students in Fine Arts and Design departments combined'
    ],
  },

  {
    id: 'mica',
    name: 'Maryland Institute College of Art',
    shortName: 'MICA',
    location: 'Baltimore, MD',
    state: 'MD',
    type: 'private',
    website: 'https://www.mica.edu',
    social: { instagram: 'https://www.instagram.com/marylandinstitutecollegeofart/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Interactive Arts, Graphic Design, Animation; Illustration with Sequential Art track ⭐',
    visualFineArtsPrograms: 'BFA Drawing, Painting, Photography, Printmaking, Fibers, Ceramics; Illustration (Sequential Art track ⭐)',

    tuition: 55574,
    roomBoard: 16022,
    totalCOA: 71596,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '65%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required (10-15 works). Process work and sketchbooks appreciated.',
    applicationDeadlines: 'EA: Dec 1 / RD: Feb 1',
    testOptional: true,

    manga: true,
    mangaNote: '⭐ Illustration BFA has a dedicated Sequential Art track covering manga, comics, and graphic novels.',

    digitalArtsRank: 13,
    visualFineArtsRank: 8,

    highlights: [
      'Top 10 fine arts college in the US (multiple ranking sources)',
      'Sequential Art track in Illustration BFA formally includes manga',
      'Baltimore is an affordable, artistically active city; DC museums are 45 min away',
      'Strong visiting artist program and active alumni network'
    ],
  },

  {
    id: 'cmu',
    name: 'Carnegie Mellon University',
    shortName: 'CMU',
    location: 'Pittsburgh, PA',
    state: 'PA',
    type: 'private',
    website: 'https://www.cmu.edu/cfa/art',
    social: { instagram: 'https://www.instagram.com/cmuschoolofart/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Art (Painting, Drawing, Sculpture) + unique access to CS/robotics/media lab resources',
    visualFineArtsPrograms: 'BFA Art (Painting, Drawing, Sculpture, Photography, Printmaking)',

    tuition: 63829,
    roomBoard: 16700,
    totalCOA: 80529,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '~11% overall (art school competitive within)',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required; conceptual development and interdisciplinary thinking valued.',
    applicationDeadlines: 'EA: Nov 1 / RD: Jan 3',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 8,
    visualFineArtsRank: 10,

    highlights: [
      'World-class intersection of art, technology, and critical theory',
      'Access to robotics labs, fabrication centers, and the CMU Media Lab',
      'Highly selective; strong research university resources',
      'Entertainment Technology Center (ETC) is a top game design/interactive program'
    ],
  },

  {
    id: 'scad',
    name: 'Savannah College of Art and Design',
    shortName: 'SCAD',
    location: 'Savannah, GA (+ Atlanta, online)',
    state: 'GA',
    type: 'private',
    website: 'https://www.scad.edu',
    social: { instagram: 'https://www.instagram.com/scaddotedu/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Animation, Interactive Design & Game Development, Motion Media, VFX, UX Design',
    visualFineArtsPrograms: 'BFA Painting, Drawing, Photography, Sculpture, Sequential Art ⭐',

    tuition: 41445,
    roomBoard: 16100,
    totalCOA: 57545,
    costLabel: 'Private — same for all students (lowest private tuition on this list)',
    caAdvantage: false,

    acceptanceRate: '69%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required. Sequential Art applicants should include sequential/narrative work.',
    applicationDeadlines: 'Rolling admissions; priority Feb 1',
    testOptional: true,

    manga: true,
    mangaNote: '⭐ World\'s FIRST university to offer BFA and MFA in Sequential Art — includes manga, comics, graphic novels, and storyboarding. Philadelphia Weekly called it "the Harvard of comics."',

    digitalArtsRank: 6,
    visualFineArtsRank: 14,

    highlights: [
      'World\'s first BFA/MFA in Sequential Art — manga explicitly in curriculum',
      'Animation Career Review ranks SCAD #1 across 7 digital media categories',
      'Named #1 Design University in the Americas by Red Dot (2025)',
      'Lowest tuition of the major private art schools on this list'
    ],
  },

  {
    id: 'ringling',
    name: 'Ringling College of Art and Design',
    shortName: 'Ringling',
    location: 'Sarasota, FL',
    state: 'FL',
    type: 'private',
    website: 'https://www.ringling.edu',
    social: { instagram: 'https://www.instagram.com/ringlingcollege/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Computer Animation, Game Art, Motion Design, VFX + Visual Effects',
    visualFineArtsPrograms: 'BFA Fine Arts; BFA Illustration',

    tuition: 47430,
    roomBoard: 14000,
    totalCOA: 61430,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '62%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required. Animation applicants should include life drawings and animation samples.',
    applicationDeadlines: 'Priority: Dec 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 12,
    visualFineArtsRank: 25,

    highlights: [
      'Repeatedly ranked #1 animation school globally by Animation Career Review',
      'Alumni at Pixar, DreamWorks, EA, ILM, Disney',
      'Very high graduate employment rates',
      'Sarasota arts scene is active; close to Tampa / Orlando'
    ],
  },

  {
    id: 'rit',
    name: 'Rochester Institute of Technology',
    shortName: 'RIT',
    location: 'Rochester, NY',
    state: 'NY',
    type: 'private',
    website: 'https://www.rit.edu',
    social: { instagram: 'https://www.instagram.com/rittigers/' },
    categories: ['digital_arts'],

    digitalArtsPrograms: 'BFA Film & Animation, BFA Graphic Design, BFA Game Design & Development, BFA Imaging Arts',
    visualFineArtsPrograms: '',

    tuition: 57014,
    roomBoard: 16178,
    totalCOA: 73192,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '71%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required for art/design programs. Co-op portfolio prep support available.',
    applicationDeadlines: 'EA: Nov 1 / RD: Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 14,
    visualFineArtsRank: null,

    highlights: [
      'One of the strongest programs combining technical rigor with creative arts',
      'Co-op program — students complete multiple paid industry work terms',
      'One of the largest game design programs in the US',
      'High job placement rates; strong industry partnerships'
    ],
  },

  {
    id: 'nyutisch',
    name: 'NYU Tisch School of the Arts',
    shortName: 'NYU Tisch',
    location: 'New York City, NY',
    state: 'NY',
    type: 'private',
    website: 'https://tisch.nyu.edu',
    social: { instagram: 'https://www.instagram.com/nyutisch/' },
    categories: ['digital_arts'],

    digitalArtsPrograms: 'BFA Film & Television, BFA Interactive Media Arts, BFA Game Design',
    visualFineArtsPrograms: '',

    tuition: 60438,
    roomBoard: 26000,
    totalCOA: 86438,
    costLabel: 'Private — NYC housing makes this the most expensive on the list',
    caAdvantage: false,

    acceptanceRate: '~21% (Tisch-specific)',
    portfolioRequired: true,
    portfolioNotes: 'Tisch requires a creative supplement / audition or portfolio depending on program.',
    applicationDeadlines: 'EA: Nov 1 / RD: Jan 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 15,
    visualFineArtsRank: null,

    highlights: [
      'World-renowned performing and media arts school within a major research university',
      'Game Center is one of the most respected game design programs in the country',
      'NYC location — unmatched film, TV, and media industry proximity',
      'Note: NYC housing significantly inflates total cost of attendance'
    ],
  },

  // ─── NATIONAL PUBLIC (out-of-state for CA students) ─────────────────────

  {
    id: 'vcu',
    name: 'VCU School of the Arts (VCUarts)',
    shortName: 'VCUarts',
    location: 'Richmond, VA',
    state: 'VA',
    type: 'public-oos',
    website: 'https://arts.vcu.edu',
    social: { instagram: 'https://www.instagram.com/vcuarts/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Kinetic Imaging, Graphic Design, Photography + Film',
    visualFineArtsPrograms: 'BFA Painting + Printmaking, Sculpture + Extended Media, Ceramics, Craft + Material Studies, Photography + Film, Fibers, Jewelry + Metalwork',

    tuition: 35994,
    roomBoard: 15016,
    totalCOA: 51010,
    costLabel: 'Public (out-of-state for CA): ~$35,994/yr tuition',
    caAdvantage: false,

    acceptanceRate: '~77% overall; art programs competitive',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio review required for art programs. Competitive within a large applicant pool.',
    applicationDeadlines: 'Priority: Dec 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: 16,
    visualFineArtsRank: 4,

    highlights: [
      'Ranked #1 public art university in the US and #2 overall by US News',
      '16 BFA programs — one of the broadest fine arts offerings in the country',
      'At out-of-state cost it\'s comparable to mid-range private schools, but with public university resources',
      'Richmond\'s art scene is surprisingly vibrant and affordable'
    ],
  },

  {
    id: 'tyler',
    name: 'Tyler School of Art and Architecture (Temple University)',
    shortName: 'Tyler / Temple',
    location: 'Philadelphia, PA',
    state: 'PA',
    type: 'public-oos',
    website: 'https://tyler.temple.edu',
    social: { instagram: 'https://www.instagram.com/tyler_artandarchitecture/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Ceramics, Fibers + Material Studies, Jewelry + Metalsmithing, Painting, Printmaking, Sculpture, Photography + Film',

    tuition: 37446,
    roomBoard: 16748,
    totalCOA: 54194,
    costLabel: 'Public (out-of-state for CA): ~$37,446/yr tuition',
    caAdvantage: false,

    acceptanceRate: '~55% overall',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required for BFA art programs.',
    applicationDeadlines: 'Priority: Jan 15',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 11,

    highlights: [
      'One of the largest NASAD-accredited fine arts schools in the Northeast',
      'Exceptional breadth of craft and studio offerings including jewelry/metalsmithing and fibers',
      'Philadelphia museums (PMA, ICA, Barnes Foundation) and proximity to NYC',
      'Temple\'s Rome campus available for study abroad'
    ],
  },

  {
    id: 'massart',
    name: 'Massachusetts College of Art and Design',
    shortName: 'MassArt',
    location: 'Boston, MA',
    state: 'MA',
    type: 'public-oos',
    website: 'https://www.massart.edu',
    social: { instagram: 'https://www.instagram.com/massartboston/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Painting, Sculpture, Printmaking, Ceramics, Fibers, Photography + 12 more BFA programs (18 total)',

    tuition: 35270,
    roomBoard: 15900,
    totalCOA: 51170,
    costLabel: 'Public (out-of-state for CA): ~$35,270/yr tuition',
    caAdvantage: false,

    acceptanceRate: '73%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required. Accepts a wide range of media and skill levels.',
    applicationDeadlines: 'Priority: Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 15,

    highlights: [
      'The ONLY publicly-funded freestanding art college in the US',
      '18 BFA programs — extraordinary breadth for any art school',
      'Fenway location: MFA Boston and Isabella Stewart Gardner Museum are walking distance',
      'Solid out-of-state value for the caliber of program'
    ],
  },

  {
    id: 'kcai',
    name: 'Kansas City Art Institute',
    shortName: 'KCAI',
    location: 'Kansas City, MO',
    state: 'MO',
    type: 'private',
    website: 'https://www.kcai.edu',
    social: { instagram: 'https://www.instagram.com/kcartinstitute/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Ceramics, Fiber, Painting, Printmaking, Sculpture; BFA Illustration (Sequential Storytelling)',

    tuition: 44150,
    roomBoard: 14350,
    totalCOA: 58500,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '58%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required.',
    applicationDeadlines: 'Priority: Feb 1',
    testOptional: true,

    manga: true,
    mangaNote: '⭐ Illustration BFA includes Visual/Sequential Storytelling courses with manga-adjacent content. KCAI alumni include Walt Disney.',

    digitalArtsRank: null,
    visualFineArtsRank: 16,

    highlights: [
      'Founded 1885; alumni include Walt Disney',
      'Premier dedicated fine arts college in the Midwest',
      'Exceptional studio facilities and active visiting artist program',
      'The Nelson-Atkins Museum of Art (world-class) is nearby'
    ],
  },

  {
    id: 'stamps',
    name: 'Stamps School of Art & Design (University of Michigan)',
    shortName: 'UMich / Stamps',
    location: 'Ann Arbor, MI',
    state: 'MI',
    type: 'public-oos',
    website: 'https://stamps.umich.edu',
    social: { instagram: 'https://www.instagram.com/umstamps/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Interdisciplinary Studio Arts (Ceramics, Drawing, Painting, Photography, Printmaking, Sculpture, Fibers, Textiles)',

    tuition: 55367,
    roomBoard: 15300,
    totalCOA: 70667,
    costLabel: 'Public (out-of-state for CA): ~$55,367/yr (comparable to expensive private schools)',
    caAdvantage: false,

    acceptanceRate: '~17% overall (Stamps competitive)',
    portfolioRequired: true,
    portfolioNotes: 'Arts portfolio supplement required. Competitive within UMich\'s already-selective admissions.',
    applicationDeadlines: 'EA: Nov 1 / RD: Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 17,

    highlights: [
      'Part of one of the top public research universities in the US',
      'Strong interdisciplinary model — range widely before specializing',
      'Ann Arbor has a vibrant arts scene; strong alumni network',
      'Note: OOS cost is among the highest on this list — comparable to elite private schools'
    ],
  },

  {
    id: 'rutgers',
    name: 'Rutgers University — Mason Gross School of the Arts',
    shortName: 'Rutgers / Mason Gross',
    location: 'New Brunswick, NJ',
    state: 'NJ',
    type: 'public-oos',
    website: 'https://masongross.rutgers.edu',
    social: { instagram: 'https://www.instagram.com/mgsarutgers/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Visual Arts (Ceramics, Drawing, Painting, Photography, Printmaking, Sculpture)',

    tuition: 32189,
    roomBoard: 17000,
    totalCOA: 49189,
    costLabel: 'Public (out-of-state for CA): ~$32,189/yr tuition',
    caAdvantage: false,

    acceptanceRate: '~67% overall',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio review required for BFA acceptance.',
    applicationDeadlines: 'Priority: Dec 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 14,

    highlights: [
      'Top public university fine arts program in the Northeast',
      '40 minutes from NYC — BFA graduates regularly exhibit in New York galleries',
      'Active visiting artist program brings major figures to campus',
      'Reasonable OOS cost relative to NJ/NYC region'
    ],
  },

  {
    id: 'syracuse',
    name: 'Syracuse University — College of Visual & Performing Arts',
    shortName: 'Syracuse',
    location: 'Syracuse, NY',
    state: 'NY',
    type: 'private',
    website: 'https://vpa.syr.edu',
    social: { instagram: 'https://www.instagram.com/su_vpa/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Fine Arts (Ceramics, Illustration, Painting, Photography, Printmaking, Sculpture, Fibers)',

    tuition: 61254,
    roomBoard: 18484,
    totalCOA: 79738,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '~60%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required.',
    applicationDeadlines: 'ED: Nov 15 / RD: Jan 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 19,

    highlights: [
      'Study abroad semester in Florence, Italy available — direct access to Renaissance art and European culture',
      'Comprehensive fine arts offerings at a major research university',
      'Strong faculty of active exhibiting artists',
      'Note: high sticker price; substantial merit scholarships available'
    ],
  },

  {
    id: 'bu',
    name: 'Boston University — College of Fine Arts',
    shortName: 'Boston University',
    location: 'Boston, MA',
    state: 'MA',
    type: 'private',
    website: 'https://www.bu.edu/cfa',
    social: { instagram: 'https://www.instagram.com/buarts/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Studio Arts (Drawing, Painting, Printmaking, Sculpture)',

    tuition: 63584,
    roomBoard: 18584,
    totalCOA: 82168,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '~57%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required. Strong emphasis on traditional studio skills.',
    applicationDeadlines: 'EA: Nov 1 / RD: Jan 4',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 24,

    highlights: [
      'Studio arts within a major research university with access to Boston\'s museum culture',
      'MFA Boston, ICA, and Harvard Art Museums all nearby',
      'Intimate program with strong faculty of practicing artists',
      'Strong pipeline to graduate art programs nationally'
    ],
  },

];

// Helper: get schools for a specific category, sorted by rank
function getByCategory(category) {
  return SCHOOLS
    .filter(s => s.categories.includes(category))
    .sort((a, b) => {
      const rankA = category === 'digital_arts' ? a.digitalArtsRank : a.visualFineArtsRank;
      const rankB = category === 'digital_arts' ? b.digitalArtsRank : b.visualFineArtsRank;
      if (rankA === null && rankB === null) return 0;
      if (rankA === null) return 1;
      if (rankB === null) return -1;
      return rankA - rankB;
    });
}

// Helper: format cost for CA student perspective
function formatCost(school) {
  if (school.type === 'uc' || school.type === 'csu') {
    return `$${school.tuition.toLocaleString()}/yr in-state`;
  }
  return `$${school.tuition.toLocaleString()}/yr`;
}
