import React from "react";
import OutputAreaStyles from "./OutputArea.module.css";

const OutputArea = ({ inputOutput, handleChange, onSubmit }) => {
  const { output, userInput, status, memory, time } = inputOutput;
  return (
    <div className={OutputAreaStyles.output_area}>
      <label htmlFor="output">Output</label>
      <textarea
        required
        name="output"
        id="output"
        disabled
        className={
          status === "" || "Accepted"
            ? OutputAreaStyles.output_textarea
            : OutputAreaStyles.output_textarea_error
        }
        value={output}
      ></textarea>

      <textarea
        required
        name="userInput"
        id="user-input"
        placeholder="Custom Input"
        onChange={handleChange}
        className={OutputAreaStyles.user_input}
        value={userInput}
      ></textarea>

      <div>
        <button onClick={onSubmit}>Compile and Execute</button>
        <p>
          Status: <b>{status}</b>
        </p>
        <p>
          Memory: <b>{memory}</b>
        </p>
        <p>
          Time: <b>{time}</b>
        </p>
      </div>
    </div>
  );
};

export default OutputArea;
