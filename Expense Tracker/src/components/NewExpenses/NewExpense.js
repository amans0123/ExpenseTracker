import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const [showForm,setShowForm]=useState(false); //Form is not shown initially as State is set to zero

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={...enteredExpenseData,
            id:Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setShowForm(false);   //After submitting and storing Data The Form Gets Set to Hidden
    }

    const showingFormHandler =() =>{
        setShowForm(true);   //Changing State to True So Form is Shown
    }

    const stopShowingForm = () =>{
        setShowForm(false);   //Changes State to False So Form is hidden
    }

    if(showForm){                                                      //Passing OnCancel Props allows the state of form to be changed in Child Component (ExpenseForm.js) which upon clicking cancel calls Hidden Form Function
        return <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopShowingForm}></ExpenseForm> 
        </div>
        }

    return (<div className='new-expense'>
        <button onClick={showingFormHandler}>Add New Expense</button>
    </div>)


}

export default NewExpense;