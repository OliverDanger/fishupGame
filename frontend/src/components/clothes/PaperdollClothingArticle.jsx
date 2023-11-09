import { ReactSVG } from 'react-svg';

import '../../styles/clothes/PaperdollClothingArticle.scss';

import { useState, useEffect } from 'react';

const PaperdollClothingArticle = ({ poseNumber, clothingArticle }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}_${clothingArticle.img}.svg`)
      .then(svg => {
        setSvgContent(svg.default);
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
      });
  }, [poseNumber, clothingArticle]);

  return (
    <div className={'paperdoll-clothing-frame'}>
      { svgContent &&
        <ReactSVG
          src={svgContent}
          className={`paperdoll-clothing-article ${clothingArticle.colour}-fill`}
        />
      }
    </div>
  );
};

export default PaperdollClothingArticle;