import '../../styles/clothes/Paperdoll.scss';

import PaperdollPose from './PaperdollPose';
import PaperdollClothingArticle from './PaperdollClothingArticle';

// temp value for testing
const poseNumber = 2;

const Paperdoll = ({ userData, wearing }) => {

  return (
    <div className="pose-container">
      <PaperdollPose poseNumber={poseNumber}/>
      {wearing && wearing.map((clothingArticle, index) => (
        <PaperdollClothingArticle
          key={index}
          poseNumber={poseNumber}
          clothingArticle={clothingArticle}
        />
      ))}
    </div>
  );
};

export default Paperdoll;
