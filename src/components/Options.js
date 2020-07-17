import React from 'react';
import Option from './Option';

const Options = (props) => (        // Stateless Functional Components
        <div>
          <div className='widget-header'>
          <h3 className='widget-header__h3'>Your Options</h3>
          <button onClick={props.handleDeleteOptions} 
          className="button button--link"
          >Remove All
          </button>
          </div>
        
        {props.options.length == 0 && <p className='widget-message'>Please add options to start</p>}
        {
            props.options.map((optionData, index)=> 
             <Option key={optionData}
              option={optionData}
              count={index+1}
              handleDeleteOption={props.handleDeleteOption}
              />
              )
            }
        </div>
);


export default Options;