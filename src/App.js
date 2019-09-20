import React, { Component } from 'react';
import './App.css';
import DisplayProgress from './DisplayProgress';
import Slider from './Slider';
import ProgressBar from './ProgressBar';


class App extends Component {

  constructor(){
    super();
    this.state = {
    value:0
    }
  }


setValue(x){
  this.setState({value: x})
}

  render(){
    return(
<div>

<h1>React Progress Slider</h1>
<DisplayProgress value={this.state.value}/>
<Slider value={this.state.value} setValue={this.setValue.bind(this)}/>

</div>
      )
  }
}
export default App