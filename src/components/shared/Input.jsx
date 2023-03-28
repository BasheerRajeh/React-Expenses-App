import Icon from "./Icon";
import "./Input.css";

const Input = ({ type, name, value, label, className, options, icon, error, ...rest }) => {
    return (
        <div className={`form-group ${className}`}>
            <label className="form-group__label" htmlFor={name}>
                {label}
            </label>
            <div className="form-control-group">
                {icon && (
                    <span className="form-control__icon">
                        <Icon icon={icon} />
                    </span>
                )}
                {type !== "select" ? <input
                    {...rest}
                    type={type}
                    name={name}
                    id={name}
                    value={value || ""}
                    autoComplete="off"
                    className="form-control"
                    style={{
                        background: `${error ? "#b4b7ba" : ""}`,
                        color: `${error ? "#fff" : ""}`,
                    }}
                /> :
                    <select
                        {...rest}
                        type={type}
                        name={name}
                        id={name}
                        value={value || ""}
                        autoComplete="off"
                        className="form-control"
                        style={{
                            background: `${error ? "#b4b7ba" : ""}`,
                            color: `${error ? "#fff" : ""}`,
                        }}
                    >
                        {options.map((year) => (
                            <option key={year.value} value={year.value}>
                                {year.label}
                            </option>
                        ))}
                    </select>
                }
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
