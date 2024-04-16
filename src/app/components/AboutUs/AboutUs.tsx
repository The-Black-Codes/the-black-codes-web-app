import aboutUsPic from '../../../images/about_us_screenshot.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="p-4">
      <div className="flex justify-evenly justify-items-center">
        {/* CULTURE */}
        <div className="p-4">
          <h2 className="text-white font-bold uppercase primary-header-font">
            Culture
          </h2>
          <p className="mt-2 text-white primary-font">
            A blend of various influences and shaped by the historical
            experiences of black people in the country.
          </p>
        </div>

        <div className="section-separator ml-6 mr-6" />

        {/* COMMUNITY */}
        <div className="p-4">
          <h2 className="text-white font-bold uppercase primary-header-font">
            Community
          </h2>
          <p className="mt-2 text-white primary-font">
            A diverse and vibrant group of people who are connected by their
            shared cultural heritage and history
          </p>
        </div>

        <div className="section-separator ml-6 mr-6" />

        {/* CODE */}
        <div className="p-4">
          <h2 className="text-white font-bold uppercase primary-header-font">
            Code
          </h2>
          <p className="mt-2 text-white primary-font">
            Use technology as a tool for social change and bridge cultural
            divides through understanding and collaboration.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly mt-40">
        <img src={aboutUsPic} alt="Group pic" className="about-us-img" />

        <div className="text-white ml-16">
          <h2 className="text-white font-bold uppercase primary-header-font">
            About Us
          </h2>
          <p className="text-white mt-4 primary-font">
            Founded in 2017, "The Black Codes" is transforming a term once
            symbolic of oppression into a beacon of progress and creativity
            within the tech industry. As a vibrant resource hub, we stand to
            rewrite this narrative by fostering a community where black
            professionals are empowered to ascend to leadership roles in
            technology. Through our platform, we are dedicated to increasing the
            representation of minorities in tech, offering support, resources,
            and a network dedicated to our collective success. Join us in
            changing the narrative, one innovation at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;