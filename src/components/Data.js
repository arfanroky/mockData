import React, { useState } from 'react';
import mockData from '../json/mockData.json';
import SingleItem from './singleItem';
import '../styles/style.css';

const Data = () => {

    const [query, setQuery] = useState('');

    return (
        <div className='container'>
          <div className='content-container'>
          <div className='input-box'>
            <input type="text" placeholder='Search..'
            onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {
            mockData.filter(e => e.label.toLowerCase().includes(query)).slice(0, 5).map(e => <SingleItem key={e.key} data={e}/>)
          }
          </div>
        </div>
    );
};

export default Data;