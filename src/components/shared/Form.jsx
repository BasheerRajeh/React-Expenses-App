import Joi from "joi-browser";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import "./Form.css";

const Form = ({ inputs, schema, onSubmit, onChange, onCancle, ...rest }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const validateProperty = ({ name, value }) => {
        const input = inputs.find((input) => input.name === name);
        if (!input) return null;
        const subSchema = input.schema;
        const { error } = Joi.validate(value, subSchema);
        return error ? error.details[0].message : null;
    };

    const validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(data, schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    const handleChange = ({ currentTarget: input }) => {
        const errorMessage = validateProperty(input);
        const newErrors = { ...errors };
        if (errorMessage) {
            newErrors[input.name] = errorMessage;
        } else {
            delete newErrors[input.name];
        }
        const newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors || {});
        if (newErrors) return;
        onSubmit(data);
    };

    const handleReset = (e) => {
        e.preventDefault();
        setErrors({});
        setData({});
        onCancle();
    };

    const renderInput = (input) => {
        const { name, value, label, icon, schema, ...rest } = input;
        return (
            <Input
                {...rest}
                key={name}
                name={name}
                icon={icon}
                value={data[name]}
                label={label}
                onChange={handleChange}
                error={errors[name]}
            />
        );
    };

    useEffect(() => {
        if (onChange) {
            onChange(data);
        }
    }, [data, onChange]);

    return (
        <form onSubmit={handleSubmit} {...rest}>
            {inputs.map(renderInput)}
            {!onChange && (
                <div className="form-group-btns">
                    <button className="btn btn--primary" disabled={validate()}>
                        Submit
                    </button>
                    <button
                        type="reset"
                        className="btn btn--secondary"
                        onClick={handleReset}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </form>
    );
};

export default Form;
