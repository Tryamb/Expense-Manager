import './ExpenseForm.css';
import React,{ useState} from 'react';
let ExpenseForm=(props)=>{
   const[newTitle,setTitle]=useState('');
   const[newAmount,setAmount]=useState('');
   const[newDate,setDate]=useState('');
   const[newType,setType]=useState('');

   const titleChangeHandler=(event)=>{
           setTitle(event.target.value);
   };
   const amountChangeHandler=(event)=>{
      setAmount(event.target.value);
};
   const dateChangeHandler=(event)=>{
      setDate(event.target.value);
};
const typeChangeHandler=(event)=>{
      setType(event.target.value);
};

const submitHandler=(event)=>{
   event.preventDefault();
   const expense={title:newTitle,amount:newAmount,date:new Date(newDate),type:newType};
   console.log(expense);
   setTitle('');
   setAmount('');
   setDate('');
   setType('');
   props.onSaveExpense(expense);
}
   return(
   <form onSubmit={submitHandler}>
     <div className='expense-form_controls'>
        <div className='expense-form_control'>
           <label>Title</label>
           <input type='text' value={newTitle} onChange={titleChangeHandler} required/>
        
        </div>

        <div className='expense-form_control'>
           <label>Type</label>
           <select name='type' value={newType} onChange={typeChangeHandler} required>
           <option value=''>-select-</option>
            <option>Food</option>
            <option>PG Rent</option>
            <option>Mobile Recharge</option>
            <option>Travel</option>
            <option>Other</option>
           </select>
        
        </div>

        <div className='expense-form_control'>
        <label>Amount</label>
           <input type='number' min='0.01' step='0.01' value={newAmount} onChange={amountChangeHandler} required/>
        </div>
        <div className='expense-form_control'>
        <label>Date</label>
           <input type='date' value={newDate} onChange={dateChangeHandler} required/>
        </div>
       
       
     </div>
     <div className='expense-form_action'>
        
     <button>Add Expense </button>
     </div>
   </form>
   );
}
export default ExpenseForm;