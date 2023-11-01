import { ReactSVG } from 'react-svg';

import '../../styles/clothes/Paperdoll.scss';
import pose2_fishbot from '../../assets/paperdoll/poses/pose2_fishbot.svg';

const Paperdoll = () => {
  const handleSVGInjection = (svg) => {
    const paths = svg.querySelectorAll('cls-1');
    paths.forEach((path) => {
      path.setAttribute('fill', 'blue');
    });
  };


  return (
    <div className="pose-container">
      <ReactSVG
        src={pose2_fishbot}
        beforeInjection={(svg) => handleSVGInjection(svg)}
        wrapper='span'
        className='paperdoll-pose2'
        style={{ width: 200 }}
      />
      {/* <img src={pose2_fishbot} alt="Robot Paper Doll" className="paperdoll-image" /> */}
    </div>
  );
};

export default Paperdoll;
