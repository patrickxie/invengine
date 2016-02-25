import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { requestAPIData, changeSort } from '../actions/contacts_data';

import { browserHistory } from 'react-router';

import DisplayItem from '../components/DisplayItem.jsx';
import AbsoluteGrid from 'react-absolute-grid';

import Colors from 'material-ui/lib/styles/colors';
import * as _ from 'lodash';


import Search from 'material-ui/lib/svg-icons/action/search';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';

import Popover from 'material-ui/lib/popover/popover';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

import { toggle } from '../actions/to_invite_list';



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
    const { data, changeSort, toggle, toggleStatus } = this.props;
    // console.log(this.props.toggle);
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



    handleChangeDuration = (event) => {
    // console.log('event:', event.target.value==='');
     // console.log('Nan2:', event.target.value=='\ ');
     //  console.log('Nan3:', event.target.value===' ');
    var search = new RegExp(event.target.value, 'i');
    this.props.data.forEach(function(item){
      item.filtered = !item.first_name.match(search);
    });
    this.forceUpdate();

  };


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
    // console.log('toggle 2:', this.props.toggle)
    return <div>
        < AbsoluteGrid
        items={this.props.data} displayObject={<DisplayItem 
            onToggleItem={this.props.toggle} toggleProp={this.props.toggleStatus}
        />}
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
        <FloatingActionButton mini secondary={true} style={STYLES.searchButton}
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
         <FloatingActionButton mini secondary={true} style={STYLES.inviteButton}
         onClick={() => browserHistory.push('/invite')} 
         onTouchTap={() => browserHistory.push('/invite')}
         >
             <PersonAdd />
        </FloatingActionButton>
        </div>  
  }
}

    // var rankByProbabilitySort = function(data){
    //   // console.log('ayy', data);
    //     var result = data.sort(function (a, b) {
    //       if (a.inviteProbability > b.inviteProbability) {
    //         return 1;
    //       }
    //       if (a.inviteProbability < b.inviteProbability) {
    //         return -1;
    //       }
    //       // a must be equal to b
    //       return 0;
    //     });
    //     for (var i = 0; i < result.length; i++) {
    //         result[i].sort = i+1;
    //     };
    //     // console.log("***result is:", result);

    //     return result;

    // };


const STYLES = {
  iconButton:{
    fill: '#fab1ce'
  },
  popover: {
    padding: 20,
  },
  searchButton: {
    left: '7%',
    bottom: '7%',
    backgroundColor: '#fab1ce',
    position: 'fixed'
  },
  inviteButton: {
    right: '7%',
    bottom: '7%',
    backgroundColor: '#fab1ce',
    position: 'fixed'
  },
  snackbar:{
    backgroundColor: 'yellow',
    fill: '#FFDDDD'
  },
  test:{
    width:300,
    height:300,
    backgroundColor: 'pink',
  }
};

export default connect(
  state => ({ data: state.data, toggleStatus: state.toinvlist }),
  { requestAPIData, changeSort, toggle }
)(
  useSheet(Display, STYLES)
);
