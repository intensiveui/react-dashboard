import React from 'react';
import { Col } from 'react-grid-system';
import useDashboardContext from '../../hooks/useDashboardContext';
import useDashboardElement from '../../hooks/useDashboardElement';
import useResponsiveDashboardElementWidth from '../../hooks/useResponsiveDashboardElementWidth';
import DashobardActionsType from '../../types/DashobardActions.types.';


function DefaultDashboardGridElement<TActionsType extends DashobardActionsType> ({id}: any) {
  const {elementWrapper} = useDashboardContext<TActionsType>();
  const [element] = useDashboardElement(id);
  const elementLayout = useResponsiveDashboardElementWidth(id);
  const ElementWrapper = elementWrapper; 

  return (
    <Col
      key={id}
      {...elementLayout}
      
    >
      <ElementWrapper id={id}>
        {element.render({ id: element.id })}
      </ElementWrapper>
    </Col>
  );
};

export default DefaultDashboardGridElement;

