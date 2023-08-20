import './Date.css'
function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US', {month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
    return (
        <div className='expense-item_date'>
            
            <div>{month}</div>
            <div>{year}</div>
            <div className='expense-item_date_day'>{day}</div>
        </div>
    );
}
export default ExpenseDate;