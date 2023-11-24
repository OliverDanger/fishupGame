import { ReactSVG } from 'react-svg';

import '../../styles/clothes/PaperdollClothingArticle.scss';

import { useState, useEffect } from 'react';

const PaperdollClothingArticle = ({ poseNumber, clothingArticle }) => {
  const [svgPart1, setSvgPart1] = useState(null);
  const [svgPart2, setSvgPart2] = useState(null);
  const [svgPart3, setSvgPart3] = useState(null);

  // get main (part 1) svg
  useEffect(() => {
    import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}_part1-01.svg`)
      .then(svg => {
        setSvgPart1(svg.default);
      })
      .catch(error => {
        console.error('Error loading paperdoll clothing SVG:', error);
      });
  }, [poseNumber, clothingArticle]);

  // get part 2 svg if accent colour present
  useEffect(() => {
    if (clothingArticle.colour_part2 && clothingArticle.colour_part2.trim() !== "") {
      import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}_part2-01.svg`)
        .then(svg => {
          setSvgPart2(svg.default);
        })
        .catch(error => {
          console.error(`Error loading paperdoll ${clothingArticle.category} part 2 SVG:`, error);
        });
    }
  }, [poseNumber, clothingArticle]);

  // get part 3 svg if accent colour present
  useEffect(() => {
    if(clothingArticle.colour_part3 && clothingArticle.colour_part3.trim() !== "") {
      import(`../../assets/paperdoll/${clothingArticle.category}/pose${poseNumber}/${clothingArticle.img}_part3-01.svg`)
        .then(svg => {
          setSvgPart3(svg.default);
        })
        .catch(error => {
          console.error(`Error loading paperdoll ${clothingArticle.category} part 3 SVG:`, error)
        })
    }
  }, [poseNumber, clothingArticle]);


  return (
    <div className={`paperdoll-clothing-frame clothing-type-${clothingArticle.category}`}>
      {svgPart3 && clothingArticle.colour_part3 &&
        <ReactSVG
          src={svgPart3}
          className={`paperdoll-clothing-part3 ${clothingArticle.colour_part3}-fill`}
        />
      }
      {svgPart2 && clothingArticle.colour_part2 &&
        <ReactSVG
          src={svgPart2}
          className={`paperdoll-clothing-part2 ${clothingArticle.colour_part2}-fill`}
        />
      }
      {svgPart1 &&
        <ReactSVG
          src={svgPart1}
          className={`paperdoll-clothing-part1 ${clothingArticle.colour_part1}-fill`}
        />
      }
    </div>
  );
};

export default PaperdollClothingArticle;