import React from 'react'
import './Count.css'

class Count extends React.Component {

    constructor() {
        super();
        this.state = {value: 0}
    }

    // static defaultProps = {
    //     initialCount: 100
    // }
    //
    // constructor(props){
    //     super(props);
    //     // this.state = {count: props.hasOwnProperty('initialCount') ? props.initialCount : 0};
    //     this.state = {count: props.initialCount};
    // }

    changeCount() {
        // this.setState((oldState) => ({
        //     count: oldState.count + 1
        // }), () => {
        //     this.props.onCountChange(this.props.number, this.state.count);
        // });

        this.props.onCountChange(this.props.count + ((!isNaN(this.state.value)) ? parseInt(this.state.value) : 1));
        this.setState({value: 0});
    };

    showVal() {
        return this.props.number === 1 ? (<div>{this.props.number}</div>) : (<div>no number</div>);
    }

    changeValue(event) {
        this.setState({value: event.target.value});
    }

    render() {
        // const val = this.props.number === 1 ? (<div>{this.props.number}</div>) : (<div>no number</div>);

        // if (this.props.number === 1) {
        //     return (<div>no component</div>);
        // } else {
            return (

                <div className="Count">
                    {/*{val}*/}
                    {/*{this.showVal()}*/}
                    {this.props.number === 1 && (<div>{this.props.number}</div>)}
                    {this.props.number !== 1 && (<div>no number</div>)}
                    {this.props.text}
                    {/*<p>Count is {this.state.count}</p>*/}
                    <p>Count is {this.props.count}</p>
                    <input type="text" value={this.state.value} onChange={this.changeValue.bind(this)} />
                    <button onClick={this.changeCount.bind(this)}>click me</button>
                    {/*{this.props.children}*/}
                    {this.props.number}
                </div>
            );
        // }
    };
}

export default Count;