import React from 'react';

const FormField = ({ label, type, value, onChange, error , placeholder}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={error ? 'error-input' : 'field'}
                placeholder={placeholder}
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default FormField;