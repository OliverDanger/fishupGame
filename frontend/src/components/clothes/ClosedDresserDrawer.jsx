import '../../styles/clothes/ClosedDresserDrawer.scss';

const ClosedDresserDrawer = ({ clothingType, openDrawer }) => {
  return (
    <div className="closed-dresser-drawer" onClick={() => openDrawer(clothingType)}>
      <h3>{clothingType}</h3>
    </div>
  );
};

export default ClosedDresserDrawer;