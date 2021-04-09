import React ,{Component} from 'react';
import Counter from './Counter';
import './counter.css';
const buttonHOC = (COUNTER) => {

    class NewHOC extends React.Component {
        constructor(props){
            super(props);
      
        this.state={
            count:0
        }

        this.countIncremented = this.countIncremented.bind(this);
    }
     countIncremented = () => {
        this.setState({count:this.state.count + 1})
    }
      render(){
          return(
              <button className="button" onClick={this.countIncremented} >{this.state.count}</button>
          )
      }
    }

  return NewHOC;
}

export default buttonHOC;

