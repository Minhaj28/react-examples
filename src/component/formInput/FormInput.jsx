import React from "react";
import PropTypes from 'prop-types';

import "./FormInput.css";

const FormInput = ({label,handleOnChange,name,type}) => {
  return (
    <div className="formInput">
      <label>{label}: </label>
      <input onChange={handleOnChange} name={name} type={type} />
    </div>
  );
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
}

FormInput.defaultProps = {
    type: 'email',
}


export default FormInput;
