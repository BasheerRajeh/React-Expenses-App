import moment from "moment";
import React, { useState } from "react";
import Card from "../shared/Card";
import Input from "../shared/Input";
import "./ExpenseNew.css";

const ExpenseNew = ({ onAdd }) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const [expenseTitle, setExpenseTitle] = useState({ value: "" });
    const [expenseAmount, setExpenseAmount] = useState({ value: 0 });
    const [expenseDate, setExpenseDate] = useState({
        value: moment(new Date()).format("yyyy-MM-DD"),
    });

    const clear = () => {
        setExpenseTitle({ error: "" });
        setExpenseAmount({ error: "" });
        setExpenseDate({ value: moment(new Date()).format("yyyy-MM-DD") });
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (
            buttonClicked &&
            (expenseTitle.value && expenseAmount.value && expenseDate.value)
        ) {
            onAdd({
                title: expenseTitle.value,
                price: expenseAmount.value,
                date: expenseDate.value,
            });
            clear();
        }
        clear();
        setButtonClicked((prev) => {
            return !prev;
        });
    };

    const handleExpenseTitleChanged = (e) => {
        if (e.target.value.trim() !== "")
            setExpenseTitle({ value: e.target.value });
        else {
            setExpenseTitle({ error: "Expence title can't be an empty value." });
        }
    };
    const handleExpenseAmountChanged = (e) => {
        if (e.target.value >= 0) setExpenseAmount({ value: e.target.value });
        else {
            setExpenseAmount({ error: "Expense amount can't be a negative value." });
        }
    };
    const handleExpenseDateChanged = (e) => {
        setExpenseDate({ value: moment(e.target.value).format("yyyy-MM-DD") });
    };

    const handleClear = () => {
        clear();
        setButtonClicked(false);
    };

    return (
        <Card className="expense-new">
            <form className="expense-form">
                <div className="expense-form-btns">
                    <button onClick={handleClick} className="btn btn--add">
                        {!buttonClicked ? "New Expense" : "Add Expense"}
                    </button>
                    {buttonClicked && (
                        <button onClick={handleClear} className="btn btn--cls">
                            Cancel
                        </button>
                    )}
                </div>
                {buttonClicked && (
                    <>
                        <Input
                            name="expense"
                            value={expenseTitle.value}
                            placeholder="Enter new expense..."
                            icon={"pen"}
                            onChange={handleExpenseTitleChanged}
                            error={expenseTitle.error}
                        />
                        <Input
                            type="number"
                            name="expense"
                            value={expenseAmount.value}
                            placeholder="Enter expense amount..."
                            icon={"dollar"}
                            error={expenseAmount.error}
                            onChange={handleExpenseAmountChanged}
                            min="0"
                        />
                        <Input
                            name="expense"
                            value={expenseDate.value}
                            type="date"
                            icon={"calendar"}
                            onChange={handleExpenseDateChanged}
                            error={expenseDate.error}
                        />
                    </>
                )}
            </form>
        </Card>
    );
};

export default ExpenseNew;
