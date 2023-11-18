import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const DraggableApp = ({ children }) => {
  const DraggableRoot = DragDropContext(HTML5Backend)(() => <div>{children}</div>);

  return <DraggableRoot />;
};

export default DraggableApp;
