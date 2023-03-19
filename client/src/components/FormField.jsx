import { Box, InputBase, TextField, useTheme } from "@mui/material";
import React from "react";

const FormField = ({
  label,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  const theme = useTheme();
  return (
    <label
      style={{
        display: "flex",
        width: "100%",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      {label && (
        <span
          style={{
            fontFamily: "Epilogue,'sans-serif'",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "22px",
            marginBottom: "10px",
            color: theme.palette.primary[300],
          }}
        >
          {label}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          style={{
            padding: "1rem 1rem",
            outlineOffset: "2px",
            outline: "2px solid transparent",
            border: `1px solid ${theme.palette.primary[400]}`,
            backgroundColor: "transparent",
            fontFamily: "Epilogue,'sans-serif'",
            color: theme.palette.primary[400],
            fontSize: "14px",
            borderRadius: "10px",
          }}
          className="placeholder placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          style={{
            padding: "1rem",
            outlineOffset: "2px",
            outline: "2px solid transparent",
            border: `1px solid ${theme.palette.primary[400]}`,
            backgroundColor: "transparent",
            fontFamily: "Epilogue,'sans-serif'",
            color: theme.palette.primary[300],
            fontSize: "14px",
            borderRadius: "10px",
          }}
          className="placeholder"
        />
      )}
    </label>
  );
};

export default FormField;
