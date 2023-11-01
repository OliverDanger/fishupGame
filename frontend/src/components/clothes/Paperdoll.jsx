import { ReactSVG } from 'react-svg';

import '../../styles/clothes/Paperdoll.scss';
import pose2_fishbot from '../../assets/paperdoll/poses/pose2_fishbot.svg';

const Paperdoll = () => {

  return (
    <div className="pose-container">
      <ReactSVG
        src={pose2_fishbot}
        className='paperdoll-pose2'
        style={{ width: 200 }}
      />
    </div>
  );
};

export default Paperdoll;
