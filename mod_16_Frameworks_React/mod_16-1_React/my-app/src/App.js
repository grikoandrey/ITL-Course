import logo from './logo.svg';
import './App.css';
// import {useState} from 'react'
// import {React} from 'react'
import React from 'react'
import Count from './components/Count';

class App extends React.Component {

    constructor() {
        super();
        this.state = {count: 0, items: []};
    }

    // items = [
    //     {
    //         number: 4,
    //         text: 'Hello world 4'
    //     },
    //     {
    //         number: 5,
    //         text: 'Hello world 5'
    //     },
    //     {
    //         number: 6,
    //         text: 'Hello world 6'
    //     },
    // ];

    // constructor() {
    //     super();
    //     this.state = {count: 0, myCount: 10};
    // }

    // changeCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // };
    // changeCount() {
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // };
    // changeCount() {
    //     this.setState((oldState) => ({
    //         count: oldState.count + 1
    //     }));
    // };

    // changeMyCount() {
    //     this.setState({
    //         myCount: this.state.myCount + 1
    //     });
    // }

    // changeMyCount() {
    //     this.setState((oldState) => ({
    //         myCount: oldState.myCount + 1
    //     }));
    // }
    addCount() {

        this.setState((prevState) => {
            const number = this.state.items.length > 0 ? (this.state.items[this.state.items.length - 1].number + 1) : 1;

            return {
                items: [...prevState.items, {
                    number: number,
                    text: `Hello world ${number}`
                }]
            }
        })
    };

    onCountChangeHandler(newCountValue) {
        // console.log(`Value for ${countNumber} changed to ${newCountValue}`);
        this.setState({count: newCountValue});
    }


    render() {
        console.log(1);

        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    {/*<p>Count is {this.state.count}</p>*/}
                    {/*/!*<button onClick={this.changeCount}>click me</button>*!/*/}
                    {/*<button onClick={this.changeCount.bind(this)}>click me</button>*/}
                    <Count initialCount={0} number={<div>1</div>} text={'Hello world 1'}
                        // onCountChange={this.onCountChangeHandler}
                           onCountChange={this.onCountChangeHandler.bind(this)}
                           count={this.state.count}
                    >
                    </Count>
                    <Count initialCount={4} number={1}
                        // onCountChange={this.onCountChangeHandler}>
                           onCountChange={this.onCountChangeHandler.bind(this)}
                           count={this.state.count}>
                        <div>2</div>
                    </Count>
                    <Count number={<div>3</div>} text={'Hello world 3'}
                        // onCountChange={this.onCountChangeHandler}>
                           onCountChange={this.onCountChangeHandler.bind(this)}
                           count={this.state.count}>
                    </Count>

                    {this.state.items.map(item => (
                        <Count number={item.number} text={item.text} key={item.number}
                               onCountChange={this.onCountChangeHandler.bind(this)}
                               count={this.state.count}>
                        </Count>
                    ))}

                    <div>
                        <button onClick={this.addCount.bind(this)}>Add new Count</button>
                    </div>
                    {/*<p>Count is {this.state.myCount}</p>*/}
                    {/*<button onClick={this.changeMyCount.bind(this)}>click me</button>*/}
                    {/*<button onClick={() => {*/}
                    {/*    this.changeCount()*/}
                    {/*}}>click me</button>*/}
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        )
    };

    componentDidMount() {
        //backend request

        this.setState({
            items: [
                {
                    number: 4,
                    text: 'Hello world 4'
                },
                {
                    number: 5,
                    text: 'Hello world 5'
                },
                {
                    number: 6,
                    text: 'Hello world 6'
                },
            ]
        })
    }
}

// function App() {
//     const [count, setCount] = useState(0);
//
//     function changeCount() {
//         setCount(count + 1);
//     }
//
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <p>Count is {count}</p>
//                 <button onClick={changeCount}>click me</button>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default App;
