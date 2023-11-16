import '../../styles/clothes/CurrentOutfitManager.scss';

const CurrentOutfitManager = ({ wearing, setWearing }) => {
  return (
    <div className='outfit-manager'>
      { wearing.map((item, index) => <p key={index}>{item.name}</p>)}
    </div>
  );
};

export default CurrentOutfitManager;