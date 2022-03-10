import React, { useContext } from 'react';
import { Container, Row } from 'react-grid-system';
import DefaultDashboardGridElement from './DefaultDashboardGridElement';
import useDashboardContext from '../../hooks/useDashboardContext';
import DashobardActionsType from '../../types/DashobardActions.types.';


function DefaultDashboardGrid<TActionsType extends DashobardActionsType> ({context}: any) {
  const {elements} = useDashboardContext();

  return (
    <Container>
      <Row>
      {elements.map((element) => <DefaultDashboardGridElement id={element.id} context={context}/>)}
      </Row>
    </Container>
  );
};

export default DefaultDashboardGrid;

