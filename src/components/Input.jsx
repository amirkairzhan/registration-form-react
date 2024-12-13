import React from "react";

function Input({
    className,
    type,
    name,
    placeholder,
    value,
    onChange
}) {
  return (
    <>
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
