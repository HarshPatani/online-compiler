import React from "react";
import monacoThemes from "monaco-themes/themes/themelist.json";
import DropdownStyles from "./ThemeDropdown.module.css";

const ThemeDropdown = ({ theme, setTheme }) => {
  const { theme_value } = theme;

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };
  return (
    <div className={DropdownStyles.theme_dropdown}>
      <select
        value={theme_value}
        name="theme_name"
        onChange={handleThemeChange}
        className=""
      >
        {Object.entries(monacoThemes).map(([theme_value, theme_name]) => {
          return (
            <option key={theme_value} value={theme_value}>
              {theme_name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ThemeDropdown;
