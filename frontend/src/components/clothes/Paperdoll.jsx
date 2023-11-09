import { ReactSVG } from 'react-svg';

import '../../styles/clothes/Paperdoll.scss';

import PaperdollPose from './PaperdollPose';
import tshirt from '../../assets/paperdoll/shirts/pose2_basicTshirt.svg';

const poseNumber = 2;

const Paperdoll = ({ userData, wearing }) => {

  return (
    <div className="pose-container">
      <PaperdollPose poseNumber={poseNumber}/>
      <ReactSVG
        src={tshirt}
        className='tshirt-pose2 pine-fill'
        style={{ width: 200 }}
      />
    </div>
  );
};

export default Paperdoll;
