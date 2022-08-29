import React, { useState } from 'react';
import Toggle from './Toggle';

const SingleItem = ({data}) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='content'>
            {toggle && <div className="active"></div>}
            <div>
            <h2>{data.label}</h2>
            <p>{!data.description ? 'None': data.description }</p>
            </div>
            <Toggle toggle={toggle} handleToggle={handleToggle}/>
        </div>
    );
};

export default SingleItem;