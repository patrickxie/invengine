import React, { Component } from 'react';

import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { requestAPIData, changeSort } from '../actions/contacts_data';

import { browserHistory } from 'react-router';

import DisplayItem from '../components/DisplayItem.jsx';
import AbsoluteGrid from 'react-absolute-grid';

import Colors from 'material-ui/lib/styles/colors';
import * as _ from 'lodash';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Search from 'material-ui/lib/svg-icons/action/search';
import TextField from 'material-ui/lib/text-field';

import Popover from 'material-ui/lib/popover/popover';


import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import RadioButton from 'material-ui/lib/radio-button';
import RaisedButton from 'material-ui/lib/raised-button';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import ActionHome from 'material-ui/lib/svg-icons/action/home';



export default class Display extends Component {
  constructor(props){
    super(props);
    const { data, changeSort } = this.props;
    this.state = {
      open: false,
    };
    // console.log('constructor changeSort', changeSort);
  }

  componentDidMount() {
    this.props.requestAPIData();
  }

  move (source, target) {
    // console.log('src&tar: ', source, target);
    source = _.find(this.props.data, { key: parseInt(source, 10) });
    target = _.find(this.props.data, { key: parseInt(target, 10) });

    var targetSort = target.sort;
    var sorteddata = this.props.data;
    //CAREFUL, For maximum performance we must maintain the array's order, but change sort
    sorteddata.forEach(function(item) {
      //Decrement sorts between positions when target is greater
      if(target.sort > source.sort && (item.sort <= target.sort && item.sort > source.sort)){
        item.sort --;
      //Incremenet sorts between positions when source is greator
      }else if(item.sort >= target.sort && item.sort < source.sort) {
        item.sort ++;
      }
    });
    // console.log('IT CHANGED: ', sorteddata === this.props.data);
    source.sort = targetSort;
    // console.log('what THIS refers to right b4 return', this);
    // console.log('what changeSort is', this.props.changeSort);
    this.props.changeSort(sorteddata);
    this.forceUpdate();
    // this.render(this.props.data);
    // console.log('what is render', this.render);
  }
// }
  handleTouchTap = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  //   var onFilter = function(event){
  //   var search = new RegExp(event.target.value, 'i');
  //   sampleItems.forEach(function(item){
  //     item.filtered = !item.name.match(search);
  //   });
  //   render();
  // };

    handleChangeDuration = (event) => {
    console.log('event:', event.target.value==='');
     // console.log('Nan2:', event.target.value=='\ ');
     //  console.log('Nan3:', event.target.value===' ');
    var search = new RegExp(event.target.value, 'i');
    this.props.data.forEach(function(item){
      item.filtered = !item.first_name.match(search);
    });
    this.forceUpdate();

  };

// handleChangeDuration(event){
//     filtervalue(event.target.value)
// }

 handleChangeText=(event)=>{
   this.filtervalue(event.target.value);
 };

 handleBlurExit=()=>{
   setTimeout(function() {
     this.filtervalue('');
   }.bind(this),400);
 };



 filtervalue = (value) => {
    console.log('this is called', value);
   var search = new RegExp(value, 'i');
   this.props.data.forEach(function(item) {
     item.filtered = !item.first_name.match(search);
   });
   this.forceUpdate();
 };

 render () {
    // filterpPop, zoom
    return <div>
        < AbsoluteGrid
        items={this.props.data} displayObject={<DisplayItem/>}
                onMove={_.debounce((this.move.bind(this)),120)}
                sortProp={'sort'}
                keyProp={'key'}
                animation={'transform 300ms ease'}
                               dragEnabled
                               responsive
                               verticalMargin={10}
                               itemWidth={200}
                               itemHeight={200}>
         </AbsoluteGrid>
        <FloatingActionButton secondary={true} style={STYLES.floatButton}
         onClick={this.handleTouchTap} onTouchTap={this.handleTouchTap}
         >
             <Search />
        </FloatingActionButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          canAutoPosition
          onRequestClose={this.handleRequestClose}
        >
            <div style={STYLES.popover}>
                <TextField 
                    onChange={this.handleChangeText}
                    onBlur = {this.handleBlurExit}
                    hintText="Search friends..." / >
            </div>
        </Popover>
        </div>
      
  }
}

  //   var onFilter = function(event){
  //   var search = new RegExp(event.target.value, 'i');
  //   sampleItems.forEach(function(item){
  //     item.filtered = !item.name.match(search);
  //   });
  //   render();
  // };

  //   handleChangeDuration = (event) => {
  //   const value = event.target.value;
  //   this.setState({
  //     autoHideDuration: value.length > 0 ? parseInt(value) : 0,
  //   });
  // };



const STYLES = {
  iconButton:{
    fill: '#fab1ce'
  },
  popover: {
    padding: 20,
  },
  floatButton: {
    left: '10%',
    bottom: '10%',
    backgroundColor: '#fab1ce' 
  },
  snackbar:{
    backgroundColor: 'yellow',
    fill: '#FFDDDD'
  },
  test:{
    width:300,
    height:300,
    backgroundColor: 'pink',
  },
  title: {
    cursor: 'pointer',
    color: Colors.indigo500
  },
  index: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDDD',
    color: '#660000'
  },
  kitten: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '33%',
    padding: '0.5rem',
    boxSizing: 'border-box'
  },
  button: {
    padding: '1rem 1.5rem',
    background: '#FFAAAA',
    '&:hover': {
      background: '#FFBBBB'
    },
    border: 0,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    userSelect: 'none'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& svg': {
      fill: 'currentColor'
    }
  },
  appbar: {
    backgroundColor: Colors.grey20,
  },
  barButton: {
    flexBasis:'10%'
  },
  barButtonTxt: {
    color: Colors.indigoA200,
    position: 'relative',
    top:6
  },
  logowrap: {
    position: 'relative',
    bottom:2
  }
};

export default connect(
  state => ({ data: state.data }),
  { requestAPIData, changeSort }
)(
  useSheet(Display, STYLES)
);
