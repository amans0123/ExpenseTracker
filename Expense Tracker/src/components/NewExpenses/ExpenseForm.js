import React,{useState} from 'react';
import './ExpenseForm.css';
import NewExpense from './NewExpense';

const ExpenseForm = (props) =>{

    const [enteredTitle,setEnteredTitle]=useState(''); //State for Title 
    const [enteredAmount,setEnteredAmount]=useState(''); //State for Amount
    const [enteredDate,setEnteredDate]=useState('');  //State for Price


    const titleChangeHandler = (event) =>{   //Function for changing Title
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{  //Function for changing Amount
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{  //Function for changing date
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{ // Handles form submission
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}> Cancel</button>
            <button type='submit'> Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;