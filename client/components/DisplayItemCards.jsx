import React, { Component } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


class DisplayItemCards extends Component {
  constructor(props) {
    super(props);
    this.state = { switcher: false };
    // const { set, item, galleryChildCard, id } = this.props;
  }

    switcherFunc() {
      console.log('state: ', this.state);
      this.setState({ switcher: !this.state.switcher });
    }


  render() {
    const { item, set, galleryChildCard, id } = this.props;
    // console.log('what gallerychild is : ', galleryChildCard);
    // let placeholder = { large: 'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png' , medium: 'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png' };
    // const galleryWithDefault = [placeholder,...galleryChildCard];
    // console.log('galleryDefault', galleryWithDefault)
    // const mismatch = item.picture[0].medium !== galleryChildCard[0].large ? galleryChildCard : item.picture[0] ;
    // console.log('mismatch is', mismatch);
    return(<Card>
    <CardHeader
      title={item.first_name}
      subtitle={item.last_name}
      avatar={item.picture[0].medium||'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png'}
    />
    <CardMedia
      overlay={<CardTitle title={item.first_name} subtitle={item.email} />}
    >
     {!!galleryChildCard.length ? <img src={galleryChildCard[0].large}/>
       : <img src='http://lorempixel.com/600/377/sports/Dummy-Text/'/>}
    </CardMedia>
    <CardTitle title={`Company: ${item.company||''}`} subtitle={`title: ${item.title||''}`}  />
    {this.state.switcher?
      <CardText>
      {`Address: ${item.address||''}`}
      </CardText>
      :
      <CardText>
      <li>Website: {item.website||''}</li>
      <li>Phone no: {item.phone||''}</li>
      </CardText>
    }
    <CardActions>
        <FlatButton label='Set New Pic' onTouchTap={set.bind(this, id)}/>
        <FlatButton label='More Info' onTouchTap={this.switcherFunc.bind(this)} />
    </CardActions>
  </Card>);
  }
}


// {galleryChildCard[0].large}

const STYLES = {
  off: {
    cursor: 'pointer',
  },
  on: {

  }
}

export default DisplayItemCards;
