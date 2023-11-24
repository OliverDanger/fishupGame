import { ReactSVG } from 'react-svg';

import '../../styles/clothes/PaperdollClothingArticle.scss';

import { useState, useEffect } from 'react';

const PaperdollClothingArticle = ({ poseNumber, clothingArticle }) => {
  const [svgPart1, setSvgPart1] = useState(null);
  const [svgPart2, setSvgPart2] = useState(null);

  // get main svg
  useEffect(() => {
    import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}-01.svg`)
      .then(svg => {
        setSvgPart1(svg.default);
      })
      .catch(error => {
        console.error('Error loading paperdoll clothing SVG:', error);
      });
  }, [poseNumber, clothingArticle]);

  // get accent svg if accent colour present
  useEffect(() => {
    console.log('🍕', clothingArticle);
    if (clothingArticle.accent_colour && clothingArticle.accent_colour.trim() !== "") {
      console.log('🦑', clothingArticle.name, clothingArticle.accent_colour);
      import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}_trim-01.svg`)
        .then(svg => {
          setSvgPart2(svg.default);
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
          src={svgPart2}
          className={`paperdoll-clothing-accent ${clothingArticle.accent_colour}-fill`}
        />
      }
      {svgContentMain &&
        <ReactSVG
          src={svgPart1}
          className={`paperdoll-clothing-main ${clothingArticle.colour}-fill`}
        />
      }
    </div>
  );
};

export default PaperdollClothingArticle;