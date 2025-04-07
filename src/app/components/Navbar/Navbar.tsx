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
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#milestones">Milestones</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
            <li className="nav-item"><a href="#donate">Donate</a></li>
          </ul>
        </nav>

        </>
      )}
    </div>
  );
};

export default Navbar;
