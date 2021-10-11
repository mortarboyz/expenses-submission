import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(p) {

    return (
        <div className="expense-item">
            <ExpenseDate date={p.date} />
            <div className="expense-item__description">
                <h2>{p.title}</h2>
                <div className="expense-item__price">${p.amount}</div>
            </div>
        </div>
    )
};

export default ExpenseItem;