import { React, useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('');

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter updateFiltedYear={setFilteredYear}/>
        {expenses.map((item) => {
            return (<ExpenseItem title={item.title} date={item.date} amount={item.amount}></ExpenseItem>);
        })}
      </Card>
    </div>
  );
}

export default Expenses;
