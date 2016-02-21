import React from 'react';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import GridList from 'material-ui/lib/grid-list/grid-list';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Colors from 'material-ui/lib/styles/colors';

const DisplayItem = ({ item, index, itemsLength })=> (
        // console.log('uri: ', state.routing.location.pathname);
        // console.log('pics', item.picture.medium)
  <GridTile
          key={item.key}
          title={item.last_name}
          actionIcon={<IconButton><StarBorder color='white'/></IconButton>}
          actionPosition='left'
          titlePosition='bottom'
          style={STYLES.tile}
          titleBackground='linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
        ><img src={item.picture[0].medium}/>
   {index} of {itemsLength}: {item.first_name}
   </GridTile>
)

//inside gridTile, ther should be 2 compnents of <img> type, one determines the
//toggle status, the other determines the  actual picture,
//and a third determines the actual photos


// const DisplayItem = ({ayy})=> (
//         // console.log('uri: ', state.routing.location.pathname);
//   <div>hllvrld {ayy}</div>
// )
const STYLES = {
  title: {
    cursor: 'pointer',
    color: Colors.indigo500
  },
  tile: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDDD',
    color: '#660000'
  }
};

export default DisplayItem