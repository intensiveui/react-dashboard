import React, { useEffect, useRef, useState } from "react";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import useGrid from "../../hooks/useGrid";
import GridElementLayoutCollectionType from "../../types/GridElementLayoutCollection.types";
import { GridLayoutProps } from "./GridLayout.types";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

const generateLayout = (items: GridElementLayoutCollectionType) => {
  return items.map((item, i) => {
    const y: any = item.y || Math.ceil(Math.random() * 4) + 1;
    return {
      x: (i * 2) % 4,
      y: Math.floor(i / 6) * y,
      w: item.minW || 4,
      h: item.minH || 3,
      i: item.i
    };
  });
}


const GridLayoutWrapper: React.FC<GridLayoutProps> = ({onLayoutChange, elements: initialElements, columnCount, isDraggable, isResizable, elementWrapper, layouts: initialLayouts, children}) => {
  const [elements, layouts, actions] = useGrid(initialElements, initialLayouts);
  const ElementWrapper = elementWrapper;

  useEffect(() => {
  }, [])

  const handleLayoutChange = (layout: any) => {
  }

  const renderLayout = () =>
                <ReactGridLayout
                    layout={generateLayout(layouts)}
                    onLayoutChange={handleLayoutChange}
                    cols={columnCount}
                    rowHeight={30}
                    className= {"layout"}
                    style={{width: "100%", minHeight: "250px"}}
                    isResizable={isResizable}
                    isDraggable={isDraggable}
                    >
                    {
                        elements.map((item) => 
                            <div key={item.id} id={item.id}>
                                <ElementWrapper id={item.id}>
                                    {item.render({id: item.id})}
                                </ElementWrapper>
                            </div>

                        )
                    }
                </ReactGridLayout>

  return (
    <div>
        {children({elementsGridJsx: renderLayout, actions})} 
    </div>
  )
}


export default GridLayoutWrapper;

