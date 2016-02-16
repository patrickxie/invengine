import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { requestKittens } from '../actions/kittens';

import { Link } from 'react-router';
import { browserHistory } from 'react-router'

export default class Index extends Component {
  // constructor(props){
  //   super(props);
  //   // const { children} = this.props;
  //   // console.log(this.props.push);
  //   // console.log('errrbody knows kunfu fightin', this.props.switchFoo);
  // }

  componentDidMount() {
    this.props.requestKittens();
  }

  // handleClick(){
  //   console.log('bong');
  //   console.log('routeActions :', routeActions);
  //   () => routeActions.push('/foo')
  // }

  render() {
    const { sheet, push, children } = this.props;

    return (
    <div>
      <header>
        Links:
        {' '}
        <Link to='/'>bar</Link>
        {' '}
        <Link to='/foo'>Foo</Link>
        {' '}
        <Link to='/kittens'>kittens</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
    </div>
    )
  }
}


const STYLES = {
  index: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDDD',
    color: '#660000'
  }
};


export default connect(
  () => ({}),
  { requestKittens }
)(
  useSheet(Index, STYLES)
);
