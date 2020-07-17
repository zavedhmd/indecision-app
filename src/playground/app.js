// Stateless Functional Components

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions= this.handleDeleteOptions.bind(this);
        this.handlePick= this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state={
            //options : props.options,  Not using this because reading options from localStorage
            options : []
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){
            this.setState(() => ({options}))
        }
        } catch(e){
            // DO nothing at all
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('Saving Data')
        }
        
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount')
    }
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options : []
        //     };
        // });

        this.setState(() => ({options : []}));
    }

    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option){
            return "Invalid Option!!!"
        }
        else if(this.state.options.indexOf(option)> -1){
            return "Option already exists!!!"
        }
        // this.setState((prevState) => {
        //     return {
        //         options : prevState.options.concat([option])
        //     };
        // });
        
        this.setState((prevState) => ({options : prevState.options.concat([option])}));
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
        <div>
            <Header subtitle={subtitle}/>
            <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
            />
        </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options : []
// }

// class Header extends React.Component {

//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {             // Stateless Functional Component
    return (
        <div>
            <h1>{props.title}</h1>
            {props.title && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title : 'Indecision'
}

// class Action extends React.Component {
//     render () {
//         return (
//             <button
//             onClick={this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             >
//             What should I do ?
//             </button>
//         );
//     }
// }

const Action = (props) => {         // Stateless Functional Component
    return (
        <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do ?
        </button>
    );
}

// class Options extends React.Component {
//     render() {
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {this.props.options.map((optionData)=> <Option key={optionData} option={optionData}/>)}
//             </div>
//         );
//     }
// }

const Options = (props) => {        // Stateless Functional Components
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length == 0 && <p>No Options Found</p>}
        {
            props.options.map((optionData)=> 
             <Option key={optionData}
              option={optionData}
              handleDeleteOption={props.handleDeleteOption}
              />
              )
            }
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.option}</p>
//             </div>
//         );
//     }
// }

const Option = (props) => {         // Stateless Functional Components
    return (
        <div>
            {props.option}
            <button 
            onClick={(e) => 
                props.handleDeleteOption(props.option)
            }>
            Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const value = e.target.elements.addOption.value.trim() ;
        const error = this.props.handleAddOption(value);
        // this.setState(() => {
        //     return {
        //         error : error
        //     }
        // });

        this.setState(() => ({error : error}));
        //this.setState(() => ({error})); This is same as above for variable name same
        
        if(!error){
            e.target.elements.addOption.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='addOption'></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// Stateless Functional Components
// const User = (props) => {
//     return (
//         <div>
//             <p>Name : {props.Name}</p>
//             <p>Age : {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));