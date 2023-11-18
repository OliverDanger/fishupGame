import { useDrop } from 'react-dnd';

import '../../styles/clothes/CurrentOutfitManager.scss';

const CurrentOutfitManager = ({ wearing, setWearing }) => {
  console.log('✨', wearing);

  const handleRemove = (index) => {
    const newWearing = [...wearing];
    newWearing.splice(index, 1);
    setWearing(newWearing);
  };

  return (
    <div className='outfit-manager'>
      { wearing.map((item, index) => (
        <div key={index} className='outfit-manager-item'>
          <button className={'delete-outfit-item'} onClick={handleRemove}>X</button>
          <p>
            #{index} - {item.name}:
            {item.description}
          </p>

        </div>
      ))}
    </div>
  );
};

export default CurrentOutfitManager;