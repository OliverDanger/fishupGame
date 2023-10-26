import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../../styles/pages/ClosetView.scss";

import paperdoll from "../../assets/paperdoll/poses/pose1_fishbot.png";

const ClosetView = () => {

  const { userClothes } = useContext(UserContext);
  
  return (
    <div className="closet-view">

      <div className="display">
        <div className="pose-container">

          <img src={paperdoll} alt="Robot Paper Doll" className="paperdoll-image" />

        </div>
        <div className="dresser-container">
          {/* display user clothes testing */}
          <ul>
            {userClothes.map((clothing, index) => (
              <li key={index}>
                <p>{`ID: ${clothing.id}, User ID: ${clothing.user_id}, Clothing ID: ${clothing.clothing_article_id}`}</p>
                <p>{`Created at: ${clothing.created_at}, Updated at: ${clothing.updated_at}`}</p>
              </li>
            ))}
          </ul>

        </div>

      </div>


      <Link to={'/cabin'}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ClosetView;