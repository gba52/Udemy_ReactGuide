import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({expenses}) {

    return (
        <div>
            {expenses.map((item) => {
                return (<ExpenseItem title={item.title} date={item.date} amount={item.amount}></ExpenseItem>);
            })}
        </div>
    )
}

export default Expenses;