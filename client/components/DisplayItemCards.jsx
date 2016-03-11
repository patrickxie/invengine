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
    return(<Card>
    <CardHeader
      title={item.first_name}
      subtitle={item.last_name}
      avatar={item.avatar||'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png'}
    />
    <CardMedia
      overlay={<CardTitle title={item.first_name} subtitle={item.email} />}
    >
     {!!galleryChildCard.length ? <img src={galleryChildCard[0].large}/>  : <img src='http://lorempixel.com/600/377/sports/Dummy-Text/'/>}
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    {this.state.switcher?
      <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText> 
      :
      <CardText>
      <li>address: {item.address||'tacos'}</li>
      <li>birthday: {item.birthday}</li>
      </CardText>
    }
    <CardActions>
        <FlatButton label='New Pic' onTouchTap={set.bind(this, id)}/>
        <FlatButton label='More Info' onTouchTap={this.switcherFunc.bind(this)} />
    </CardActions>
  </Card>);
  }
}

const STYLES = {
  off: {
    cursor: 'pointer',
  },
  on: {

  }
}

export default DisplayItemCards;
