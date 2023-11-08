import "../../styles/clothes/Dresser.scss";


const Dresser = ({ userData }) => {

  return (
    <div className="dresser-container">
      {/* display user clothes testing */}
      { userData.wardrobe && userData.wardrobe.length > 0 &&
        userData.wardrobe.map((clothing, index) => (
          <li key={index}>
            <p> { index } </p>
            <p> Name: {clothing.name} </p>
            <p> Category: {clothing.category}</p>
            <p> Number Held: {clothing.number_held}</p>
          </li>
        ))
      }
    </div>
  );

};

export default Dresser;