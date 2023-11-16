import { ReactSVG } from "react-svg";

import '../../styles/clothes/DresserDrawerItem.scss';

import { useState, useEffect } from 'react';

const DresserDrawerItem = ({ clothingArticle }) => {
  const [svgContent, setSvgContent] = useState(null);



  return (
    <div className="dresser-drawer-item">
      <h4>{ clothingArticle.name }</h4>
      <p>{ clothingArticle.description }</p>
    </div>
  );
};

export default DresserDrawerItem;