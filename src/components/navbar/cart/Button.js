import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button
      style={{
        color: "#F5F5F5",
        backgroundColor: "#2D2727",
        borderRadius: "1rem",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button