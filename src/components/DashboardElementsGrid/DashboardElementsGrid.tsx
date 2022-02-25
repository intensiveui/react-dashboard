import React from 'react';
import useDashboardContext from '../../hooks/useDashboardContext';
import { getFraction, numberToPercent } from '../../utils/elementDismensions';

const DashboardElementsGrid: React.FC<{}> = ({}) => {
  const dashbaordContext = useDashboardContext();
  const elements = dashbaordContext?.elements || [];
  const ElementWrapper = dashbaordContext
    ? dashbaordContext.elementWrapper
    : () => <div></div>;
  const rowUnits = dashbaordContext?.rowUnits || 12;

  return (
    <div id={dashbaordContext?.id} style={{ display: 'flex' }}>
      {elements.map((element) => {
        return (
          <div
            key={element.id}
            style={{
              width: numberToPercent(getFraction(rowUnits, element.layout.w))
            }}
          >
            <ElementWrapper id={element.id}>
              {element.render({ id: element.id })}
            </ElementWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardElementsGrid;
