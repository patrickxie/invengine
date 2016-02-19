import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';

const DisplayItem = ({ item, index, itemsLength })=> (
        // console.log('uri: ', state.routing.location.pathname);
  <div>Item {index} of {itemsLength}: {item.first_name}</div>
)


// const DisplayItem = ({ayy})=> (
//         // console.log('uri: ', state.routing.location.pathname);
//   <div>hllvrld {ayy}</div>
// )

export default DisplayItem