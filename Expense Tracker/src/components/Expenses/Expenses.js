import React,{useState} from "react";
import ExpensesList from "./ExpensesList";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler= (selectedYear) =>{//Getting Filtered Year from ExpensesFilter.js through props function
        setFilteredYear(selectedYear);
    }

    const filteredExpenses =props.items.filter((expense) => {return expense.date.getFullYear().toString()===filteredYear});


    return (<div>
    <Card className="expenses">   {/*Adding Card which is Custom JXS component */}
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>);

}

export default Expenses;