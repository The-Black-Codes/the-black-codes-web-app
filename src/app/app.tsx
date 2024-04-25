import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import './app.css';
import ContactForm from './components/ContactUs/ContactUs';

export const App = () => {
  return (
    <div id="home" className="app-container primary-bg mx-auto max-w-custom">
      <Navbar />
      <Hero />
      <AboutUs />
      <ContactForm />
    </div>
  );
};

export default App;
