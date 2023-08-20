import './App.css';
import React,{useEffect, useState} from 'react';
import NewExpense from './Components/NewExpense/NewExpense'
import Expenses from './Components/Expenses/Expenses'
import TotalExpense from './Components/Expenses/TotalExpense';
function App(){
    const API_URL="";
    console.log(API_URL)
    const dummyexpense=[
        
    ];
   
    function getExpenses(){
        fetch(API_URL).then(
        response=>{
            return response.json();
        }
    ).then(
        data=>{
            console.log(data)
            setExpense(data.data)
            setExpenseFullList(data.data)
        }
    )
    }

    const [expenses,setExpense]=useState(dummyexpense);
    const [expensesFullList,setExpenseFullList]=useState(dummyexpense);
    const[appliedFilter,setFilter]=useState('all');

    

    function filterList(type){

            const filteredExpenses = expensesFullList.filter(expense => expense.type === type);
            
            setExpense(filteredExpenses);
          
    }

    const applyFilter=(event)=>{
        setFilter(event.target.value);
        console.log(event.target.value);
        if(event.target.value==='all'){
            setExpense(expensesFullList)
        }
        else if(event.target.value==='Food'){
            filterList('Food')
        }
        else if(event.target.value==='PG Rent'){
            filterList('PG Rent')
        }
        else if(event.target.value==='Mobile Recharge'){
            filterList('Mobile Recharge')
        }
        else if(event.target.value==='Travel'){
            filterList('Travel')
        }
        else if(event.target.value==='Other'){
            filterList('Other')
        }
  };

    useEffect(()=>{
     getExpenses()
  },[]);


function onSaveExpenseHandler(expense){
    fetch(API_URL,{
        method:'POST',
        body:JSON.stringify(expense) 
    }).then(
        response=>response.json()
        ).then(data => {
            alert(`Status: ${data.status}\nMessage: ${data.message}`);
            getExpenses();
          })      
            
    }

    return (
        <div>
     <h2>Let's get started</h2>
     <NewExpense onSaveExpense={onSaveExpenseHandler}/>
     <div className='filterLayout'>
       <label>Filter By</label>
           <select name='type' value={appliedFilter} onChange={applyFilter}>
                <option value='all'>All</option>
                <option value='Food'>Food</option>
                <option value='PG Rent'>PG Rent</option>
                <option value='Mobile Recharge'>Mobile Recharge</option>
                <option value='Travel'>Travel</option>
                <option value='Other'>Other</option>
           </select>
        </div>
     <Expenses item={expenses}></Expenses>

     <TotalExpense item={expenses}/>
     </div>
    );
}
export default App;