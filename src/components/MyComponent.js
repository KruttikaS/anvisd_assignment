import React from 'react';

//The problem with this code was the clickHandler was not properly binded with this.
//In the setState method we must update the state using this.state.clicks
//To checkout the profile page please start the json server using json-server -w -p 3001 registerData.json.


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    // set the default internal state
        // this.refs=React.createRef;
        this.clickHandler = this.clickHandler.bind(this);
    this.state = {
    clicks: 0
    };
    }
    componentDidMount() {
    this.refs.myComponentDiv.addEventListener('click',this.clickHandler);
    }
    componentWillUnmount() {
    this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
    }
    clickHandler() {
    this.setState({clicks:this.state.clicks + 1 });
    }
    render() {
    let children = this.props.children;
    return (
    <div className="my-component" ref="myComponentDiv">
        <h2>My Component {this.state.clicks} clicks</h2>
        <h3>{this.props.headerText}</h3>
        {children}
    </div>
    );
    }
    }

    export default MyComponent;