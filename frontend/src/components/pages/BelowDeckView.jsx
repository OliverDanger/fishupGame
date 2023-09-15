import { Link } from "react-router-dom";
import "../../styles/pages/BelowDeckView.scss";

const BelowDeckView = () => {
  return (
    <div className="below-deck-view">
      <h1>Below Deck</h1>
      <Link to={'/map'}>
        <button>Deck</button>
      </Link>
    </div>
  );
};

export default BelowDeckView;