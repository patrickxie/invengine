import React, { Component, forceUpdate } from 'react';

import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { requestAPIData, changeSort } from '../actions/contacts_data';
console.log('succesffully imported changesort: ', changeSort);
import { browserHistory } from 'react-router';

import DisplayItem from '../components/DisplayItem.jsx';
import AbsoluteGrid from 'react-absolute-grid';

import Colors from 'material-ui/lib/styles/colors';
import * as _ from 'lodash';



export default class Display extends Component {
  constructor(props){
    super(props);
    const { data, changeSort } = this.props;
    console.log('constructor changeSort', changeSort);
    // const { dirtyd } = this.props;
    // const { value, moveD, requestKittens } = this.props;
            // console.log('requestKittens is :: ', this.props.requestKittens);
    // this.props.dirtyd = data;
    // console.log(data);
    // this.state = { counter: store.getState()};
    // console.log('state is:  ', this.state);
    // console.log('value & increaseActionclick', value, moveD);
    // this.render = this.render.bind(this);
    // console.log('this.render', this.render);
    // console.log('children prop aka dragmanager prop:', this.props.children);
    // console.log('moveD', this.moveD);

    // console.log('func', this.func);


  }

  componentDidMount() {
    this.props.requestAPIData();
  }

  // sendtwoaction() {
  //   console.log('att');
  //   this.props.moveD();
  //   console.log('att2');
  // }


// onMove={newMove.bind(this)}
// newMove(source, target){
//     this.props.changeSort()
//     moveXXX(source, target)
// }

  moveXXX (source, target) {
    console.log('src&tar: ', source, target);
    // console.log('requestKittens is : ', this.props.requestKittens);
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
    console.log('IT CHANGED: ', sorteddata === this.props.data);
    source.sort = targetSort;
    console.log('what THIS refers to right b4 return', this);
    console.log('what changeSort is', this.props.changeSort);
    return this.props.changeSort(sorteddata);
    // this.props.requestKittens;
  }

  // handleClick(){
  //   console.log('bong');
  //   console.log('routeActions :', routeActions);
  //   () => routeActions.push('/foo')
  // }

  //true false onMove hack

  render () {
    // console.log('value::::::::::::::::: ', this.props.value);
    // console.log('data of type: ', typeof(data), 'is', data);
    // console.log('thischidlren', this.props.children)
    return < AbsoluteGrid
        items={this.props.data} displayObject={<DisplayItem/>}
                onMove={this.moveXXX.bind(this)}
                               dragEnabled
                               responsive
                               verticalMargin={42}
                               itemWidth={200}
                               itemHeight={200}>
         </AbsoluteGrid>
  }
}

//        onMove={this.moveXXX}

//Map Redux state to component props
// function mapStateToProps (state) {
//   return {
//     value: state.count
//   }
// }

// Map Redux actions to component props
// function mapDispatchToProps (dispatch) {
//   return {
//     moveD: () => dispatch(increaseAction)
//     // moveD: () => bindActionCreators(increaseAction, dispatch)
//   }
// }

// function requestKittens() {
//     console.log('wtttff');
//   return dispatch => { dispatch(increaseAction)};
// }

// function onMoveAction (source, target){
//         console.log('src&tar: ', source, target);
//         source = _.find(data, {key: parseInt(source, 10)});
//         target = _.find(data, {key: parseInt(target, 10)});

//         var targetSort = target.sort;

//         //CAREFUL, For maximum performance we must maintain the array's order, but change sort
//         data.forEach(function(item){
//           //Decrement sorts between positions when target is greater
//           if(target.sort > source.sort && (item.sort <= target.sort && item.sort > source.sort)){
//             item.sort --;
//           //Incremenet sorts between positions when source is greator
//           }else if(item.sort >= target.sort && item.sort < source.sort){
//             item.sort ++;
//           }
//         });

//         source.sort = targetSort;
//         return increaseAction;
//   }




// Connected Component
export default connect(
  state => ({ data: state.data }),
  { requestAPIData, changeSort }
)(
  useSheet(Display, STYLES)
);




// onMove={this.onMoveDebounced.bind(this, this.props)}

  // onMoveDebounced(){
  //   console.log('called')
  // //check if onMove then will sampleItems still be there or is it not
  //   var onMove = function(source, target){
  //       console.log('source & data are: ', source, target);
  //       source = _.find(data, {key: parseInt(source, 10)});
  //       target = _.find(data, {key: parseInt(target, 10)});

  //       var targetSort = target.sort;

  //       //CAREFUL, For maximum performance we must maintain the array's order, but change sort
  //       data.forEach(function(item){
  //         //Decrement sorts between positions when target is greater
  //         if(target.sort > source.sort && (item.sort <= target.sort && item.sort > source.sort)){
  //           item.sort --;
  //         //Incremenet sorts between positions when source is greator
  //         }else if(item.sort >= target.sort && item.sort < source.sort){
  //           item.sort ++;
  //         }
  //       });

  //       source.sort = targetSort;
  //       console.log('render');
  //       this.render();
  //       console.log('after render');
  //        console.log('children prop aka dragmanager prop:', this.props.children);
  //   };

  //   onMove();

  //   // return _.debounce(onMove, 80);
  // }


const STYLES = {
  test:{
    width:300,
    height:300,
    backgroundColor: 'pink'
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





// export default connect(
//   () => ({}),   state is probably state.data
//   { requestKittens }
// )(
//   useSheet(Index, STYLES)
// );

// export default connect(
//   state => ({ kittens: state.kittens }), //state.kittens is the store, 
//kittens is the prop of this component
//   { addKitten, deleteKitten }
// )(
//   useSheet(Kittens, STYLES)
// );



// import { createStore, bindActionCreators } from 'redux'
// import { Provider } from 'react-redux'

// function counter (state = {count: 0}, action) {
//   let count = state.count
//   switch (action.type) {
//     case 'increase':
//       return {count: count + 1}
//     default:
//       return state
//   }
// }

// let store = createStore(counter)
// const increaseAction = {type: 'increase'}

// store.subscribe(() =>
//   console.log('store:',store.getState())
// )
