// import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import GridLayout from '../../components/GridLayout/GridLayout';
// import { GridLayoutProps } from '../../components/GridLayout/GridLayout.types';
// import Grid from '../../components/Grid/Grid';
// import Col from '../../components/Grid/Col';

// export default {
//   title: 'Grid',
//   component: Grid,
//   argTypes: {}
// } as Meta<typeof GridLayout>;

// const StatisticsCard: React.FC<{ id: string }> = ({ id }) => {
//   return (
//     <div
//     style={{
//       width: "calc(100% - 20px)",
//       height: "calc(100% - 20px)",
//       padding: '10px',
//       backgroundColor: 'white',
//       borderRadius: 10,
//       boxShadow: `0 1px 1px rgba(0,0,0,0.11), 
//                           0 2px 2px rgba(0,0,0,0.11), 
//                           0 4px 4px rgba(0,0,0,0.11), 
//                           0 6px 8px rgba(0,0,0,0.11),
//                           0 8px 16px rgba(0,0,0,0.11)`
//     }}>
//       stats card
//     </div>
//   );
// };



// const Template: Story<GridLayoutProps> = (args) => {
// return (
//   <div style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
//     <Grid
//     id='test'
//     columnCount={12}
//     direction={'row'}
//     justify={"flex-start"}
    
//     >
//       <Col id="20" md={4}>
//         <StatisticsCard id="st-card"></StatisticsCard>
//       </Col>
//       <Col id="30" md={6}>
//         <StatisticsCard id="st-card"></StatisticsCard>
//       </Col>
//     </Grid>
//   </div>
//   );  
// };

// export const Default = Template.bind({});

// Default.args = {
// };
