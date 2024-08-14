import React from "react";

const alertTypes = {
  success: "bg-green-100 border-green-500 text-green-900",
  error: "bg-red-100 border-red-500 text-red-900",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-900",
  info: "bg-blue-100 border-blue-500 text-blue-900",
};

const Alert = ({ type = "info", message, onClose }) => {
  const alertClass = alertTypes[type] || alertTypes.info;

  return (
    <div
      className={`flex p-4 mb-4 border-l-4 ${alertClass} rounded`}
      role="alert"
    >
      <div className="flex-1">
        <p>{message}</p>
      </div>
      <button
        type="button"
        className="ml-4 -mx-1.5 -my-1.5 rounded p-1.5 inline-flex h-8 w-8 hover:bg-opacity-30"
        onClick={onClose}
      >
        <svg
          className="w-5 h-5 text-current"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Alert;
