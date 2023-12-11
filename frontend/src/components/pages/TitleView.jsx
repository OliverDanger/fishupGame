import { Link } from "react-router-dom";
import "../../styles/pages/TitleView.scss";
import { UserContext } from "../../hooks/context/UserContext";
import { useEffect, useContext, useState } from "react";

// TITLE CARD COMPONENTS
import Login from "../titleCards/Login";
import NewPlayer from "../titleCards/NewPlayer";

// TITLE CARD MODES
const WELCOME = 'WELCOME';
const LOGIN = 'LOGIN';
const NEW = 'NEW';

const TitleView = () => {
  const [titleCard, setTitleCard] = useState(WELCOME);

  const {
    userData,
    loginStatus,
  } = useContext(UserContext);

  useEffect(() => {
    loginStatus().then(res => {
      console.log('Login Status:', res);
      console.log('User Data:', userData);
    });

  }, []);

  const backToTitle = () => {
    setTitleCard(WELCOME);
  };

  return (
    <div className="title-view">
      <header></header>
      <div className="background-container"> {/* Extra container for background separation */}
        <section className="title-card">
          {titleCard === WELCOME && (
            <div>
              <h1>Fish-Up Game</h1>
              <p>by Oliver Danger Dixon</p>
              <div className="start-options">
                <button onClick={() => setTitleCard(NEW)}>New Player</button>
                <button onClick={() => setTitleCard(LOGIN)}>Log In</button>
              </div>
            </div>
          )}

          {titleCard === LOGIN && (
            <Login backToTitle={backToTitle}/>
          )}

          {titleCard === NEW && (
            <NewPlayer backToTitle={backToTitle}/>
          )}
        </section>
      </div>
    </div>
  );
};

export default TitleView;