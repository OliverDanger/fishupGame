import { ReactSVG } from "react-svg";

import '../../styles/clothes/DresserDrawerItem.scss';

import { useState, useEffect } from 'react';

// Name of file path for clothing svg version showing clothing sitting in the drawer
const pose = 'pose2';

const DresserDrawerItem = ({ clothingArticle }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    import(`../../assets/paperdoll/${clothingArticle.category}/${pose}_${clothingArticle.img}.svg`)
      .then(svg => {
        setSvgContent(svg.default);
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
      });
  }, []);

  return (
    <div className="dresser-drawer-item">
      <h4>{clothingArticle.name}</h4>
      <p>{clothingArticle.description}</p>
      {svgContent &&
        <ReactSVG
          src={svgContent}
          className={`dresser-drawer-item ${clothingArticle.colour}-fill`}
        />
      }
    </div>
  );
};

export default DresserDrawerItem;