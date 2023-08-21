import { Link } from "react-router-dom";
import "../../styles/TitleView.scss";

const TitleView = () => {
  return (
    <div className="title-view">
      <header></header>
      <div className="background-container"> {/* Extra container for background separation */}
        <section className="title-card">
          <h1>Fish-Up Game</h1>
          <p>by Oliver Danger Dixon</p>
          <Link to={'/map'}>
            <button>Map</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default TitleView;