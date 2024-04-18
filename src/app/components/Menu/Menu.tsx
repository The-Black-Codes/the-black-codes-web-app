import { bubble } from 'react-burger-menu';
import './Menu.css';

const MyMenu = bubble;

const Menu = () => {
  return (
    <MyMenu right={true} className="menu-container">
      <div>
        <a className="menu-item" href="#home">
          Home
        </a>
      </div>
      <div>
        <a className="menu-item" href="#about-us">
          About
        </a>
      </div>
      <div>
        <a className="menu-item" href="#contact-us">
          Contact
        </a>
      </div>
      <div>
        <a className="menu-item" href="#donate">
          Donate
        </a>
      </div>
    </MyMenu>
  );
};

export default Menu;
