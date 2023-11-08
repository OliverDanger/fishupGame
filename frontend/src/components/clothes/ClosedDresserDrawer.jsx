import '../../styles/clothes/ClosedDresserDrawer.scss';

const ClosedDresserDrawer = ({ key, clothingType, openDrawer }) => {
  return (
    <div index={key} className="closed-dresser-drawer" onClick={() => openDrawer(clothingType)}>
      <h3>{clothingType}</h3>
    </div>
  );
};

export default ClosedDresserDrawer;