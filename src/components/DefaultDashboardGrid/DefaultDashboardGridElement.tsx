import React from 'react';
import { Col, ScreenClassRender } from 'react-grid-system';
import useDashboardElement from '../../hooks/useDashboardElement';
import useResponsiveDashboardElementWidth from '../../hooks/useResponsiveDashboardElementWidth';
import DashboardActionsType from '../../types/DashboardActionsType';
import DashboardElementActionsType from '../../types/DashboardElementActions.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import DashboardGridElementProps from '../../types/DashboardGridElementProps';

function DefaultDashboardGridElement<
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
>(props: DashboardGridElementProps<TElementProps, TActionsType, TElementActionsType>) {
  const {
    id, 
    elementWrapper, 
    rowHeight, 
    padding,
    fallbackLayoutScreenClassConfig
  } = props;

  const [element, layout] = useDashboardElement(id);
  const elementLayout = useResponsiveDashboardElementWidth(id);
  const ElementWrapper = elementWrapper; 

  return (
    <ScreenClassRender render={(screenClass: any) => {
      console.log(screenClass)
        return (
          <Col
            key={id}
            {...elementLayout}
            style={{height: `${( layout[screenClass]?.h || layout[fallbackLayoutScreenClassConfig].h ) * rowHeight}px` , padding}}
          >
            <ElementWrapper id={id}>
              {element.render({ id: element.id })}
            </ElementWrapper>
          </Col>
        )
    }} />
  );
}

export default DefaultDashboardGridElement;

