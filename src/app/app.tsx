import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Milestones from './components/Milestones/Milestones';
import Donate from './components/Donate/Donate';
import './app.css';
import Footer from './components/Footer/Footer';
import EventCalendar from './components/EventCalendar/EventCalendar';

export const App = () => {
  return (
    <div id="home" className="app-container primary-bg mx-auto max-w-custom">
      <Navbar />
      <Hero />
      <AboutUs />
      <Milestones />
      <EventCalendar />
      <Donate />
      <Footer />
    </div>
  );
};

export default App;
