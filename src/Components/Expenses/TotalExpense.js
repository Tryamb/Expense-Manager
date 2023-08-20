import Card from '../UI/Card';
import './TotalExpense.css'
function totalExpense(props){
    var expenses=props.item
    var sum=0;
    expenses.map(expense => (
        sum+=expense.amount
      ))
    return (
        <Card className='card-bg'>
                <h4>Your Total Expense is: {sum} INR</h4>              
        </Card>
    );
}
export default totalExpense;