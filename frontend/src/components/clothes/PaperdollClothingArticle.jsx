import { ReactSVG } from 'react-svg';

import '../../styles/clothes/PaperdollClothingArticle.scss';

import { useState, useEffect } from 'react';

const PaperdollClothingArticle = ({ poseNumber, clothingArticle }) => {
  const [svgContentMain, setSvgContentMain] = useState(null);
  const [svgContentAccent, setSvgContentAccent] = useState(null);

  useEffect(() => {
    console.log('🍕', clothingArticle);
    // get main svg
    import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}-01.svg`)
      .then(svg => {
        setSvgContentMain(svg.default);
      })
      .catch(error => {
        console.error('Error loading paperdoll clothing SVG:', error);
      });
    // get accent svg if accent colour present
    if (clothingArticle.accent_colour && clothingArticle.accent_colour.trim() !== "") {
      console.log('🦑', clothingArticle.name, clothingArticle.accent_colour);
      import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}_trim-01.svg`)
        .then(svg => {
          setSvgContentAccent(svg.default);
        })
        .catch(error => {
          console.error('Error loading paperdoll accent SVG:', error);
        });
    }
  }, [poseNumber, clothingArticle]);


  return (
    <div className={`paperdoll-clothing-frame clothing-type-${clothingArticle.category}`}>
      {svgContentAccent && clothingArticle.accent_colour &&
        <ReactSVG
          src={svgContentAccent}
          className={`paperdoll-clothing-accent ${clothingArticle.accent_colour}-fill`}
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