import React from 'react';

export default ({autoComplete = "off", size = 's12', label, input, type = "text", meta: { touched, error }}) => {
    return (
        <div className={`input-field col ${size}`}>
            <input {...input} id={input.name} type="text" autoComplete = {autoComplete}/>
            <label className={input.value ? 'active' : ''} htmlFor={input.name}>{label}</label>
            <div className="input-error red-text text-darken-2">{touched && error}</div>
        </div>
    )
}