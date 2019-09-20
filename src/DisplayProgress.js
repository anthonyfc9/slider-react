import React from 'react';
import ProgressBar from './ProgressBar';
class DisplayProgress extends React.Component{



 getStatus=(currentValue)=>{
        if(currentValue == 100){return 'Complete!'}else {return 'In Progress - '+currentValue}
    }
  getStyles=(percentage)=>{
        if(percentage>=66){
            return 'high'
        } else if(percentage>=33 && percentage<66){
            return 'medium'
        } else {return 'low'}
    
    }



render(){

return(<div>
<h3>{this.getStatus(this.props.value)}</h3>
<ProgressBar  width={this.props.value} class={this.getStyles(this.props.value)}/>     </div>
)}


}

export default DisplayProgress