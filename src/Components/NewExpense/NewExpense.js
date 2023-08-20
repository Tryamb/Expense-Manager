import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>{
    
    function onSaveExpenseHandler(expense){
      const expenseData={...expense,id:'e'+Date.now().toString()};
      console.log(expenseData);
      props.onSaveExpense(expenseData);
    }
    return (
       <div className='new-expense'>
         <ExpenseForm
         onSaveExpense={onSaveExpenseHandler}/>
       </div>
    );
  
}
export default NewExpense;