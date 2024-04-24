import { useEffect, useState } from 'react';
import './Milestones.css';
import pic1 from '../../../images/tbc_meeting.png';
import pic2 from '../../../images/tbc_panel.png';
import MobileView from './Views/MobileView';

const Milestones = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 640
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);
  return (
    <div id="milestones" className="p-4 milestones-container">
      <h1 className="text-white font-bold uppercase primary-header-font milestone-header">
        MILESTONES
      </h1>
      {mobileView ? (
        <MobileView />
      ) : (
        <div className="timeline-container grid items-center gap-y-5">
          {/* First Row */}
          <div className="lbc-container">
            <div className="left-blurb-container">
              <div className="milestone-blurb">
                <h2 className="text-white font-bold uppercase secondary-header-font">
                  FOUNDED
                </h2>
                <p className="text-white primary-font">
                  A blend of various influences and shaped by the historical
                  experiences of black people in the country.
                </p>
              </div>
            </div>
          </div>
          <div className="year-bubble-container">
            <div className="year-bubble">
              <h3 className="text-white font-bold uppercase secondary-header-font">
                2017
              </h3>
            </div>
          </div>
          <div></div>
          {/* Second Row */}
          <div className="lic-container">
            <div className="left-img-container">
              <img id="pic1" src={pic1} alt="" />
            </div>
          </div>
          <div className="year-bubble-container">
            <div className="year-bubble">
              <h3 className="text-white font-bold uppercase secondary-header-font">
                2019
              </h3>
            </div>
          </div>
          {/* </div> */}
          <div className="rbc-container">
            <div className="right-blurb-container">
              <div className="milestone-blurb">
                <h2 className="text-white font-bold uppercase secondary-header-font">
                  1ST HACKATHON
                </h2>
                <p className="text-white primary-font">
                  The Black Codes held their first Hackathon at Kindful.
                </p>
              </div>
            </div>
          </div>
          {/* Third Row */}
          <div className="lbc-container">
            <div className="left-blurb-container">
              <div className="milestone-blurb">
                <h2 className="text-white font-bold uppercase secondary-header-font">
                  PANEL DISCUSSION
                </h2>
                <p className="text-white primary-font">
                  On October 6th, 2022 The Black Codes held their first
                  discussion panel on the growth of black tech in Tennessee.
                </p>
              </div>
            </div>
          </div>
          <div className="year-bubble-container">
            <div className="year-bubble">
              <h3 className="text-white font-bold uppercase secondary-header-font">
                2022
              </h3>
            </div>
          </div>
          <div className="ric-container">
            <div className="right-img-container">
              <img id="pic2" src={pic2} alt="" />
            </div>
          </div>
          {/* Fourth Row */}
          <div></div>
          <div className="year-bubble-container">
            <div className="year-bubble">
              <h3 className="text-white font-bold uppercase secondary-header-font">
                2023
              </h3>
            </div>
          </div>
          <div className="rbc-container">
            <div className="right-blurb-container">
              <div className="milestone-blurb">
                <h2 className="text-white font-bold uppercase secondary-header-font">
                  INCORPORATED
                </h2>
                <p className="text-white primary-font">
                  The Black Codes became a 501(c)(3) organization on May 5th,
                  2023.
                </p>
              </div>
            </div>
          </div>
          {/* Fifth Row */}
          <div className="lbc-container">
            <div className="left-blurb-container">
              <div className="milestone-blurb">
                <h2 className="text-white font-bold uppercase secondary-header-font">
                  LAUNCH OF NEW WEBSITE
                </h2>
                <p className="text-white primary-font">
                  The Black Codes launched their new website for the public.
                </p>
              </div>
            </div>
          </div>
          <div className="year-bubble-container">
            <div className="year-bubble">
              <h3 className="text-white font-bold uppercase secondary-header-font">
                2024
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Milestones;
