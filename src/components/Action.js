import React from 'react' 


const Action = (props) => (         // Stateless Functional Component
        <button className='big-button'
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do ?
        </button>
);

export default Action;