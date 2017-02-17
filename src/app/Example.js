import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';



const style = {
  height: 200,
  width: 200,
  margin: 20,
  display: 'inline-flex'
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={5} > Ahoj jasdfhjka shdjashd flaks </Paper>
    <Paper style={style} zDepth={5}> Ahoj </Paper>
    <Paper style={style} zDepth={5}> 
Lorem Ipsum is simply dummy text of the printing 
    </Paper>
  </div>
);


class Percentil extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            val: props.val,
            max_size: props.max_size,
            min_size: props.min_size,
            x: props.x

        }
    }

    render() {
        var d = this.state.max_size - this.state.min_size;
        var rectSize = (d/100) * this.state.val + this.state.min_size;
        var x = this.state.x * (this.state.max_size+2);

        var y = (this.state.max_size - rectSize) / 2;
        x+=(this.state.max_size - rectSize) / 2;


        return (
        <rect x={x} y={y} width={rectSize}
            height={rectSize} style={{fill: "green"}}/>
        )
    }

}


class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
<div style={{width: 400, height: 150, margin: 10, float: "left"}}>
      <Card expanded={this.state.expanded}
      style={{height:150, textAlign:"left"}}
        onExpandChange={this.handleExpandChange}>
        <CardTitle title={this.state.text} />
        <CardText expandable={false}>
        <div style={{width: 200, height: 50}}>
        <svg>
        <Percentil x={0} val={5} min_size={10} max_size={20}/>
        <Percentil x={1} val={85} min_size={10} max_size={20}/>
        <Percentil x={2} val={55} min_size={10} max_size={20}/>
        <Percentil x={3} val={15} min_size={10} max_size={20}/>
        <Percentil x={4} val={35} min_size={10} max_size={20}/>
        <Percentil x={5} val={95} min_size={10} max_size={20}/>
        </svg>
        </div>

        </CardText>
      </Card>
</div>
    );
  }
}




const AppBarExampleIcon = () => (
        <div>
        <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
            <CardExampleControlled text="Good morning sunshine" />
            <CardExampleControlled/>
            <CardExampleControlled text="mi name is" />
            <CardExampleControlled text="i don't know"/>
            <CardExampleControlled text="Good morning" />
            <CardExampleControlled/>
        </div>
        );


export default AppBarExampleIcon;






