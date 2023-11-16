import { ReactSVG } from "react-svg";

import '../../styles/clothes/DresserDrawerItem.scss';

import { useState, useEffect } from 'react';

// Name of file path for clothing svg version showing clothing sitting in the drawer
const pose = 'pose2';

// Max clothing items constant for testing
const maxClothes = 3;

const DresserDrawerItem = ({ clothingArticle, wearing, setWearing }) => {
  const [svgContent, setSvgContent] = useState(null);
  const [showMaxedOutEffect, setShowMaxedOutEffect] = useState(false);

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
    } else {
      // Clothes are maxed out, show temporary visual effect
      setShowMaxedOutEffect(true);
      setTimeout(() => {
        setShowMaxedOutEffect(false);
      }, 1000);
    }
  };

  return (
    <div className={`dresser-drawer-item ${showMaxedOutEffect ? 'maxed-out' : ''}`} onClick={handleAddItem}>
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