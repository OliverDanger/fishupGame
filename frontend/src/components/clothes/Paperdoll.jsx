import { ReactSVG } from 'react-svg';

import '../../styles/clothes/Paperdoll.scss';
import pose2_fishbot from '../../assets/paperdoll/poses/pose2_fishbot.svg';
import tshirt from '../../assets/paperdoll/shirts/pose2_basicTshirt.svg';

const Paperdoll = ({ userData, wearing }) => {

  return (
    <div className="pose-container">
      <ReactSVG
        src={pose2_fishbot}
        className='paperdoll-pose2 lime-fill'
        style={{ width: 200 }}
      />
      <ReactSVG
        src={tshirt}
        className='tshirt-pose2 pine-fill'
        style={{ width: 200 }}
      />
    </div>
  );
};

export default Paperdoll;
