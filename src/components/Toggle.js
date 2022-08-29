import React from 'react';
import '../styles/Toggle.css';

const Toggle = ({toggle, handleToggle}) => {

    return (
        <div className='toggleContainer'
        onClick={handleToggle}
        >
            <div className={`toggleBtn ${!toggle ? 'disabled' : ''}`}>
                {toggle ? 'YES' : 'OFF'}
            </div>
        </div>
    );
};

export default Toggle;