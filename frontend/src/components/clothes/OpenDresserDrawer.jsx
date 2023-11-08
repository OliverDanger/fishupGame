import '../../styles/clothes/OpenDresserDrawer.scss';

const OpenDresserDrawer = ({ clothingType, closeDrawer }) => {
  return (
    <div className="open-dresser-drawer">
      <div className='drawer-handle' onClick={closeDrawer}></div>
      <div className='drawer-interior'></div>
      <h3>{clothingType}</h3>
    </div>
  );
};

export default OpenDresserDrawer;