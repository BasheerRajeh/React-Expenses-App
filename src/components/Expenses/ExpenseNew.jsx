import moment from "moment";
import React, { useState } from "react";
import Card from "../shared/Card";
import Input from "../shared/Input";
import "./ExpenseNew.css";

const ExpenseNew = ({ onAdd }) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [expenseDate, setExpenseDate] = useState(
        moment(new Date()).format("yyyy-MM-DD")
    );

    const clear = () => {
        setExpenseTitle("");
        setExpenseAmount("");
        setExpenseDate(moment(new Date()).format("yyyy-MM-DD"));
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (buttonClicked) {
            onAdd({ title: expenseTitle, price: expenseAmount, date: expenseDate });
            clear();
        }
        setButtonClicked((prev) => {
            return !prev;
        });
    };

    const handleExpenseTitleChanged = (e) => {
        setExpenseTitle(e.target.value);
    };
    const handleExpenseAmountChanged = (e) => {
        setExpenseAmount(e.target.value);
    };
    const handleExpenseDateChanged = (e) => {
        setExpenseDate(moment(e.target.value).format("yyyy-MM-DD"));
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
                            value={expenseTitle}
                            placeholder="Enter new expense..."
                            icon={"pen"}
                            onChange={handleExpenseTitleChanged}
                        />
                        <Input
                            type="number"
                            name="expense"
                            value={expenseAmount}
                            placeholder="Enter expense amount..."
                            icon={"dollar"}
                            onChange={handleExpenseAmountChanged}
                        />
                        <Input
                            name="expense"
                            value={expenseDate}
                            type="date"
                            icon={"calendar"}
                            onChange={handleExpenseDateChanged}
                        />
                    </>
                )}
            </form>
        </Card>
    );
};

export default ExpenseNew;
