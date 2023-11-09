import { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

import '../../styles/clothes/PaperdollPose.scss';

import { paperdollWidth } from '../../utils/_constants';

const PaperdollPose = ({ poseNumber }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    import(`../../assets/paperdoll/poses/pose${poseNumber}_fishbot.svg`)
      .then(svg => {
        setSvgContent(svg.default);
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
      });
  }, [poseNumber]);

  return (
    <div className={`paperdoll-nude-frame`}>
      { svgContent &&
        <ReactSVG
          src={svgContent}
          className={`paperdoll-nude-svg paperdoll-pose${poseNumber}`}
          style={{ width: paperdollWidth }}
        />
      }
    </div>
  );
};

export default PaperdollPose;