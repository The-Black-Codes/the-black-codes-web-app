import AboutUs from '../../components/AboutUs/AboutUs'
import ContactForm from '../../components/ContactUs/ContactUs'
import Donate from '../../components/Donate/Donate'
import EventCalendar from '../../components/EventCalendar/EventCalendar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Milestones from '../../components/Milestones/Milestones'
import Navbar from '../../components/Navbar/Navbar'
import Sponsorship from '../../components/Sponsor/Sponsors'
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="primary-bg mx-auto max-w-custom">
      <Navbar />
      <Hero />
      <AboutUs />
      <ContactForm />
      <Milestones />
      <Sponsorship />
      <EventCalendar />
      <Donate />
      <Footer />
    </div>
  )
}

export default Home