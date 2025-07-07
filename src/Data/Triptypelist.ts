import Honeymoon1 from '../assets/images/Honeymoon1.jpg'
import Honeymoon2 from '../assets/images/Honeymoon2.jpg'
import Honeymoon3 from '../assets/images/Honeymoon3.jpg'
import Honeymoon4 from '../assets/images/Honeymoon4.jpg'
import Family1 from '../assets/images/Family1.jpg'
import Family2 from '../assets/images/Family2.jpg'
import Family3 from '../assets/images/Family3.jpg'
import Family4 from '../assets/images/Family4.jpg'
import Family5 from '../assets/images/Family5.jpg'
import Adventure1 from '../assets/images/Adventure1.jpg'
import Adventure2 from '../assets/images/Adventure2.jpg'
import Adventure3 from '../assets/images/Adventure3.jpg'
import Adventure4 from '../assets/images/Adventure4.jpg'
import Adventure5 from '../assets/images/Adventure5.jpg'
import Culture1 from '../assets/images/Culture1.jpg'
import Culture2 from '../assets/images/Culture2.jpg'
import Culture3 from '../assets/images/Culture3.jpg'
import Culture4 from '../assets/images/Culture4.jpg'
import Culture5 from '../assets/images/Culture5.jpg'
import Wildlife1 from '../assets/images/Wildlife1.jpg'
import Wildlife2 from '../assets/images/Wildlife2.jpg'
import Wildlife3 from '../assets/images/Wildlife3.jpg'
import Wildlife4 from '../assets/images/Wildlife4.jpg'
import Wildlife5 from '../assets/images/Wildlife5.jpg'
import Eco1 from '../assets/images/Eco1.jpg'
import Eco2 from '../assets/images/Eco2.jpg'
import Eco3 from '../assets/images/Eco3.jpg'
import Eco4 from '../assets/images/Eco4.jpg'
import Eco5 from '../assets/images/Eco5.jpg'
import Luxury1 from '../assets/images/Luxury1.jpg'
import Luxury2 from '../assets/images/Luxury2.jpg'
import Luxury3 from '../assets/images/Luxury3.jpg'
import Luxury4 from '../assets/images/Luxury4.jpg'
import Luxury5 from '../assets/images/Luxury5.jpg'
import Beach1 from '../assets/images/Beach1.jpg'
import Beach2 from '../assets/images/Beach2.jpg'
import Beach3 from '../assets/images/Beach3.jpg'
import Beach4 from '../assets/images/Beach4.jpg'
import Beach5 from '../assets/images/Beach5.jpg'

type TripPackage = {
 id: number;
 title: string;
 images: string[];
 description: string;
 pricing: string;
};

const tripPackages: TripPackage[] = [
 {
   id: 1,
   title: 'Honeymoon',
   images: [
     Honeymoon1,
     Honeymoon2,
     Honeymoon3,
     Honeymoon4,
   ],
   description: 'Celebrate love with our tailored honeymoon packages featuring luxurious stays, romantic dinners, and breathtaking destinations to create lasting memories.',
   pricing: 'Starting from $400 per person. Early bird and off-season offers available.'
 },
 {
   id: 2,
   title: 'Family Safari',
   images: [
     Family1,
     Family2,
     Family3,
     Family4,
     Family5
   ],
   description: 'An unforgettable safari adventure for the whole family with child-friendly lodges, game drives, and nature walks tailored to all ages.',
   pricing: 'Starting from $300 per person. Kids under 5 travel free.'
 },
 {
   id: 3,
   title: 'Adventure',
   images: [
     Adventure1,
     Adventure2,
     Adventure3,
     Adventure4,
     Adventure5
   ],
   description: 'Get your adrenaline pumping with thrilling adventures like hiking, ziplining, white-water rafting, and mountain expeditions.',
   pricing: 'Starting from $250 per person.'
 },
 {
   id: 4,
   title: 'Cultural Tours',
   images: [
    Culture1,
    Culture2,
    Culture3,
    Culture4,
    Culture5
   ],
   description: 'Immerse yourself in rich local cultures, traditions, and history through guided tours of heritage sites, villages, and cultural festivals.',
   pricing: 'Starting from $220 per person.'
 },
 {
   id: 5,
   title: 'Wildlife Safaris',
   images: [
    Wildlife1,
    Wildlife2,
    Wildlife3,
    Wildlife4,
    Wildlife5
   ],
   description: 'Witness Africa’s iconic wildlife in their natural habitats through expertly guided safaris in renowned national parks.',
   pricing: 'Starting from $350 per person. Group discounts available.'
 },
 {
   id: 6,
   title: 'Eco-Tours',
   images: [
     Eco1,
     Eco2,
     Eco3,
     Eco4,
     Eco5
   ],
   description: 'Explore pristine landscapes while supporting sustainable tourism initiatives and eco-lodges designed to protect the environment.',
   pricing: 'Starting from $270 per person.'
 },
 {
   id: 7,
   title: 'Luxury Vacations',
   images: [
     Luxury1,
     Luxury2,
     Luxury3,
     Luxury4,
     Luxury5
   ],
   description: 'Indulge in 5-star experiences, exclusive beach resorts, gourmet dining, and VIP treatment at world-class destinations.',
   pricing: 'Starting from $800 per person.'
 },
 {
   id: 8,
   title: 'Beach Holidays',
   images: [
     Beach1,
     Beach2,
     Beach3,
     Beach4,
     Beach5
   ],
   description: 'Relax by the crystal-clear waters, bask in the sun, and enjoy water sports and beachside entertainment at tropical destinations.',
   pricing: 'Starting from $200 per person.'
 },
 {
   id: 9,
   title: 'Wellness Retreats',
   images: [
    Honeymoon1,
    Honeymoon2,
    Honeymoon3,
   ],
   description: 'Recharge and rejuvenate with wellness retreats offering yoga, meditation, spa treatments, and holistic therapies in serene settings.',
   pricing: 'Starting from $350 per person.'
 },
 {
   id: 10,
   title: 'Culinary Tours',
   images: [
    Adventure1,
    Adventure2,
    Adventure3,
   ],
   description: 'Savor diverse cuisines, cooking classes, and culinary experiences guided by renowned chefs and local food experts.',
   pricing: 'Starting from $250 per person.'
 }
];

export default tripPackages;