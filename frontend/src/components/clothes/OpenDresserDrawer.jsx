import '../../styles/clothes/OpenDresserDrawer.scss';

import DresserDrawerItem from './DresserDrawerItem';

const OpenDresserDrawer = ({ clothingType, closeDrawer, userData, wearing, setWearing }) => {
  return (
    <div className="open-dresser-drawer">
      <div className='drawer-handle' onClick={closeDrawer}></div>
      <div className='drawer-interior'>
        <h3>{clothingType}</h3>
        {userData && userData.wardrobe.map((clothingArticle, index) => {
          if (clothingArticle.category === clothingType) {
            return (
              <DresserDrawerItem
                key={index}
                clothingArticle={clothingArticle}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default OpenDresserDrawer;