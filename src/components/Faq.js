
import faq from '../img/faq.png'
import '../components/frequently.css';
import Accordion from './Accordion';


export const Data = [
    {
        question: 'Has the 15 January deadline changed?',
        answer : 'Due to UK COVID-19 restrictions, the deadline for undergraduate applications has been extended to 18:00 (UK time) on Friday 29 January.'
    },
    {
        question: 'How do I apply?',
        answer : 'First you need to register for Apply using our online application service. Once you’ve registered, you’ll be able to complete your application – there’s quite a lot to fill in but you don’t have to do it all at once. We’ve got lots of information on filling in your application.'
    },
    {
        question: 'Why can’t I sign in?',
        answer : 'You will only be able to use Track when you receive a welcome email from us confirming your login details.'
    },
    {
        question: 'What are entry requirements?',
        answer : 'Entry requirements vary between universities and colleges – a full list of universities and colleges and their minimum entry criteria can be found in our search tool. If you are unsure you meet a university/colleges criteria, it is best to contact their admissions team for further guidance.'
    },
    {
        question: 'How do I get a reference?',
        answer : 'The reference process will vary depending on how you choose to apply; you can either register and apply through a school, college or centre that is registered with UCAS, or apply as an individual.'
    },
    {
        question: 'How can I make a change to my application?',
        answer : 'This depends on the type of change you want to make. You can change your address, phone number, and email address in Track.'
    },
  ]

export default function Faq () {
    return (
        <div class="courses-container">
        <div class="course">
            <div class="course-preview">
                <img className="img" src={faq}></img>
            </div>
            <div class="course-info">
                <h2>FAQ</h2>
                <Accordion/>
                
            </div>
        </div>
    </div>
        
    );
};
