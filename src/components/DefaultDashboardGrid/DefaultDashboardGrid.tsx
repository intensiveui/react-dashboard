import React from 'react';
import { Container, Row } from 'react-grid-system';
import DefaultDashboardGridElement from './DefaultDashboardGridElement';
import useDashboardContext from '../../hooks/useDashboardContext';


function DefaultDashboardGrid () {
  const {elements} = useDashboardContext();

  return (
    <Container>
      <Row>
      {elements.map((element) => <DefaultDashboardGridElement id={element.id}/>)}
      </Row>
    </Container>
  );
}

export default DefaultDashboardGrid;

