
import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { requestAPIData, changeSort } from '../actions/contacts_data';

import { browserHistory } from 'react-router';

export default class Invitepage extends Component {
  // constructor(props){
  //   super(props);
  //   // const { children} = this.props;
  //   // console.log(this.props.push);
  // }

  componentDidMount() {
    // this.props.requestKittens();
  }

  // handleClick(){
  //   console.log('bong');
  //   console.log('routeActions :', routeActions);
  //   () => routeActions.push('/foo')
  // }

  render () {
    const { id } = this.props;
    return <div><h1>hello invitepage</h1> {id[1]?<p>T</p>:<p>F</p>} </div>;
  }
}

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
  }
};


export default connect(
  state => ({ id: state.toinvlist }),
  // { requestAPIData, changeSort }
)(
  useSheet(Invitepage, STYLES)
);