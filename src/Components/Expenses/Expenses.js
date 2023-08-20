import './Expenses.css'
import './ExpenseItem.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'


function Expenses(props) {
  var expenses=props.item

  return (
    <Card className='card-bg'>
      {expenses.map(expense => (
        <ExpenseItem
         key={expense.id}
         date={expense.date}
         title={expense.title}
         amount={expense.amount}
         type={expense.type}/>
      ))}
      
    </Card>
  );
}
  
export default Expenses;