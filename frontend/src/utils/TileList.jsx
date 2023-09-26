// A list of each tile component and its associated tile number used for mapping
import Ocean from "../components/tiles/Ocean";
import Sand from "../components/tiles/Sand";

const tileComponents = {
  0: Ocean,
  1: Sand,
};

export function getTileComponent(tileNumber) {
  return tileComponents[tileNumber];
}