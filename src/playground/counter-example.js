class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.state = {
            //count : props.count, Not using this because reading options from localStorage
            count : 0
        };
    }

    componentDidMount () {
        try{
        const count = localStorage.getItem('count');
        if(!isNaN(count)){
            this.setState(() => ({count : parseInt(count)}))
            }
        } catch(e) {
            // Do nothing
        }
        
    }

    componentDidUpdate() {
        const count = this.state.count;
        localStorage.setItem('count',count);
    }

    handleAddOne() {
        console.log('handleAddOne')
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
            count : prevState.count -1
        }
        });
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                count : 0
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleRemoveAll}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count : 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();