import useFormatter from "../../hooks/useFormatter";
import ExpenseDate from "./ExpenseDate";
import "./Expense.css";

const Expense = ({ expense }) => {
    const { formatCurrency } = useFormatter();

    const price = formatCurrency(expense.price);

    return (
        <article className="expense">
            <ExpenseDate date={expense.date} />
            <div className="expense__title">{expense.title}</div>
            <div className="expense__price">
                <span className="expense__price-number">{price}</span>
            </div>
        </article>
    );
};

export default Expense;
