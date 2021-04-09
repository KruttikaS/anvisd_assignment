import React from 'react';
import buttonHOC from './HOC';
import './counter.css';
 class Counter extends React.Component {
    

    render(){
        return(
            <div>
                <button className="button">{this.props.hoccount}</button>
            </div>
        )
    }
}

export default buttonHOC(Counter);