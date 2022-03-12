import React, { FC } from 'react';
import { Container, Row } from 'react-grid-system';
import DefaultDashboardGridElement from './DefaultDashboardGridElement';
import useDashboardContext from '../../hooks/useDashboardContext';
import { DashboardGridProps } from '../../types/DashboardGridComponent.types';
import { DashboardElementProps } from '../../types/DashboardElementProps';
import DashboardActionsType from '../../types/DashboardActionsType';
import DashboardElementActionsType from '../../types/DashboardElementActions.types';

function DefaultDashboardGrid <
  TElementProps extends DashboardElementProps, 
  TActionsType extends DashboardActionsType<TElementProps>,
  TElementActionsType extends DashboardElementActionsType<TElementProps>
>(props: DashboardGridProps<TElementProps, TActionsType, TElementActionsType>) {

  const {
    columnCount,
    rowHeight,
    elementWrapper,
    padding,
    fallbackLayoutScreenClassConfig
  } = props;

  const {elements} = useDashboardContext<TElementProps, TActionsType, TElementActionsType>();

  return (
    <Container>
      <Row>
        {elements.map((element) => 
          <DefaultDashboardGridElement 
            id={element.id} 
            columnCount={columnCount} 
            rowHeight={rowHeight} 
            elementWrapper={elementWrapper}
            padding={padding}
            fallbackLayoutScreenClassConfig={fallbackLayoutScreenClassConfig}
          />)}
      </Row>
    </Container>
  );
}

export default DefaultDashboardGrid;

