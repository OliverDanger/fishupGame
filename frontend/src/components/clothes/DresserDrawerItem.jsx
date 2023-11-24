import { ReactSVG } from "react-svg";
import { useDrag } from "react-dnd";

import '../../styles/clothes/DresserDrawerItem.scss';

import { useState, useEffect } from 'react';

// Name of file path for clothing svg version showing clothing sitting in the drawer
const pose = 'pose2';

// Max clothing items constant for testing
const maxClothes = 5;

const DresserDrawerItem = ({ clothingArticle, wearing, setWearing }) => {
  const [svgContent, setSvgContent] = useState(null);
  const [showMaxedOutEffect, setShowMaxedOutEffect] = useState(false);

  useEffect(() => {
    import(`../../assets/paperdoll/${clothingArticle.category}/${pose}/${clothingArticle.img}-01.svg`)
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
      <div className="drawer-item-img">
        {svgContent &&
          <ReactSVG
            src={svgContent}
            className={`dresser-drawer-svg ${clothingArticle.colour}-fill`}
          />
        }
      </div>
      <div className="drawer-item-details">
        <h4>{clothingArticle.name}</h4>
        <p>{clothingArticle.description}</p>
      </div>
    </div>
  );
};

export default DresserDrawerItem;