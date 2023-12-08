import { Link } from "react-router-dom";
import "../../styles/pages/TitleView.scss";
import { UserContext } from "../../hooks/context/UserContext";
import { useEffect, useContext } from "react";

const TitleView = () => {
  const {
    loginStatus,
  } = useContext(UserContext);

  useEffect(() => {
    loginStatus().then(res => {
      console.log('Login Status:', res);
    });
  },[]);

  return (
    <div className="title-view">
      <header></header>
      <div className="background-container"> {/* Extra container for background separation */}
        <section className="title-card">
          <h1>Fish-Up Game</h1>
          <p>by Oliver Danger Dixon</p>
          <Link to={'/map'}>
            <button>Start</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default TitleView;