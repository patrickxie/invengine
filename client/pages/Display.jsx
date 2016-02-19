import React, { Component } from 'react';

import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { requestKittens } from '../actions/kittens';

import { browserHistory } from 'react-router';

import DisplayItem from '../components/DisplayItem.jsx';
import AbsoluteGrid from 'react-absolute-grid';

import Colors from 'material-ui/lib/styles/colors';


export default class Display extends Component {
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
    console.log('data of type: ', typeof(data), 'is', data);
    return <AbsoluteGrid 
        items={data} displayObject={<DisplayItem/>}/>
  }
}


const STYLES = {
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

var data = [
  {
    "key": 1,
    "individual_id": 121,
    "first_name": "Louis",
    "last_name": "Duncan",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/1.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/1.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/2.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/2.jpg"
      }
    ],
    "inviteProbability": 0.87,
    "sort":1
  },
  {
    "key": 2,
    "individual_id": 322,
    "first_name": "Wanda",
    "last_name": "Austin",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/3.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/3.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/4.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/4.jpg"
      }
    ],
    "inviteProbability": 0.2,
    "sort":2
  },
  {
    "key": 3,
    "individual_id": 453,
    "first_name": "Janice",
    "last_name": "Chapman",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/5.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/5.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/6.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/6.jpg"
      }
    ],
    "inviteProbability": 0.66,
    "sort":3
  },
  {
    "key": 4,
    "individual_id": 124,
    "first_name": "Andrea",
    "last_name": "Bennett",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/7.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/7.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/8.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/8.jpg"
      }
    ],
    "inviteProbability": 0.83,
    "sort":4
  },
  {
    "key": 5,
    "individual_id": 35,
    "first_name": "Justin",
    "last_name": "Flores",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/9.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/9.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/14.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/14.jpg"
      }
    ],
    "inviteProbability": 0.96,
    "sort":5
  },
  {
    "key": 6,
    "individual_id": 6,
    "first_name": "Alan",
    "last_name": "Webb",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/15.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/15.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/21.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/21.jpg"
      }
    ],
    "inviteProbability": 0.33,
    "sort":6
  },
  {
    "key": 7,
    "individual_id": 7212,
    "first_name": "Teresa",
    "last_name": "Parker",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/22.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/22.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/23.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/23.jpg"
      }
    ],
    "inviteProbability": 0.32,
    "sort":7
  },
  {
    "key": 8,
    "individual_id": 4238,
    "first_name": "Donna",
    "last_name": "Medina",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/24.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/24.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/25.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/25.jpg"
      }
    ],
    "inviteProbability": 0.6,
    "sort":8
  },
  {
    "key": 9,
    "individual_id": 3239,
    "first_name": "Juan",
    "last_name": "Robinson",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/26.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/26.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/27.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/27.jpg"
      }
    ],
    "inviteProbability": 0.55,
    "sort":9
  },
  {
    "key": 10,
    "individual_id": 1310,
    "first_name": "Jacqueline",
    "last_name": "Kelley",
    "picture": [
      {
        "large": "http://api.randomuser.me/portraits/women/28.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/28.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/women/29.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/29.jpg"
      }
    ],
    "inviteProbability": 0.46,
    "sort":10
  }
]



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
