import { useEffect, useState } from 'react';
import './Navbar.css';
import MobileView from './Views/MobileView';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const view = mobileView ? 'hamburger' : 'navbar-container';

  return (
    <div className={view}>
      {mobileView ? (
        <MobileView />
      ) : (
        <>
          <div>
            <a href="#home">Home</a>
          </div>
          <div>
            <a href="#about-us">About</a>
          </div>
          <div>
            <a href="#milestones">Milestones</a>
          </div>
          <div>
            <a href="#contact-us">Contact Us</a>
          </div>
          <div>
            <a href="#donate">Donate</a>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
