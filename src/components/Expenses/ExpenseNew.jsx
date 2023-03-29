import React, { useState } from "react";
import Joi from "joi-browser";
import Form from "./../shared/Form";
import Card from "../shared/Card";
import "./ExpenseNew.css";

const inputs = [
    {
        type: "text",
        value: "",
        label: "Title",
        name: "title",
        id: "title",
        icon: "pen",
        placeholder: "Enter expense title...",
        schema: Joi.string().required().label("Title"),
    },
    {
        type: "number",
        value: "",
        label: "Price",
        name: "price",
        id: "price",
        icon: "dollar",
        placeholder: "Enter expense amount...",
        schema: Joi.number().required().min(0).label("Price"),
    },
    {
        type: "date",
        value: "",
        label: "Date",
        name: "date",
        id: "date",
        icon: "calendar",
        schema: Joi.string().required().label("Date"),
    },
];

const schema = Joi.object().keys(
    inputs.reduce((schemaObj, input) => {
        return { ...schemaObj, [input.name]: input.schema };
    }, {})
);

const ExpenseNew = ({ onAdd }) => {
    const [clicked, setClicked] = useState(false);

    const handleSubmit = (data) => {
        onAdd(data);
        setClicked(false);
    };

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <Card className={"expense-new"}>
            {clicked ? (
                <Form
                    inputs={inputs}
                    schema={schema}
                    onSubmit={handleSubmit}
                    onCancle={() => setClicked(false)}
                />
            ) : (
                <div className="form-group-btns">
                    <button className="btn btn--primary" onClick={handleClick}>
                        Add Expenses
                    </button>
                </div>
            )}
        </Card>
    );
};

export default ExpenseNew;
