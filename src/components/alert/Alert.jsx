import React from "react";

const Alert = (props) => {
  const capitalLetter = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div
      className="container"
      style={{
        height: "50px",
        width: "70%",
      }}
    >
      {props.alert && (
        <div
          className={`mx-5 p-2 alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalLetter(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
