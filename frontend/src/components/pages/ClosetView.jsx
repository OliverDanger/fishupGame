import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


import "../../styles/pages/ClosetView.scss";

const ClosetView = () => {
  
  return (
    <div className="closet-view">
      <h1>Closet</h1>
      <Link to={'/cabin'}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ClosetView;