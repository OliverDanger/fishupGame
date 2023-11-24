import { ReactSVG } from 'react-svg';

import '../../styles/clothes/PaperdollClothingArticle.scss';

import { useState, useEffect } from 'react';

const PaperdollClothingArticle = ({ poseNumber, clothingArticle }) => {
  const [svgContentMain, setSvgContentMain] = useState(null);
  const [svgContentAccent, setSvgContentAccent] = useState(null);

  useEffect(() => {
    import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}-01.svg`)
      .then(svg => {
        setSvgContentMain(svg.default);
      })
      .catch(error => {
        console.error('Error loading paperdoll clothing SVG:', error);
      });

    import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}_trim-01.svg`)
      .then(svg => {
        setSvgContentAccent(svg.default);
      })
      .catch(error => {
        console.error('Error loading paperdoll accent SVG:', error);
      });
  }, [poseNumber, clothingArticle]);


  return (
    <div className={`paperdoll-clothing-frame clothing-type-${clothingArticle.category}`}>
      {svgContentAccent &&
        <ReactSVG
          src={svgContentAccent}
          className={`paperdoll-clothing-accent orange-fill`}
        />
      }
      {svgContentMain &&
        <ReactSVG
          src={svgContentMain}
          className={`paperdoll-clothing-main ${clothingArticle.colour}-fill`}
        />
      }
    </div>
  );
};

export default PaperdollClothingArticle;