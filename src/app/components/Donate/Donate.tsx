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
          <a href="https://nonprofit.resilia.com/donate?id=f8011283da89e79337584f47ccf1b54e2d3a7838cb6261549ee505f60ae16980" target="_blank">Donate</a>
        </button>
      </div>
    </div>
  );
};

export default Donate;
