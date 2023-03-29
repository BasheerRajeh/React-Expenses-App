import React from "react";
import Joi from "joi-browser";
import Form from "./../shared/Form";
import Card from "../shared/Card";
import "./ExpenseSearch.css";

const ExpenseSearch = ({ filter, onSearch, onFilter }) => {
    const inputs = [
        {
            type: "text",
            value: "",
            name: "querySearch",
            id: "querySearch",
            icon: "search",
            placeholder: "Write to search...",
            className: "form-group--long",
            schema: Joi.optional(),
        },
        {
            type: "select",
            value: filter[0].value,
            name: "year",
            id: "year",
            icon: "filter",
            options: filter,
            schema: Joi.string(),
        },
    ];

    const schema = Joi.object().keys(
        inputs.reduce((schemaObj, input) => {
            return { ...schemaObj, [input.name]: input.schema };
        }, {})
    );

    const handleChange = (data) => {
        onFilter(data["year"] || "");
        onSearch(data["querySearch"] || "");
    };

    return (
        <Card className="expense-search">
            <Form
                inputs={inputs}
                schema={schema}
                onSubmit={handleChange}
                onChange={handleChange}
                className={"form--online"}
            />
        </Card>
    );
};

export default ExpenseSearch;
