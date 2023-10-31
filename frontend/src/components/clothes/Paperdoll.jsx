import React from 'react';
import '../../styles/clothes/Paperdoll.scss';
import pose2_fishbot from '../../assets/paperdoll/poses/pose2_fishbot.svg';

const Paperdoll = () => {
  return (
    <div className="pose-container">
      <img src={pose2_fishbot} alt="Robot Paper Doll" className="paperdoll-image" />
    </div>
  );
};

export default Paperdoll;
