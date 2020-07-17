import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error : undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const value = e.target.elements.addOption.value.trim() ;
        const error = this.props.handleAddOption(value);
        
        
        this.setState(() => ({error : error}));
        if(!error){
            e.target.elements.addOption.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type='text' name='addOption'></input>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}