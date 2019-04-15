import React from "react";

const FormField = ({
  fieldTitle,
  fieldClassname,
  onChangeField,
  fieldName,
  fieldType,
  divClass,
}) => {
  return (
    <div className={divClass}>
      <span>{fieldTitle}</span>
      <input
        className={fieldClassname}
        onChange={e => onChangeField({ [fieldName]: e.target.value })}
        type={fieldType}
      />
    </div>
  );
};

export default FormField;
