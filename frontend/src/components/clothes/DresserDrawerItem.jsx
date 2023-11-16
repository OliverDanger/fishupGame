import { ReactSVG } from "react-svg";

import '../../styles/clothes/DresserDrawerItem.scss';

import { useState, useEffect } from 'react';

// Name of file path for clothing svg version showing clothing sitting in the drawer
const pose = 'pose2';

// Max clothing items constant for testing
const maxClothes = 3;

const DresserDrawerItem = ({ clothingArticle, wearing, setWearing }) => {
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

  const handleAddItem = () => {
    if (wearing.length < maxClothes) {
      setWearing([...wearing, clothingArticle]);
      console.log('❄️', clothingArticle, wearing);
    }
  };

  return (
    <div className="dresser-drawer-item" onClick={handleAddItem}>
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