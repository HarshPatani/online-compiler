import { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea/InputArea";
import LanguageDropdown from "./components/LanguageDropdown/LanguageDropdown";
import OutputArea from "./components/OutputArea/OutputArea";
import { decode } from "js-base64";
import ThemeDropdown from "./components/ThemeDropdown/ThemeDropdown";

function App() {
  const [inputOutput, setInputOutput] = useState({
    input: "",
    language_id: 4,
    output: "",
    userInput: "",
    status: "",
    memory: 0,
    time: 0,
  });
  const [theme, setTheme] = useState("vs-dark");

  const ApiKey = "3dd13858c6mshf2a9ac11e187126p1b0d70jsn1a1c89f867ae";

  const { input, language_id, userInput } = inputOutput;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputOutput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(value);
  };

  const onSubmit = async () => {
    try {
      setInputOutput((prevState) => ({
        ...prevState,
        output: "",
        status: "",
      }));

      const response = await fetch(
        "https://judge0-extra-ce.p.rapidapi.com/submissions",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Key": ApiKey,
            "X-RapidAPI-Host": "judge0-extra-ce.p.rapidapi.com",
          },
          body: JSON.stringify({
            source_code: input,
            stdin: userInput,
            language_id: language_id,
          }),
        }
      );
      const jsonToken = await response.json();

      if (jsonToken?.token) {
        const getOutput = await fetch(
          `https://judge0-extra-ce.p.rapidapi.com/submissions/${jsonToken.token}?base64_encoded=true&fields=*`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": ApiKey,
              "X-RapidAPI-Host": "judge0-extra-ce.p.rapidapi.com",
            },
          }
        );

        const jsonOutput = await getOutput.json();

        if (jsonOutput?.stdout) {
          const output = decode(jsonOutput.stdout);

          setInputOutput((prevState) => ({
            ...prevState,
            output: `${jsonOutput?.status?.description}\n${output}`,
            status: jsonOutput?.status.description,
            time: jsonOutput?.time,
            memory: jsonOutput?.memory,
          }));
        } else if (jsonOutput?.stderr) {
          const error = decode(jsonOutput.stderr);
          setInputOutput((prevState) => ({
            ...prevState,
            output: `${jsonOutput?.status?.description}\n${error}`,
            status: jsonOutput?.status.description,
            time: "N/A",
            memory: "N/A",
          }));
        } else {
          const compilation_error = decode(jsonOutput?.compile_output);
          console.log(compilation_error);
          setInputOutput((prevState) => ({
            ...prevState,
            output: `${jsonOutput?.status?.description}\n${compilation_error}`,
            status: jsonOutput?.status.description,
            time: "N/A",
            memory: "N/A",
          }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <LanguageDropdown
          handleChange={handleChange}
          inputOutput={inputOutput}
          setInputOutput={setInputOutput}
        />
        <ThemeDropdown
          theme={theme}
          setTheme={setTheme}
          handleChange={handleChange}
          inputOutput={inputOutput}
          setInputOutput={setInputOutput}
        />
      </div>
      <main>
        <InputArea
          theme={theme}
          handleChange={handleChange}
          inputOutput={inputOutput}
          setInputOutput={setInputOutput}
        />
        <OutputArea
          onSubmit={onSubmit}
          handleChange={handleChange}
          inputOutput={inputOutput}
          setInputOutput={setInputOutput}
        />
      </main>
    </div>
  );
}

export default App;
