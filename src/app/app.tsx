import AboutUs from './components/AboutUs/AboutUs';
import './app.css';
import Hero from './components/Hero/Hero';

export const App = () => {
  return (
    <div className="primary-bg mx-auto max-w-custom">
      <Hero />
      <AboutUs />
    </div>
  );
};

export default App;
