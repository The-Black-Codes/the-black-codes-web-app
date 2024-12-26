import { useEffect, useState } from 'react';
import './Navbar.css';
import MobileView from './Views/MobileView';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [isAdminPage, setIsAdminPage] = useState(false);
  const { logout, isAuthenticated } = useAuth0();
  const adminIcon = require('../../../icons/icons8-admin-50.png');
  const logOutIcon = require('../../../icons/icons8-logout-100.png');
  const adminSectionClass = isAdminPage ? 'admin-nav-signed-in' : 'admin-nav-signed-in-home'

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setMobileView(true)
        : setMobileView(false);
    };
    if (window.location.pathname === '/admin') {
      setIsAdminPage(true);
    }

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const view = mobileView ? 'hamburger' : 'navbar-container';

  return (
    <div className={view}>
      {mobileView ? (
        <MobileView isAdminPage={isAdminPage} />
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
          {!isAuthenticated ? null : (
            <>
              |
              <div className={adminSectionClass}>
                <a
                  onClick={() =>
                    logout({
                      logoutParams: {
                        returnTo: window.location.origin,
                      },
                    })
                  }
                >
                  <img id="logoutIcon" src={logOutIcon} alt="log out" />
                </a>
                {isAdminPage ? null : (
                  <a href={`${window.location.origin}/admin`}>
                    <img id="adminPageIcon" src={adminIcon} alt="admin page" />
                  </a>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
