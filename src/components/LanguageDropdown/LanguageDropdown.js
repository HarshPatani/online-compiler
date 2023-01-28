import React from "react";
import DropdownStyles from "./LanguageDropdown.module.css";

const LanguageDropdown = ({ inputOutput, handleChange }) => {
  const { language_id } = inputOutput;
  const languages = [
    {
      id: 11,
      name: "Bosque (latest)",
      value: "typescript",
    },
    {
      id: 3,
      name: "C3 (latest)",
      value: "c",
    },
    {
      id: 1,
      name: "C (Clang 10.0.1)",
      value: "c",
    },
    {
      id: 2,
      name: "C++ (Clang 10.0.1)",
      value: "cpp",
    },
    {
      id: 13,
      name: "C (Clang 9.0.1)",
      value: "c",
    },
    {
      id: 14,
      name: "C++ (Clang 9.0.1)",
      value: "cpp",
    },
    {
      id: 22,
      name: "C# (Mono 6.12.0.122)",
      value: "csharp",
    },
    {
      id: 21,
      name: "C# (.NET Core SDK 3.1.406)",
      value: "csharp",
    },
    {
      id: 15,
      name: "C++ Test (Clang 10.0.1, Google Test 1.8.1)",
      value: "cpp",
    },
    {
      id: 12,
      name: "C++ Test (GCC 8.4.0, Google Test 1.8.1)",
      value: "cpp",
    },
    {
      id: 23,
      name: "C# Test (.NET Core SDK 3.1.406, NUnit 3.12.0)",
      value: "csharp",
    },
    {
      id: 24,
      name: "F# (.NET Core SDK 3.1.406)",
      value: "fsharp",
    },
    {
      id: 4,
      name: "Java (OpenJDK 14.0.1)",
      value: "java",
    },
    {
      id: 5,
      name: "Java Test (OpenJDK 14.0.1, JUnit Platform Console Standalone 1.6.2)",
      value: "java",
    },
    {
      id: 6,
      name: "MPI (OpenRTE 3.1.3) with C (GCC 8.4.0)",
      value: "c",
    },
    {
      id: 7,
      name: "MPI (OpenRTE 3.1.3) with C++ (GCC 8.4.0)",
      value: "cpp",
    },
    {
      id: 8,
      name: "MPI (OpenRTE 3.1.3) with Python (3.7.7)",
      value: "python",
    },
    {
      id: 89,
      name: "Multi-file program",
      value: "java",
    },
    {
      id: 9,
      name: "Nim (stable)",
      value: "c",
    },
    {
      id: 10,
      name: "Python for ML (3.7.7)",
      value: "python",
    },
    {
      id: 20,
      name: "Visual Basic.Net (vbnc 0.0.0.5943)",
      value: "vbnet",
    },
  ];

  return (
    <div className={DropdownStyles.language_dropdown}>
      <select
        value={language_id}
        onChange={handleChange}
        className=""
        name="language_id"
      >
        {languages.map((lang) => {
          return (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LanguageDropdown;
