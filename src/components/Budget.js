import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

    const changeBudget = (event) => {
        const newBudget = event.target.value;

        const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

        if (newBudget > 20000) { 
          alert('The budget cannot be higher than 20000.'); 
          return;
        }

        if (newBudget < totalExpenses){
            alert('You cannot spend more');
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget),
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input required='required'
                type='number'
                value={budget}
                style={{size: 10}}
                step='10'
                onInput={(event) => changeBudget(event)}></input>
        </div>
    );
};
export default Budget;