import "../../styles/clothes/Dresser.scss";


const Dresser = ({ userClothes, clothesDetails }) => {

  return (
    <div className="dresser-container">
      {/* display user clothes testing */}
      <ul>
        {clothesDetails.length > 0 &&
          userClothes.map((clothing, index) => (
            <li key={index}>
              <p>{`${clothesDetails.find(c => c.id === clothing.clothing_article_id).description}`}</p>
              <p>{`ID: ${clothing.id}, User ID: ${clothing.user_id}, Clothing ID: ${clothing.clothing_article_id}`}</p>
              <p>{`Created at: ${clothing.created_at}, Updated at: ${clothing.updated_at}`}</p>
            </li>
          ))}
      </ul>
    </div>
  );
  
};

export default Dresser;