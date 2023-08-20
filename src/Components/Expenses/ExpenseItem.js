import ExpenseDate from './Date';
import './ExpenseItem.css'
import Card from '../UI/Card';
function expense(props){

    return (
        <Card className='expense-item'>
          <ExpenseDate date={new Date(props.date)}></ExpenseDate>
            <div className='expense-item_desc'>
                <h2>{props.title}</h2><br/>
                <div className='expense-item_price'>{props.amount+" INR"}</div>
            </div>
                         
        </Card>
    );
}
export default expense;