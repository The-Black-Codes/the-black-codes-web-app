import './Donate.css';

const Donate = () => {
  return (
    <div id="donate" className="donate-container">
      <div className="overlay">
        <h3 className="text-white mb-10 donate-text">
          Our goal is to then leverage those skills by partnering with local
          businesses to help our members gain access to real-world scenarios and
          helping those businesses upgrade company software or technologies.{' '}
        </h3>
        <h3 className="text-white donate-text">
          By gaining the experience of working in a corporate setup, provided by
          The Black Codes, this gives volunteers the experience they need, and
          the opportunity to build out a professional portfolio they can then
          show to prospective employers. In this case, everyone wins!
        </h3>
        <button className="donate-button text-white mt-10 donate-text">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Donate;
