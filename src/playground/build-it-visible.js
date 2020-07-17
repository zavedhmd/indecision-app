class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility : false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
            visibility : !prevState.visibility
            }
        });
        console.log(this.state.visibility);
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility ? <p>This is the detail section</p> : ''}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));



// console.log("In Build it app");

// const buttonData = {
//     textToShow : ["Show Details", "Hide Details"]
// };

// let flag = false;

// const showDetails = () => {
//     flag = true;
//     render();
// }

// const hideDetails = () => {
//     flag = false;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const buildIt = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button hidden ={flag} onClick={showDetails}>Show Details</button>
//             <button hidden ={!flag} onClick={hideDetails}>Hide Details</button>
//             {flag && <p>You are a fool !</p>}
//         </div>
//     );
//     ReactDOM.render(buildIt, appRoot);
// }

// render();

// Another way to implement the same - 

// const buttonData = {
//     textToShow : ["Show Details", "Hide Details"]
// };

// let text = buttonData.textToShow[0];
// let flag = false;

// const Details = () => {
//     if(text == buttonData.textToShow[0]){
//         flag = true;
//         text = buttonData.textToShow[1];
//     }
//     else {
//         flag= false;
//         text = buttonData.textToShow[0];
//     }
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const buildIt = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={Details}>{text}</button>
//             {flag && <p>You are a fool !</p>}
//         </div>
//     );
//     ReactDOM.render(buildIt, appRoot);
// }

// render();

// Another Way -




// let visibility = false;

// const toggle = () => {
//     visibility = !visibility;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const buildIt = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>
//             {visibility ? "Hide Details" : "Show Details"}
//             </button>
//             {visibility && <p>You are a fool !</p>}
//         </div>
//     );
//     ReactDOM.render(buildIt, appRoot);
// }

// render();