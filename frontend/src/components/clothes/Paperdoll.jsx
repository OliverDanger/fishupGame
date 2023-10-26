import "../../styles/clothes/Paperdoll.scss";

import paperdoll from "../../assets/paperdoll/poses/pose1_fishbot.png";

const Paperdoll = () => {
  return (
    <div className="pose-container">

      <img src={paperdoll} alt="Robot Paper Doll" className="paperdoll-image" />

    </div>
  );
};

export default Paperdoll;