import React from "react"

const AppInput = (props) => {
    const {onChange, name, type, placeholder, disabled, value, error, className} = props;
    return (
        <div className={className}>
            <input
                onChange={onChange}
                name={name}
                type={type || 'text'}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                error={error}
                className={'form-control'}
                style={error && { border: 'solid 1px red' }}
            />
            <span>{error}</span>

        </div>
    )
}

export default AppInput