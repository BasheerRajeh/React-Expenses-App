import Icon from "./Icon";
import "./Input.css";

const Input = ({ name, value, label, placeholder, icon }) => {
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
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className="group-input__input"
                />
            </div>
        </div>
    );
};

export default Input;
