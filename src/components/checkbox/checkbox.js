import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({value, checked, onChange, name, label}) => {
  return (
    <>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <label htmlFor={name}>{label}</label>
    </>
  );
};

Checkbox.propTypes = {
    value: PropTypes.bool, 
    checked: PropTypes.bool, 
    onChange: PropTypes.func, 
    name: PropTypes.string, 
    label: PropTypes.string,
};

export default Checkbox;
