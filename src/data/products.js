/* eslint-disable no-unused-vars */
import prod1 from '../img/dehydrated-garlic-flakes-supplier.jpg';
import prod2 from '../img/DRIED-WHITE-ONION-FLAKES.jpg';
import prod3 from '../img/91DyTnfFwtL.jpg';
import prod4 from '../img/1-12-1.jpg';
import prod5 from '../img/1-1.jpeg';
import prod6 from '../img/71vlBrYw5kL.jpg';
import prod7 from '../img/1-14.jpg';
import prod8 from '../img/1-13.jpg';
import prod9 from '../img/1-12-scaled.jpg';
import prod10 from '../img/1.jpeg';
import prod11 from '../img/dried-spinach-leaf-1663919429-6554279.jpg';
import prod12 from '../img/1-11.jpg';
import prod13 from '../img/dried-senna-leaves-500x500-1.webp';
import prod14 from '../img/1-10.jpg';
import prod15 from '../img/1-9.jpg';
import prod16 from '../img/1-8.jpg';
import prod17 from '../img/21297p__33295.1299860271.1280.1280.jpg';
import prod18 from '../img/dried-moringa-lavender-by-the-bay_460x-300x300.jpg';
import prod19 from '../img/lemon_balm_2019-02-04__92395.jpg';
import prod20 from '../img/1-7.jpg';
import prod21 from '../img/moroheiya1-scaled.jpg';
import prod22 from '../img/1-6.jpg';
import prod23 from '../img/1-5.jpg';
import prod24 from '../img/1-4.jpg';
import prod25 from '../img/Seeds-fenugreek.jpeg';
import prod26 from '../img/2-4.jpg';
import prod27 from '../img/2-3.jpg';
import prod28 from '../img/2-2.jpg';
import prod29 from '../img/1-3.jpg';
import prod30 from '../img/2-1.jpg';
import prod31 from '../img/2-300x300.png';
import Aos from 'aos';

export const products = [
  {
    id: 1,
    name: "Dehydrated Garlic",
    scientificName: "Allium sativum",
    category: "Dehydrated",
    image: prod1,
    status: "Organic",
    availableForms: ["Whole", "Powder"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 2,
    name: "Dehydrated Onion",
    scientificName: "Allium cepa",
    category: "Dehydrated",
    image: prod2,
    status: "Conventional",
    availableForms: ["Kibbled", "Minced", "Granules", "Powder"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 3,
    name: "Liquorice Roots",
    scientificName: "Glycerriza glabra",
    category: "Roots",
    image: prod3,
    status: "Organic",
    availableForms: ["Whole", "Cut", "TBC"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 4,
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    category: "Herbs",
    image: prod4,
    status: "Organic",
    availableForms: ["Cut (different sizes)", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 5,
    name: "Lemon Grass",
    scientificName: "Cymbopogon citratus",
    category: "Herbs",
    image: prod5,
    status: "Organic",
    availableForms: ["Cut (different sizes)", "TBC", "Powder"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 6,
    name: "Verbascum (Mullein)",
    scientificName: "Verbascum thapsus",
    category: "Flowers",
    image: prod6,
    status: "Conventional",
    availableForms: ["Flowers"],
    pesticidesStatus: ["Conventional (Out of Stock)"]
  },
  {
    id: 7,
    name: "Hibiscus subdarifa",
    scientificName: "Hibiscus subdarifa",
    category: "Flowers",
    image: prod7,
    status: "Organic",
    availableForms: ["Flowers", "TBC", "Fines", "Siftings (different sizes)"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 8,
    name: "Calendula (Marigold)",
    scientificName: "Calendula officinalis",
    category: "Flowers",
    image: prod8,
    status: "Conventional",
    availableForms: ["Flowers", "Petals", "TBC", "Powder"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic (Out of Stock)"]
  },
  {
    id: 9,
    name: "Chamomila matricaria",
    scientificName: "Chamomila matricaria",
    category: "Flowers",
    image: prod9,
    status: "Conventional",
    availableForms: ["Flowers", "Whole", "Pollen", "TBC", "Stems", "Petals", "Industrial"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic (Out of Stock)"]
  },
  {
    id: 10,
    name: "Thymus vulgare",
    scientificName: "Thymus vulgare",
    category: "Herbs",
    image: prod10,
    status: "Conventional",
    availableForms: ["Rubbed", "Fines", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic (Out of Stock)"]
  },
  {
    id: 11,
    name: "Spinacia oleracea",
    scientificName: "Spinacia oleracea",
    category: "Vegetables",
    image: prod11,
    status: "Out of Stock",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional (Out of Stock)", "AS Reg. EC396/2005 (Out of Stock)", "Organic (Out of Stock)"]
  },
  {
    id: 12,
    name: "Spearmint",
    scientificName: "Mentha spicata",
    category: "Herbs",
    image: prod12,
    status: "Organic",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 13,
    name: "Senna",
    scientificName: "Senna alexandrina",
    category: "Leaves",
    image: prod13,
    status: "Conventional",
    availableForms: ["Whole leaves", "Crushed"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
  {
    id: 14,
    name: "Sage",
    scientificName: "Salvia officinalis",
    category: "Herbs",
    image: prod14,
    status: "Conventional",
    availableForms: ["Whole", "Cut", "Rubbed"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic (Out of Stock)"]
  },
  {
    id: 15,
    name: "Peppermint",
    scientificName: "Mentha piperita",
    category: "Herbs",
    image: prod15,
    status: "Organic",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 16,
    name: "Parsley (Flat & Curly)",
    scientificName: "Petroselinum crispum",
    category: "Herbs",
    image: prod16,
    status: "Conventional",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional Sun Dried", "AS Reg. EC396/2005 Sun Dried (Out of Stock)", "Conventional Machine Dried (Out of Stock)", "AS Reg. EC396/2005 Machine Dried (Out of Stock)"]
  },
  {
    id: 17,
    name: "Oregano",
    scientificName: "Origanum vulgaris",
    category: "Herbs",
    image: prod17,
    status: "Conventional",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
  {
    id: 18,
    name: "Moringa oleifera",
    scientificName: "Moringa oleifera",
    category: "Leaves",
    image: prod18,
    status: "Conventional",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
  {
    id: 19,
    name: "Melissa officinalis",
    scientificName: "Melissa officinalis",
    category: "Herbs",
    image: prod19,
    status: "Conventional",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
  {
    id: 20,
    name: "Origanum majorana",
    scientificName: "Origanum majorana",
    category: "Herbs",
    image: prod20,
    status: "Conventional",
    availableForms: ["Large cut", "Normal Cut", "Fines"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
  {
    id: 21,
    name: "Jew's Mallow (Molokhia)",
    scientificName: "Corchorus olitorious",
    category: "Leaves",
    image: prod21,
    status: "Conventional",
    availableForms: ["Whole leaves", "Crushed", "Fines", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
  {
    id: 22,
    name: "Dill",
    scientificName: "Anethum graveolens",
    category: "Herbs",
    image: prod22,
    status: "Out of Stock",
    availableForms: ["Tips", "Fines"],
    pesticidesStatus: ["Conventional Sun Dried (Out of Stock)", "AS Reg. EC396/2005 Sun Dried (Out of Stock)", "Conventional Machine Dried (Out of Stock)", "AS Reg. EC396/2005 Machine Dried (Out of Stock)"]
  },
  {
    id: 23,
    name: "Cilantro",
    scientificName: "Coriandrum sativum",
    category: "Herbs",
    image: prod23,
    status: "Out of Stock",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional Sun Dried (Out of Stock)", "AS Reg. EC396/2005 Sun Dried (Out of Stock)", "Conventional Machine Dried (Out of Stock)", "AS Reg. EC396/2005 Machine Dried (Out of Stock)"]
  },
  {
    id: 24,
    name: "Basil",
    scientificName: "Ocimum basilicum",
    category: "Herbs",
    image: prod24,
    status: "Organic",
    availableForms: ["Large cut", "Normal Cut", "Fines", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 25,
    name: "Fenugreek",
    scientificName: "Trigonella foenum-graecum",
    category: "Seeds",
    image: prod25,
    status: "Organic",
    availableForms: ["Colour sorted", "ASTA Quality", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 26,
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    category: "Seeds",
    image: prod26,
    status: "Organic",
    availableForms: ["Colour sorted", "ASTA Quality", "Cracked", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 27,
    name: "Cumin",
    scientificName: "Cuminum cyminum",
    category: "Seeds",
    image: prod27,
    status: "Conventional",
    availableForms: ["Colour sorted", "ASTA Quality", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
  {
    id: 28,
    name: "Coriander",
    scientificName: "Coriandrum sativa",
    category: "Seeds",
    image: prod28,
    status: "Conventional",
    availableForms: ["Colour sorted", "ASTA Quality", "Splits", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
  {
    id: 29,
    name: "Caraway",
    scientificName: "Carum carvi",
    category: "Seeds",
    image: prod29,
    status: "Organic",
    availableForms: ["Colour sorted", "ASTA Quality", "Cracked", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 30,
    name: "Black Cumin",
    scientificName: "Nigella sativum",
    category: "Seeds",
    image: prod30,
    status: "Organic",
    availableForms: ["Color sorted", "ASTA Quality"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005", "Organic"]
  },
  {
    id: 31,
    name: "Anise",
    scientificName: "Pimpinella anisum",
    category: "Seeds",
    image: prod31,
    status: "Conventional",
    availableForms: ["Color sorted", "ASTA Quality", "Ground"],
    pesticidesStatus: ["Conventional", "AS Reg. EC396/2005"]
  },
];
