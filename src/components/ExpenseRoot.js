import ExpenseItem from "./ExpenseItem";
import './ExpenseRoot.css';

function ExpenseRoot(p) {
    return (
        <div className="expenses">
            {
                p.expenses.map(x => (
                    <ExpenseItem date={x.date} title={x.title} amount={x.amount} />
                ))
            }
        </div>
        
    );
}

export default ExpenseRoot;