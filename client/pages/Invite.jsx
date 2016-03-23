
import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { populateIconTable } from '../actions/assist_variables';
import URL from '../components/URL';
import InviteTable from '../components/InviteTable';
import Divider from 'material-ui/lib/divider';
import { browserHistory } from 'react-router';

export default class Invitepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.populateIconTable();
  }

  render () {
    return (
        <div>
                <InviteTable/>
        </div>);
  }
}


const STYLES = {
  listItem:{
    height:'100',
    border: '1px solid #c3c3c3',
  },
  container:{
    // fill:'#000080',
    textAlign: 'justify',
    // MsTextJustify: 'distribute-all-lines',
    textJustify: 'distribute-all-lines',
    width: '70%',
    position: 'absolute',
    right: '0px'
  },
  stretch:{
    width: '100%',
    display: 'inline-block',
    fontSize: 0,
    lineHeight: 0
  },
  left: {
    width: '30%',
    display: 'inline-block',
    // height: '300px',
    // backgroundColor: 'pink'
  },
  right: {
    width: '70%',
    // height: 300,
    display: 'inline-block',
    // backgroundColor: 'purple'
  },
  testbg: {
    backgroundColor: 'magenta',
  },
  testbg2: {
    backgroundColor: 'black',
    textAlign: 'center',
  },
  floatButton: {
    left: '10%',
    bottom: '10%',
    backgroundColor: '#fab1ce'
  },
  snackbar:{
    backgroundColor: 'purple',
    fill: '#FFDDDD'
  },
  test:{
    width:'100%',
    height:'3em',
    backgroundColor: 'pink',
  },
  block: {
    maxWidth: 250,
  },
  toggle: {
    width: '16.6%',
    display: 'inline-block',
    textAlign: 'center',
    backgroundColor:'red',
    zoom: 1
  }
};


export default connect(
    // state => ({ invitees: state.data.filter((item)=>state.toinvlist[item.key]===true) }),
    state => ({  }),
  { populateIconTable }
)(
  useSheet(Invitepage, STYLES)
);
