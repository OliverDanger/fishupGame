import '../../styles/clothes/CurrentOutfitManager.scss';

const CurrentOutfitManager = ({ wearing, setWearing }) => {
  console.log('✨', wearing);
  return (
    <div className='outfit-manager'>
      { wearing.map((item, index) => <p key={index}>{item.name}: {item.description}</p>)}
    </div>
  );
};

export default CurrentOutfitManager;