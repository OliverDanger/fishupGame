import { ReactSVG } from "react-svg";
import { useDrag } from "react-dnd";

import '../../styles/clothes/DresserDrawerItem.scss';

import { useState, useEffect } from 'react';

// Name of file path for clothing svg version showing clothing sitting in the drawer
const pose = 'pose2';

// Max clothing items constant for testing
const maxClothes = 5;

const DresserDrawerItem = ({ clothingArticle, wearing, setWearing }) => {
  const [svgPart1, setSvgPart1] = useState(null);
  const [svgPart2, setSvgPart2] = useState(null);
  const [svgPart3, setSvgPart3] = useState(null);
  const [showMaxedOutEffect, setShowMaxedOutEffect] = useState(false);

  // get main (part 1) svg
  useEffect(() => {
    import(`../../assets/paperdoll/${clothingArticle.category}/itemCard/${clothingArticle.img}_part1-02.svg`)
      .then(svg => {
        setSvgPart1(svg.default);
      })
      .catch(error => {
        console.error(`Error loading item card ${clothingArticle.name} part 1 SVG:`, error);
      });
  }, [clothingArticle]);

  // get part 2 svg if accent colour present
  useEffect(() => {
    if (clothingArticle.colour_part2 && clothingArticle.colour_part2.trim() !== "") {
      import(`../../assets/paperdoll/${clothingArticle.category}/itemCard/${clothingArticle.img}_part2-02.svg`)
        .then(svg => {
          setSvgPart2(svg.default);
        })
        .catch(error => {
          console.error(`Error loading item card ${clothingArticle.name} part 2 SVG:`, error);
        });
    }
  }, [clothingArticle]);

  // get part 3 svg if accent colour present
  useEffect(() => {
    if (clothingArticle.colour_part3 && clothingArticle.colour_part3.trim() !== "") {
      import(`../../assets/paperdoll/${clothingArticle.category}/itemCard/${clothingArticle.img}_part3-02.svg`)
        .then(svg => {
          setSvgPart3(svg.default);
        })
        .catch(error => {
          console.error(`Error loading item card ${clothingArticle.name} part 3 SVG:`, error);
        });
    }
  }, [clothingArticle]);

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
        {svgPart3 && clothingArticle.colour_part3 &&
          <ReactSVG
            src={svgPart3}
            className={`dresser-clothing-part3 ${clothingArticle.colour_part3}-fill clothing-type-${clothingArticle.category}`}
          />
        }
        {svgPart2 && clothingArticle.colour_part2 &&
          <ReactSVG
            src={svgPart2}
            className={`dresser-clothing-part2 ${clothingArticle.colour_part2}-fill clothing-type-${clothingArticle.category}`}
          />
        }
        {svgPart1 &&
          <ReactSVG
            src={svgPart1}
            className={`dresser-clothing-part1 ${clothingArticle.colour_part1}-fill clothing-type-${clothingArticle.category}`}
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