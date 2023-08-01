import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [symbol, setSymbol] = useState('');
    const alertType = 'alert-success';

    const changeCurrency = (event) => {
        const currency = event.target.value;
        setSymbol(currency);
        dispatch({ 
            type: 'CHG_CURRENCY', 
            payload: currency
        });
    };

    return (
        <div className={`alert ${alertType}`} style={{backgroundColor:'#94E59A', color:'white'}}>
            <span> Currency ({symbol} </span>
            <select id="currency-select" 
            style={{backgroundColor:'#94E59A', borderColor:'transparent'}} 
            onChange={changeCurrency} 
            value={symbol}>    
                <option value="$" name="Dollar"> $ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Rupee</option>
            </select>
            <span> )</span>
        </div>
    );
};

export default Currency;