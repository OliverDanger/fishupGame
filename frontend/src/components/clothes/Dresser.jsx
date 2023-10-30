import "../../styles/clothes/Dresser.scss";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dresser = () => {
  
  const { userClothes, clothesDetails } = useContext(UserContext);

  return (
    <div className="dresser-container">
      {/* display user clothes testing */}
      <ul>
        {userClothes.map((clothing, index) => (
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