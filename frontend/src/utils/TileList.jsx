// A list of each tile component and its associated tile number used for mapping
import NullTile from "../components/tiles/NullTile";
import Ocean from "../components/tiles/Ocean";
import Sand from "../components/tiles/Sand";

const tileComponents = {
  0: NullTile,
  1: Ocean,
  2: Sand,
};

export function getTileComponent(tileNumber) {
  return tileComponents[tileNumber];
}