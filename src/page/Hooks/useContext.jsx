import React, { createContext, useContext } from 'react';
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};
const ThemeContext = createContext(themes.light);
function ThemeButton(props) {
  // ! 可以获到context传入的参数
  const data = useContext(ThemeContext);
  return (
    <button
      style={{
        backgroundColor: data.background,
        color: '#fff'
      }}
    >
      内部数据
    </button>
  );
}
export default function UseContext() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <ThemeButton></ThemeButton>
    </ThemeContext.Provider>
  );
}
