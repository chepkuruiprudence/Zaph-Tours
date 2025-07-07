import AliceMwangi from "../assets/images/Alice Mwangi.jpg"
import BrianOtieno from "../assets/images/Brian Otieno.jpg"
import CynthiaWanjiru from "../assets/images/Cynthia Wanjiru.jpg"
import DanielKimani from "../assets/images/Daniel Kimani.jpg"
import EstherNjoki from "../assets/images/Esther Njoki.jpg"

type Testmonial = {
 name: string,
 id: number,
 image: string,
 comment: string,
}

const TestmonialData: Testmonial[] = [
 {
   id: 1,
   name: 'Alice Mwangi',
   image: AliceMwangi,
   comment: 'Absolutely amazing experience — will definitely book again!',
 },
 {
   id: 2,
   name: 'Brian Otieno',
   image: BrianOtieno,
   comment: 'Customer service was top-notch. Highly recommend to my friends.',
 },
 {
   id: 3,
   name: 'Cynthia Wanjiru',
   image: CynthiaWanjiru,
   comment: 'The team was so professional, and the experience was unforgettable.',
 },
 {
   id: 4,
   name: 'Daniel Kimani',
   image: DanielKimani,
   comment: 'I loved the personalized service and attention to detail.',
 },
 {
   id: 5,
   name: 'Esther Njoki',
   image: EstherNjoki,
   comment: 'Best experience ever — already planning my next trip!',
 }
];

export default TestmonialData;