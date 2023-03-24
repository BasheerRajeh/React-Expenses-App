import useFormatter from "../../hooks/useFormatter";
import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
    const { formatDate } = useFormatter();
    const [month, year, day] = formatDate(date);

    return (
        <div className="expense__date">
            <div className="expense__date__month">{month}</div>
            <div className="expense__date__year">{year}</div>
            <div className="expense__date__day">{day}</div>
        </div>
    );
};

export default ExpenseDate;
