import { Carousel } from 'react-responsive-carousel';
import tbcPanel from '../../../images/tbc_panel.png';
import tbcPanel2 from '../../../images/tbc_presentation.png';
import tbcMeeting from '../../../images/tbc_meeting.png';
import './Carousel.css';

const Hero = () => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      dynamicHeight={false}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div>
        <img src={tbcPanel} alt="panel" />
      </div>
      <div>
        <img src={tbcPanel2} alt="panel" />
      </div>
      <div>
        <img src={tbcMeeting} alt="panel" />
      </div>
    </Carousel>
  );
};

export default Hero;
