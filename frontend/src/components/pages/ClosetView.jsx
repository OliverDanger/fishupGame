import { Link } from "react-router-dom";

import "../../styles/pages/ClosetView.scss";

import Paperdoll from "../clothes/Paperdoll";
import Dresser from "../clothes/Dresser";

const ClosetView = () => { 
  return (
    <div className="closet-view">

      <div className="display">
        <Paperdoll></Paperdoll>
        <Dresser></Dresser>
      </div>


      <Link to={'/cabin'}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ClosetView;