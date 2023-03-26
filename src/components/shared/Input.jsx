import Icon from "./Icon";
import "./Input.css";

const Input = ({
    name,
    value = "",
    label,
    onChange,
    type = "text",
    error,
    placeholder = "",
    icon,
    ...rest
}) => {
    return (
        <div className="input-group">
            <label
                htmlFor={name}
                className="input-group__label"
                hidden={label ? false : true}
            >
                {label ? label : ""}
            </label>
            <div className="group-input">
                {icon && (
                    <span className="group-input__icon">
                        <Icon icon={icon} />
                    </span>
                )}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className={`group-input__input ${error ? 'group-input__input__err' : ''}`}
                    onChange={onChange}
                    autoComplete="off"
                    {...rest}
                />
            </div>
            {error && (
                <div className={`input__error`}>{error}</div>
            )}
        </div>
    );
};

export default Input;
