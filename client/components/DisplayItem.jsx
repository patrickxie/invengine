import React, { Component } from 'react';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import GridList from 'material-ui/lib/grid-list/grid-list';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Colors from 'material-ui/lib/styles/colors';

import ActionCheckCircle from 'material-ui/lib/svg-icons/action/check-circle';


class DisplayItem extends Component {
    constructor(props){
        super(props);
        const { item, index, itemsLength, onToggleItem, toggleProp } = this.props;
    }
    render() {
        var currentStatus = this.props.toggleProp[this.props.item.key] ? true : false;
      return  ( <div onTouchTap={()=> this.props.onToggleItem(this.props.item.key, !currentStatus)} >
        <GridTile
          key={this.props.item.key}
          title={this.props.item.first_name}
          subtitle={this.props.item.last_name}
          actionIcon={<IconButton><StarBorder color='white'/></IconButton>}
          actionPosition='left'
          titlePosition='bottom'
          style={STYLES.tile}
          titleBackground='linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
        >   
        { currentStatus ? 

             <div style={STYLES.wrapper}>   <ActionCheckCircle style={STYLES.on} color={Colors.grey50}/>
                <img style={STYLES.check} src={this.props.item.picture[0].medium} /> </div>
:
           <div style={STYLES.wrapper}> <ActionCheckCircle style={STYLES.off}/>
             <img style={STYLES.check} src={this.props.item.picture[0].medium} /> </div>
    }


        </GridTile>
    </div>)
    }
}

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
    // justifyContent: 'center',
    backgroundColor: Colors.grey50,
    color: '#660000',
    border: 'solid 1px #e0e0e0'
  },
  check: {
    width: '100%',
    height: '100%',
    zIndex: 3
  },  
  wrapper: {
    width: '100%',
    height: '100%',
    // zIndex: 3
  },
  on: {
    // display:'block',
    width: '100%',
    height: '100%',
    opacity: '0.7',
    position: 'absolute',
    // visibility: 'hidden'
    zIndex: 5
  },
  off: {
    position: 'absolute',
    // display: 'none',
    // width: '100%',
    // height: '100%',
    // // alignItems: 'center',
    // opacity: 1,
    // visibility: 'visible'
    zIndex: '-1'
  }
};

export default DisplayItem