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


  // ─── ADDITIONAL CALIFORNIA UC ────────────────────────────────────────────

  {
    id: 'ucberkeley',
    name: 'UC Berkeley — Art Practice',
    shortName: 'UC Berkeley',
    location: 'Berkeley, CA',
    state: 'CA',
    type: 'uc',
    website: 'https://art.berkeley.edu',
    social: { instagram: 'https://www.instagram.com/ucberkeley/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Art Practice (Drawing, Painting, Sculpture, Photography, New Media, Performance Art)',

    tuition: 14312,
    tuitionOOS: 44066,
    roomBoard: 22000,
    totalCOA: 36000,
    totalCOAOOS: 66000,
    costLabel: '🟢 CA In-State: ~$14,312/yr tuition (OOS: ~$44,066)',
    caAdvantage: true,

    acceptanceRate: '11% overall (Art Practice is highly competitive)',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio review required after general UC admission. Sophomore transfer into BFA Art Practice is highly competitive.',
    applicationDeadlines: 'UC Filing Period: Nov 1–30',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 4,

    highlights: [
      'Top-5 fine arts program at a world-ranked research university',
      'BFA Art Practice emphasizes critical thinking and contemporary practice',
      'Access to BAMPFA and the broader Bay Area art ecosystem',
      'Apply via UC Application (ucop.edu) — Nov 30 deadline',
    ],
  },

  {
    id: 'ucsb',
    name: 'UC Santa Barbara — Art',
    shortName: 'UCSB',
    location: 'Santa Barbara, CA',
    state: 'CA',
    type: 'uc',
    website: 'https://art.ucsb.edu',
    social: { instagram: 'https://www.instagram.com/ucsantabarbara/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BA/BFA Studio Art (Painting, Drawing, Printmaking, Photography, Sculpture, New Media, Intermedia)',

    tuition: 14312,
    tuitionOOS: 44066,
    roomBoard: 21000,
    totalCOA: 35000,
    totalCOAOOS: 65000,
    costLabel: '🟢 CA In-State: ~$14,312/yr tuition (OOS: ~$44,066)',
    caAdvantage: true,

    acceptanceRate: '28%',
    portfolioRequired: false,
    portfolioNotes: 'Portfolio review recommended but not required for BA. BFA track has internal review after first year.',
    applicationDeadlines: 'UC Filing Period: Nov 1–30',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: 18,

    highlights: [
      'Stunning Pacific coast campus 100 miles north of LA',
      'College of Creative Studies offers an intensive arts track with faculty mentorship',
      'Interdisciplinary approach connecting art, media studies, and performance',
      'Apply via UC Application (ucop.edu) — Nov 30 deadline',
    ],
  },

  {
    id: 'ucsc',
    name: 'UC Santa Cruz — Art',
    shortName: 'UC Santa Cruz',
    location: 'Santa Cruz, CA',
    state: 'CA',
    type: 'uc',
    website: 'https://art.ucsc.edu',
    social: { instagram: 'https://www.instagram.com/ucsantacruz/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BA/BFA Art (Painting, Drawing, Printmaking, Photography, Sculpture, Digital Media, 3D Design)',

    tuition: 14312,
    tuitionOOS: 44066,
    roomBoard: 20500,
    totalCOA: 35000,
    totalCOAOOS: 65000,
    costLabel: '🟢 CA In-State: ~$14,312/yr tuition (OOS: ~$44,066)',
    caAdvantage: true,

    acceptanceRate: '65%',
    portfolioRequired: false,
    portfolioNotes: 'Portfolio not required for BA admission. BFA requires internal departmental review.',
    applicationDeadlines: 'UC Filing Period: Nov 1–30',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Most accessible UC campus for arts admission',
      'Redwood forest setting fosters a creative, experimental culture',
      'Faculty drawn from Bay Area and SF contemporary art scenes',
      'Close to Silicon Valley — digital media and tech-art crossover opportunities',
    ],
  },

  // ─── ADDITIONAL CALIFORNIA CSU ────────────────────────────────────────────

  {
    id: 'sonoma-state',
    name: 'Sonoma State University — Art',
    shortName: 'Sonoma State',
    location: 'Rohnert Park, CA',
    state: 'CA',
    type: 'csu',
    website: 'https://art.sonoma.edu',
    social: { instagram: 'https://www.instagram.com/sonomastate/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BA Art with Digital Media emphasis; digital photography, graphic design, media arts',
    visualFineArtsPrograms: 'BFA Studio Art (Painting, Drawing, Printmaking, Ceramics, Photography, Sculpture)',

    tuition: 7928,
    tuitionOOS: 19832,
    roomBoard: 16000,
    totalCOA: 24000,
    totalCOAOOS: 36000,
    costLabel: '🟢 CA In-State: ~$7,928/yr tuition (OOS: ~$19,832)',
    caAdvantage: true,

    acceptanceRate: '90%',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required for admission. BFA track has an internal review after first year of studio work.',
    applicationDeadlines: 'CSU Priority: Nov 30 / Final: Jan 15',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Less than 10 miles from SRHS — commute from Santa Rosa or live on campus',
      'Intimate program; faculty know students by name',
      'Affordable CSU in-state tuition with full BFA studio track',
      'Strong ceramics, printmaking, and painting studios on campus',
      'Easy connection to Sonoma County and North Bay arts community',
    ],
  },

  {
    id: 'calpoly-slo',
    name: 'Cal Poly SLO — Art & Design',
    shortName: 'Cal Poly SLO',
    location: 'San Luis Obispo, CA',
    state: 'CA',
    type: 'csu',
    website: 'https://art.calpoly.edu',
    social: { instagram: 'https://www.instagram.com/calpolyslo/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Graphic Communication (digital, print, UX, motion); BA Art & Design with Digital concentration',
    visualFineArtsPrograms: 'BFA Art & Design (Drawing, Painting, Printmaking, Photography)',

    tuition: 10728,
    tuitionOOS: 22632,
    roomBoard: 18000,
    totalCOA: 29000,
    totalCOAOOS: 41000,
    costLabel: '🟢 CA In-State: ~$10,728/yr (OOS: ~$22,632) — fees-inclusive',
    caAdvantage: true,

    acceptanceRate: '30% (impacted — more selective than most CSUs)',
    portfolioRequired: false,
    portfolioNotes: 'Portfolio not required for admission but programs are impacted and competitive. Strong academic record required.',
    applicationDeadlines: 'CSU Priority: Oct 1 (early) / Nov 30 (deadline) — highly impacted; apply early',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      '"Learn by Doing" philosophy — real production work from day one',
      'Graphic Communication nationally recognized for design education',
      'More selective than most CSUs; strong GPA matters',
      'Central Coast location — outdoor inspiration and beach proximity',
    ],
  },

  {
    id: 'sdsu',
    name: 'San Diego State University — School of Art',
    shortName: 'SDSU',
    location: 'San Diego, CA',
    state: 'CA',
    type: 'csu',
    website: 'https://art.sdsu.edu',
    social: { instagram: 'https://www.instagram.com/sdsuart/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Digital Media Arts, Computer Arts; BA Graphic Design',
    visualFineArtsPrograms: 'BFA Fine Arts (Painting, Drawing, Printmaking, Ceramics, Sculpture, Photography)',

    tuition: 7928,
    tuitionOOS: 19832,
    roomBoard: 20000,
    totalCOA: 28000,
    totalCOAOOS: 40000,
    costLabel: '🟢 CA In-State: ~$7,928/yr tuition (OOS: ~$19,832)',
    caAdvantage: true,

    acceptanceRate: '38%',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required for general admission. Individual programs may have supplemental review.',
    applicationDeadlines: 'CSU Priority: Nov 30 / Final: Jan 15',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Strong Digital Media Arts program with animation and computer arts tracks',
      'San Diego art, film, and design community with industry connections',
      'Affordable CSU in-state tuition in a vibrant coastal city',
      'Large campus with strong alumni network and career services',
    ],
  },

  {
    id: 'sfstate',
    name: 'San Francisco State University — School of Design',
    shortName: 'SF State',
    location: 'San Francisco, CA',
    state: 'CA',
    type: 'csu',
    website: 'https://design.sfsu.edu',
    social: { instagram: 'https://www.instagram.com/sfstatedesign/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Graphic Design, Design (Interaction/Experience), Animation & Visualization',
    visualFineArtsPrograms: 'BFA Fine Arts (Painting, Drawing, Printmaking, Ceramics, Photography, Sculpture)',

    tuition: 7928,
    tuitionOOS: 19832,
    roomBoard: 21000,
    totalCOA: 29000,
    totalCOAOOS: 41000,
    costLabel: '🟢 CA In-State: ~$7,928/yr tuition (OOS: ~$19,832)',
    caAdvantage: true,

    acceptanceRate: '89%',
    portfolioRequired: false,
    portfolioNotes: 'Portfolio required for School of Design applicants (graphic design, animation). Studio arts: no portfolio required at admission.',
    applicationDeadlines: 'CSU Priority: Nov 30 / Final: Jan 15',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'In the heart of San Francisco — galleries, museums, and tech industry in walking distance',
      'Strong graphic design and interaction design programs',
      'Affordable CSU tuition in one of the world\'s great creative cities',
      'Diverse, urban campus deeply connected to the Bay Area arts scene',
    ],
  },

  // ─── ADDITIONAL CALIFORNIA PRIVATE ───────────────────────────────────────

  {
    id: 'lcad',
    name: 'Laguna College of Art and Design',
    shortName: 'LCAD',
    location: 'Laguna Beach, CA',
    state: 'CA',
    type: 'private-ca',
    website: 'https://www.lcad.edu',
    social: { instagram: 'https://www.instagram.com/lcad/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Entertainment Design (Concept Art, Games, Film); BFA Illustration; BFA Graphic Design',
    visualFineArtsPrograms: 'BFA Drawing, BFA Painting, BFA Sculpture; BFA Fine Arts',

    tuition: 44940,
    roomBoard: 17000,
    totalCOA: 62000,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '85%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required for all programs. 8–15 pieces showing range and process. Entertainment Design applicants should include observational drawing.',
    applicationDeadlines: 'Rolling admissions; priority deadline Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Strong entertainment and concept art pipeline to film and game studios',
      'One hour from Hollywood — industry visits and internships built into curriculum',
      'Small community (~800 students) with focused mentorship',
      'Beautiful Laguna Beach campus steps from galleries and the ocean',
    ],
  },

  {
    id: 'academy-of-art',
    name: 'Academy of Art University',
    shortName: 'Academy of Art',
    location: 'San Francisco, CA',
    state: 'CA',
    type: 'private-ca',
    website: 'https://www.academyofart.edu',
    social: { instagram: 'https://www.instagram.com/academyofartuniversity/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Animation & VFX, Game Development, Graphic Design, Motion Pictures & TV, UI/UX Design, Illustration, Web Design',
    visualFineArtsPrograms: 'BFA Fine Art (Painting, Drawing, Photography, Fashion, Illustration)',

    tuition: 29160,
    roomBoard: 14000,
    totalCOA: 47000,
    costLabel: 'Private for-profit — same for all students; wide scholarship range',
    caAdvantage: false,

    acceptanceRate: 'Open Enrollment',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required for admission. Portfolio development is built into the curriculum.',
    applicationDeadlines: 'Rolling admissions — spring, summer, and fall starts',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'One of the largest art schools in the US — 135+ programs',
      'Career-focused curriculum with industry professionals as faculty',
      'San Francisco location provides entertainment, design, and tech industry access',
      'For-profit institution — research scholarship and financial aid options carefully',
    ],
  },

  // ─── OOS PRIVATE ART SCHOOLS ──────────────────────────────────────────────

  {
    id: 'mcad',
    name: 'Minneapolis College of Art and Design',
    shortName: 'MCAD',
    location: 'Minneapolis, MN',
    state: 'MN',
    type: 'private',
    website: 'https://mcad.edu',
    social: { instagram: 'https://www.instagram.com/mcadedu/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Graphic Design, Illustration, Motion Graphics, Interactive Media, Visualization',
    visualFineArtsPrograms: 'BFA Fine Arts (Painting, Drawing, Printmaking, Photography, Sculpture); BFA Comic Art',

    tuition: 43490,
    roomBoard: 12000,
    totalCOA: 57000,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '75%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required (12–20 pieces). Process and concept matter as much as technical finish.',
    applicationDeadlines: 'Early Action: Nov 1 / Priority: Dec 1 / Regular: Feb 15',
    testOptional: true,

    manga: true,
    mangaNote: 'BFA Comic Art — one of the strongest sequential art programs in the country; narrative and illustrative comics including manga-influenced styles.',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'One of the only dedicated BFA programs in Comic Art in the US',
      'Minneapolis has a thriving, affordable arts scene with strong gallery and design culture',
      'Small school (~700 students) with intensive studio-to-studio mentorship',
      'Merit scholarships available — average institutional aid ~$16K/yr',
    ],
  },

  {
    id: 'ccad',
    name: 'Columbus College of Art & Design',
    shortName: 'CCAD',
    location: 'Columbus, OH',
    state: 'OH',
    type: 'private',
    website: 'https://www.ccad.edu',
    social: { instagram: 'https://www.instagram.com/columbuscollegeofartdesign/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Advertising & Graphic Design, Animation, Game Design, Motion Design, UX Design',
    visualFineArtsPrograms: 'BFA Fine Arts (Painting, Drawing, Printmaking, Photography, Sculpture, Ceramics)',

    tuition: 41820,
    roomBoard: 12000,
    totalCOA: 56000,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '83%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required (10–15 pieces). Creative range valued; include process work.',
    applicationDeadlines: 'Early Action: Nov 1 / Regular: rolling through Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Strong animation and game design programs with industry partnerships',
      'Columbus growing creative, tech, and design industry hub',
      'Hands-on production curriculum from first semester',
      'Merit scholarships available for strong portfolios',
    ],
  },

  {
    id: 'cornish',
    name: 'Cornish College of the Arts',
    shortName: 'Cornish',
    location: 'Seattle, WA',
    state: 'WA',
    type: 'private',
    website: 'https://www.cornish.edu',
    social: { instagram: 'https://www.instagram.com/cornishcollegeofthearts/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Design (Interactive Design, Graphic Design, Motion Graphics); BFA Digital Art',
    visualFineArtsPrograms: 'BFA Fine Art (Painting, Drawing, Printmaking, Photography, Ceramics, Sculpture)',

    tuition: 43040,
    roomBoard: 14000,
    totalCOA: 60000,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '77%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required (12–15 pieces). Emphasis on creative risk-taking and conceptual development.',
    applicationDeadlines: 'Priority: Feb 1 / Rolling through Aug 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Seattle location — vibrant tech and design hub near Amazon, Microsoft, and Adobe',
      'Interdisciplinary arts college across fine art, design, music, and performance',
      'Strong community of working artists on faculty',
      'Pacific Northwest design scene offers industry connections and internships',
    ],
  },

  {
    id: 'meca',
    name: 'Maine College of Art & Design',
    shortName: 'MECA',
    location: 'Portland, ME',
    state: 'ME',
    type: 'private',
    website: 'https://www.meca.edu',
    social: { instagram: 'https://www.instagram.com/mecadesign/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Graphic Design; BFA Illustration; BFA Digital Media',
    visualFineArtsPrograms: 'BFA Studio Arts (Painting, Drawing, Ceramics, Printmaking, Sculpture, Photography)',

    tuition: 42520,
    roomBoard: 12000,
    totalCOA: 57000,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '80%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required (12–15 pieces); creative potential matters as much as technical finish.',
    applicationDeadlines: 'Priority: Feb 1 / Regular: rolling',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Portland, ME — affordable creative city with an active gallery and design scene',
      'Small school with close-knit faculty mentorship',
      'Strong ceramics and printmaking traditions alongside contemporary digital programs',
      'Presidential Scholarship available — up to $20K/yr for strong portfolios',
    ],
  },

  {
    id: 'alfred',
    name: 'Alfred University — School of Art and Design',
    shortName: 'Alfred',
    location: 'Alfred, NY',
    state: 'NY',
    type: 'private',
    website: 'https://www.alfred.edu/academics/colleges-schools/nyscc/',
    social: { instagram: 'https://www.instagram.com/alfreduniversity/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Electronic Integrated Arts (EIA) — experimental video, installation, interactive art',
    visualFineArtsPrograms: 'BFA Drawing, Painting, Printmaking, Photography, Ceramics, Sculpture',

    tuition: 37994,
    roomBoard: 15000,
    totalCOA: 55000,
    costLabel: 'Private — same for all students (NY State College of Ceramics has reduced tuition)',
    caAdvantage: false,

    acceptanceRate: '68%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required (10–20 pieces). Creative range and conceptual curiosity valued.',
    applicationDeadlines: 'Early Decision: Dec 1 / Regular: Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'World-renowned ceramics program at the NY State College of Ceramics',
      'Electronic Integrated Arts program is one of the most experimental in the US',
      'Rural upstate NY campus with serious, focused studio culture',
      'NYSCC (ceramics/art) offers NY State college tuition rates — lower cost option',
    ],
  },

  {
    id: 'lesley',
    name: 'Lesley University — College of Art & Design',
    shortName: 'Lesley / LUCAD',
    location: 'Cambridge, MA',
    state: 'MA',
    type: 'private',
    website: 'https://lesley.edu/college-art-design-technology',
    social: { instagram: 'https://www.instagram.com/lesleyuniversity/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Graphic Design; BFA Illustration; BFA Digital Art',
    visualFineArtsPrograms: 'BFA Fine Arts (Painting, Drawing, Photography, Ceramics, Sculpture)',

    tuition: 38440,
    roomBoard: 17000,
    totalCOA: 57000,
    costLabel: 'Private — same for all students',
    caAdvantage: false,

    acceptanceRate: '79%',
    portfolioRequired: true,
    portfolioNotes: 'Portfolio required. Creative potential and sense of inquiry valued alongside technique.',
    applicationDeadlines: 'Early Action: Nov 15 / Regular: Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Cambridge, MA — blocks from MIT and Harvard, access to world-class museum culture',
      'Interdisciplinary approach connecting art, social practice, and education',
      'Small studio program with close faculty mentorship',
      'Access to Boston\'s MFA, ICA, and thriving gallery scene',
    ],
  },

  // ─── ADDITIONAL OOS PUBLIC ART SCHOOLS ───────────────────────────────────

  {
    id: 'asu',
    name: 'Arizona State University — Herberger Institute',
    shortName: 'ASU',
    location: 'Tempe, AZ',
    state: 'AZ',
    type: 'public-oos',
    website: 'https://herbergerinstitute.asu.edu',
    social: { instagram: 'https://www.instagram.com/asuarts/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Digital Culture, Film/Video/Media Arts, Graphic Information Technology, Intermedia, Animation',
    visualFineArtsPrograms: 'BFA Art (Painting, Drawing, Printmaking, Ceramics, Sculpture, Photography)',

    tuition: 11500,
    tuitionOOS: 32950,
    roomBoard: 16000,
    totalCOA: 28000,
    totalCOAOOS: 49000,
    costLabel: 'Public OOS: ~$32,950/yr (in-state AZ: ~$11,500)',
    caAdvantage: false,

    acceptanceRate: '89%',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio for general admission. Some Herberger programs have supplemental requirements.',
    applicationDeadlines: 'Priority: Nov 1 / Regular: rolling through Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'One of the largest art schools in the US — 70+ degree programs',
      'Strong interdisciplinary programs connecting art, tech, and social practice',
      'ASU merit scholarships can significantly reduce OOS costs',
      'Phoenix growing as an arts and creative industries hub',
    ],
  },

  {
    id: 'osu-art',
    name: 'Ohio State University — Dept. of Art',
    shortName: 'Ohio State',
    location: 'Columbus, OH',
    state: 'OH',
    type: 'public-oos',
    website: 'https://art.osu.edu',
    social: { instagram: 'https://www.instagram.com/ohiostate/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'BFA Art (Digital Media, Motion Capture, Interactive Arts, Video); BFA Industrial, Interior & Visual Communication Design',
    visualFineArtsPrograms: 'BFA Art (Drawing, Painting, Printmaking, Photography, Ceramics, Sculpture, Fiber)',

    tuition: 11898,
    tuitionOOS: 32742,
    roomBoard: 14000,
    totalCOA: 26000,
    totalCOAOOS: 47000,
    costLabel: 'Public OOS: ~$32,742/yr (in-state OH: ~$11,898)',
    caAdvantage: false,

    acceptanceRate: '57%',
    portfolioRequired: false,
    portfolioNotes: 'Portfolio review after admission for BFA track. Strong work required for departmental acceptance.',
    applicationDeadlines: 'Early Action: Nov 1 / Regular: Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'One of the most comprehensive art departments in the US',
      'Cross-disciplinary connections with engineering, architecture, and film',
      'Columbus growing as a tech, design, and creative industries hub',
      'Major research university resources — museums, libraries, and visiting artist programs',
    ],
  },

  {
    id: 'uoregon',
    name: 'University of Oregon — Art & Art History',
    shortName: 'U of Oregon',
    location: 'Eugene, OR',
    state: 'OR',
    type: 'public-oos',
    website: 'https://art.uoregon.edu',
    social: { instagram: 'https://www.instagram.com/universityoforegon/' },
    categories: ['visual_fine_arts'],

    digitalArtsPrograms: '',
    visualFineArtsPrograms: 'BFA Art (Painting, Drawing, Printmaking, Ceramics, Photography, Sculpture, Digital Arts, Fibers)',

    tuition: 13278,
    tuitionOOS: 40449,
    roomBoard: 15000,
    totalCOA: 29000,
    totalCOAOOS: 55000,
    costLabel: 'Public OOS: ~$40,449/yr (in-state OR: ~$13,278)',
    caAdvantage: false,

    acceptanceRate: '81%',
    portfolioRequired: false,
    portfolioNotes: 'Portfolio review after admission for BFA. Faculty interviews and portfolio presentation required.',
    applicationDeadlines: 'Priority: Jan 15 / Regular: Feb 1',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    highlights: [
      'Pacific Northwest campus close to Portland\'s thriving arts scene',
      'Interdisciplinary Arts and Technology program merging art and computing',
      'Beautiful natural surroundings — strong tradition of landscape and environmental art',
      'Jordan Schnitzer Museum of Art on campus offers curatorial and gallery experience',
    ],
  },

  // ─── CALIFORNIA COMMUNITY COLLEGES ────────────────────────────────────────

  {
    id: 'srjc',
    name: 'Santa Rosa Junior College — Art',
    shortName: 'SRJC',
    location: 'Santa Rosa, CA',
    state: 'CA',
    type: 'cc-ca',
    website: 'https://www.santarosa.edu',
    social: { instagram: 'https://www.instagram.com/santarosajc/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'AA Art — Digital Media, Graphic Design, Photography, Illustration',
    visualFineArtsPrograms: 'AA Art — Drawing, Painting, Ceramics, Printmaking, Sculpture',

    tuition: 1380,
    roomBoard: 0,
    totalCOA: 7000,
    costLabel: '🟢 CA Community College — ~$46/unit (CA residents) · CA College Promise Grant may reduce to $0',
    caAdvantage: true,

    acceptanceRate: 'Open Enrollment',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required for admission. Build your portfolio here, then apply to 4-year schools.',
    applicationDeadlines: 'Fall enrollment: deadline June / Spring: deadline November',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    transferPath: true,
    transferNote: 'Direct transfer pathway to Sonoma State (10 min away), CSU system, and UC schools. Many SRJC students transfer to SFSU, SJSU, and UC Davis.',

    highlights: [
      'Right in Santa Rosa — stay at home, save money, build your portfolio before transferring',
      'Under $1,500/year in tuition (or free with CA College Promise Grant)',
      'Same faculty quality as 4-year programs; professional working artists teach here',
      'Transfer pathway to UC, CSU, and private art schools after 2 years',
      'Strong ceramics, printmaking, digital media, and photography studios on campus',
    ],
  },

  {
    id: 'college-of-marin',
    name: 'College of Marin — Art',
    shortName: 'College of Marin',
    location: 'Kentfield, CA',
    state: 'CA',
    type: 'cc-ca',
    website: 'https://www.marin.edu',
    social: { instagram: 'https://www.instagram.com/collegeof_marin/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'AA Art — Digital Media, Graphic Design, Photography',
    visualFineArtsPrograms: 'AA Art — Painting, Drawing, Ceramics, Printmaking, Sculpture',

    tuition: 1380,
    roomBoard: 0,
    totalCOA: 7000,
    costLabel: '🟢 CA Community College — ~$46/unit (CA residents) · CA College Promise Grant may reduce to $0',
    caAdvantage: true,

    acceptanceRate: 'Open Enrollment',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required. Build skills and portfolio for transfer to 4-year programs.',
    applicationDeadlines: 'Fall enrollment: deadline June / Spring: deadline November',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    transferPath: true,
    transferNote: 'Active transfer partnerships with CSU and UC schools. 12 miles from Santa Rosa.',

    highlights: [
      '12 miles from Santa Rosa — close to home in a picturesque Marin setting',
      'Intimate campus with small class sizes and strong faculty relationships',
      'Solid fine arts foundations: drawing, ceramics, printmaking, painting',
      'Under $1,500/year; CA College Promise Grant may reduce to $0',
    ],
  },

  {
    id: 'pcc',
    name: 'Pasadena City College — Art',
    shortName: 'Pasadena City',
    location: 'Pasadena, CA',
    state: 'CA',
    type: 'cc-ca',
    website: 'https://www.pasadena.edu/academics/divisions/art',
    social: { instagram: 'https://www.instagram.com/pasadenacitycollege/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'AA Art — Graphic Design, Illustration, Photography, Digital Media',
    visualFineArtsPrograms: 'AA Art — Painting, Drawing, Ceramics, Printmaking, Sculpture',

    tuition: 1380,
    roomBoard: 0,
    totalCOA: 8000,
    costLabel: '🟢 CA Community College — ~$46/unit (CA residents) · CA College Promise Grant may reduce to $0',
    caAdvantage: true,

    acceptanceRate: 'Open Enrollment',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required for admission. Strong feeder into major art schools.',
    applicationDeadlines: 'Fall enrollment: deadline June / Spring: deadline November',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    transferPath: true,
    transferNote: 'Adjacent to Art Center College of Design — many PCC students audit Art Center courses. Top transfer record to UCLA, OTIS, Art Center, and CSU/UC system.',

    highlights: [
      'Adjacent to Art Center College of Design — world-class proximity and some cross-enrollment',
      'Excellent transfer record to UCLA, OTIS, Art Center, and CSU/UC system',
      'Strong art history and studio arts program with dedicated galleries',
      'Gateway to the Los Angeles arts, film, and design industries',
    ],
  },

  {
    id: 'deanza',
    name: 'De Anza College — Creative Arts',
    shortName: 'De Anza',
    location: 'Cupertino, CA',
    state: 'CA',
    type: 'cc-ca',
    website: 'https://www.deanza.edu/creativearts/',
    social: { instagram: 'https://www.instagram.com/deanza_official/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'AA Digital Media Arts, Graphic Design, 3D Animation, Web Arts, Photography',
    visualFineArtsPrograms: 'AA Fine Arts (Drawing, Painting, Ceramics, Printmaking)',

    tuition: 1380,
    roomBoard: 0,
    totalCOA: 8000,
    costLabel: '🟢 CA Community College — ~$46/unit (CA residents) · CA College Promise Grant may reduce to $0',
    caAdvantage: true,

    acceptanceRate: 'Open Enrollment',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required. Strong programs in digital media and design.',
    applicationDeadlines: 'Fall enrollment: deadline June / Spring: deadline November',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    transferPath: true,
    transferNote: 'Silicon Valley location; strong transfer record to SJSU, SFSU, and UC system.',

    highlights: [
      'Silicon Valley location — tech industry internships and digital art career pathways',
      'Strong 3D animation, web design, and digital media programs',
      'Dedicated Creative Arts division with modern digital labs',
      'Under $1,500/year with transfer to SJSU, SFSU, and UC Berkeley possible',
    ],
  },

  {
    id: 'smc',
    name: 'Santa Monica College — Art',
    shortName: 'Santa Monica',
    location: 'Santa Monica, CA',
    state: 'CA',
    type: 'cc-ca',
    website: 'https://www.smc.edu/academics/divisions-departments/arts/',
    social: { instagram: 'https://www.instagram.com/smccollegeofficial/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'AA Art — Graphic Design, Digital Photography, Digital Media Arts',
    visualFineArtsPrograms: 'AA Art — Painting, Drawing, Ceramics, Printmaking, Sculpture, Photography',

    tuition: 1380,
    roomBoard: 0,
    totalCOA: 10000,
    costLabel: '🟢 CA Community College — ~$46/unit (CA residents) · CA College Promise Grant may reduce to $0',
    caAdvantage: true,

    acceptanceRate: 'Open Enrollment',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required. One of the top UCLA feeder programs in the state.',
    applicationDeadlines: 'Fall enrollment: deadline June / Spring: deadline November',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    transferPath: true,
    transferNote: 'Among the top UCLA transfer programs in California — many students transfer directly to UCLA, OTIS, Parsons, and SCAD.',

    highlights: [
      'Top UCLA feeder school — proven pathway to one of the best art schools in the country',
      'Proximity to LA studios, agencies, and galleries for internships and networking',
      'Strong arts division with dedicated galleries and visiting artist programs',
      'Under $1,500/year with clear transfer pathway to 4-year schools',
    ],
  },

  // ─── OUT-OF-STATE 2-YEAR / TRANSFER PATHWAY ──────────────────────────────

  {
    id: 'seattle-central',
    name: 'Seattle Central College — Creative Arts',
    shortName: 'Seattle Central',
    location: 'Seattle, WA',
    state: 'WA',
    type: 'cc-oos',
    website: 'https://seattlecentral.edu/programs/creative-arts',
    social: { instagram: 'https://www.instagram.com/seattlecentralcollege/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'AA Graphic Design, Digital Photography, Media Arts & Design',
    visualFineArtsPrograms: 'AA Fine Arts (Drawing, Painting, Photography, Ceramics)',

    tuition: 5064,
    roomBoard: 18000,
    totalCOA: 28000,
    costLabel: 'WA Out-of-State: ~$5,064/yr tuition',
    caAdvantage: false,

    acceptanceRate: 'Open Enrollment',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required. Creative arts programs are open enrollment with transfer pathway.',
    applicationDeadlines: 'Quarter enrollment — application deadlines in June (fall), November (winter)',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    transferPath: true,
    transferNote: 'Transfer pathway to Cornish College of the Arts, University of Washington, and other Pacific Northwest schools.',

    highlights: [
      'Seattle\'s creative hub — proximity to Amazon, Microsoft, Adobe, and tech design industry',
      'Strong graphic design and media arts programs',
      'Transfer pathway to Cornish College and University of Washington',
      'Pacific Northwest outdoor and art scene offers unique creative inspiration',
    ],
  },

  {
    id: 'phoenix-college',
    name: 'Phoenix College — Art',
    shortName: 'Phoenix College',
    location: 'Phoenix, AZ',
    state: 'AZ',
    type: 'cc-oos',
    website: 'https://www.phoenixcollege.edu/programs/art',
    social: { instagram: 'https://www.instagram.com/phoenixcollegephotos/' },
    categories: ['digital_arts', 'visual_fine_arts'],

    digitalArtsPrograms: 'AA Art — Graphic Design, Digital Media Arts, Photography',
    visualFineArtsPrograms: 'AA Art — Drawing, Painting, Ceramics, Sculpture',

    tuition: 6300,
    roomBoard: 16000,
    totalCOA: 26000,
    costLabel: 'AZ Out-of-State: ~$6,300/yr tuition',
    caAdvantage: false,

    acceptanceRate: 'Open Enrollment',
    portfolioRequired: false,
    portfolioNotes: 'No portfolio required. Art AA is designed as a transfer pathway.',
    applicationDeadlines: 'Fall enrollment: deadline June / Spring: deadline November',
    testOptional: true,

    manga: false,
    mangaNote: '',

    digitalArtsRank: null,
    visualFineArtsRank: null,

    transferPath: true,
    transferNote: 'Formal transfer agreement with Arizona State University (Herberger Institute) — step-stone pathway to ASU\'s large art program.',

    highlights: [
      'Affordable pathway to Arizona State University\'s Herberger Institute',
      'Phoenix growing as a creative and tech industry hub',
      'Formal transfer agreement with ASU — guaranteed pathway if qualifications met',
      'Year-round warm climate with strong outdoor photography and plein air tradition',
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
