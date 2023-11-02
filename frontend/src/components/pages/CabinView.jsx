import { Link } from "react-router-dom";
import "../../styles/pages/CabinView.scss";

const CabinView = () => {
  console.log('🍀');
  return (
    <div className="cabin-view">
      <h1>Cabin</h1>
      <Link to={'/cabin/closet'}>
        <button>Open Closet</button>
      </Link>
      <Link to={'/map'}>
        <button>Deck</button>
      </Link>
    </div>
  );
};

export default CabinView;