import '../../styles/clothes/CurrentOutfitManager.scss';

const CurrentOutfitManager = ({ wearing, setWearing }) => {
  console.log('✨', wearing);

  const handleRemove = (index) => {
    const newWearing = [...wearing];
    newWearing.splice(index, 1);
    setWearing(newWearing);
  };

  
  const handleClothingPosition = (item, originalIndex, newIndex) {
    const newWearing = [...wearing];
    const movedItem = newWearing[originalIndex];
    let newThing = [1];

    // Remove the item from its original position
    newWearing.splice(originalIndex, 1);
    // Insert the item at the new position
    newWearing.splice(newIndex, 0, movedItem);

    setWearing(newWearing)
  }

  return (
    <div className='outfit-manager'>
      { wearing.map((item, index) => (
        <div key={index} className='outfit-manager-item'>
          <button className={'delete-outfit-item'} onClick={() => handleRemove(index)}>X</button>
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