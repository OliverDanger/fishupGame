import { useState, useEffect } from 'react';
import '../../styles/clothes/PaperdollPose';
import { ReactSVG } from 'react-svg';

import { paperdollWidth } from '../../utils/_constants';

const PaperdollPose = ({ poseNumber }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    import(`../../assets/paperdoll/poses/pose${poseNumber}_fishbot`)
      .then(svg => {
        setSvgContent(svg.default);
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
      });
  }, [poseNumber]);

  return (
    <div className={`pose pose-${poseNumber}`}>
      { svgContent &&
        <ReactSVG
          src={svgContent}
          className={`paperdoll paperdoll-pose${poseNumber}`}
          style={{ width: paperdollWidth }}
        />
      }
    </div>
  );
};

export default PaperdollPose;