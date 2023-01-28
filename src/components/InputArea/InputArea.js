import React from "react";
import InputAreaStyles from "./InputArea.module.css";
import Editor from "@monaco-editor/react";

const InputArea = ({ inputOutput, setInputOutput, theme, handleChange }) => {
  const { input } = inputOutput;

  function handleEditorChange(value) {
    setInputOutput((prevValue) => ({
      ...prevValue,
      input: value,
    }));
  }
  return (
    <div className={InputAreaStyles.input_area}>
      <Editor
        width="100%"
        height="90vh"
        theme={theme}
        defaultLanguage="java"
        defaultValue="// some comment"
        onChange={handleEditorChange}
        value={input}
        name="input"
      />
    </div>
  );
};

export default InputArea;
