import sponsorlogo from '../../../images/DC_Donates_logo_inverted.png' //Placeholder for sponsor's logo
import './Sponsors.css';

const Sponsorship = () => {
  return (
    <div id="sponsorship" className="p-4 flex flex-col items-center">
      {/* SPONSORSHIP */}
      <div className="p-4 section-block">
        <h2 className="text-white font-bold uppercase sponsorship-header primary-header-font">
          Sponsorships
        </h2>
        <div className="sponsor-info mt-2 text-white primary-font">
          <img src={sponsorlogo} alt="Sponsor Logo" className="sponsor-logo mb-4" />
          <div className="social-links flex mt-2">
            <a href="https://www.datacamp.com/donates" target="_blank" rel="noopener noreferrer" className="mr-4">
              <span className="sponsor-website-link">Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
