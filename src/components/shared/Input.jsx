import Icon from "./Icon";
import "./Input.css";

const Input = ({ name, value, label, icon, error, ...rest }) => {
    return (
        <div className="form-group">
            <label className="form-group__label" htmlFor={name}>
                {label}
            </label>
            <div className="form-control-group">
                {icon && (
                    <span className="form-control__icon">
                        <Icon icon={icon} />
                    </span>
                )}
                <input
                    {...rest}
                    name={name}
                    id={name}
                    value={value || ""}
                    autoComplete="off"
                    className="form-control"
                    style={{
                        background: `${error ? "#b4b7ba" : ""}`,
                        color: `${error ? "#fff" : ""}`,
                    }}
                />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
