import Icon from "./Icon";
import "./Input.css";

const Input = ({ name, value, label, onChange, type = "text", placeholder = "", icon }) => {

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
                    className="group-input__input"
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default Input;
