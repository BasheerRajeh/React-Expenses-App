import Card from "../shared/Card";
import Expense from "./Expense";
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
    return (

        <Card>
            <div className="expenses">
                {expenses.map((expense, idx) => (
                    <Expense key={idx} expense={expense} />
                ))}
            </div>
        </Card>
    );
};

export default ExpensesList;
