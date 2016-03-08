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
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import { toggle } from '../actions/to_invite_list';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';

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
    sorteddata.forEach(function(item) {
      if(target.sort > source.sort && (item.sort <= target.sort && item.sort > source.sort)){
        item.sort --;
      }else if(item.sort >= target.sort && item.sort < source.sort) {
        item.sort ++;
      }
    });
    source.sort = targetSort;
    this.props.changeSort(sorteddata);
    this.forceUpdate();
  }

  handleTouchTap = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  closeAndDone =()=>{
    this.handleRequestClose();
    this.handleBlurExit();
  };

  handleChangeDuration = (event) => {
    var search = new RegExp(event.target.value, 'i');
    this.props.data.forEach(function(item) {
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
    }.bind(this),10);
  };

  filtervalue = (value) => {
     // console.log('this is called', value);
    var search = new RegExp(value, 'i');
    this.props.data.forEach(function(item) {
      item.filtered = !item.first_name.match(search);
    });
    this.forceUpdate();
  };

  render () {
    // console.log('toggle 2:', this.props.toggle)
    return (<div>
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
{ this.state.open ?
        <Paper style={STYLES.popover}>
                 <Search style={STYLES.searchIcon} />
                <TextField 
                    style={STYLES.txtField}
                    onChange={this.handleChangeText}
                    hintText="Search friends..." />
                 <FlatButton label="Done" onTouchTap = {this.closeAndDone}
                 style={STYLES.c} color={Colors.red500} />
        </Paper>
: 
        <FloatingActionButton mini secondary={true} style={STYLES.searchButton}
         onTouchTap={this.handleTouchTap}
         >
             <Search />
        </FloatingActionButton>
}
         <FloatingActionButton mini secondary style={STYLES.inviteButton} 
         onTouchTap={() => browserHistory.push('/invite')}
         >
             <PersonAdd />
        </FloatingActionButton>
        </div>);
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
  c: {
    backgroundColor: 'white'
  },
  iconButton:{
    fill: '#fab1ce'
  },
  txtField:{
    width:"60%",
    backgroundColor: 'white',
    zIndex: '8',
  },
  wide:{
    width:'100%',
    // backgroundColor:'black',
    height:30
  },
  popover: {
    // padding: 20,
    // display: 'block',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    height:'3em',
    // background: 'rgba(0,0,0,0.1)',
    // position: 'fixed',
    // bottom: 0,
    zIndex: '8',
    position: 'fixed',
    bottom: '3%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

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
    position: 'fixed',
    cursor: 'pointer'
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
  hide:{
    display: 'none',
  },
  show:{
    display: 'block',
  },
  searchIcon:{
    position: 'relative',
    left:'3px',
    top:'8px',
    zIndex: '8',
  }
};

export default connect(
  state => ({ data: state.data, toggleStatus: state.toinvlist }),
  { requestAPIData, changeSort, toggle }
)(
  useSheet(Display, STYLES)
);
