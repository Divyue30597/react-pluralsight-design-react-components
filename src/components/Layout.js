import { useContext } from "react";

import { ThemeContext, ThemeProvider } from "../Context/ThemeContext";

// This is the solution for the below problem
function Layout({ startingTheme, children }) {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
}

function LayoutNoThemeProvider({ startingTheme, children }) {
  const { theme } = useContext(ThemeContext);
  return (
    // If we were to run this as is, we'd get an error pointing at line 6 saying something like Theme not defined. The reason for that is that we are trying to reference the ThemeContext before it's created by ThemeProvider. That is, ThemeProvider renders after our call to useContext, meaning it does not exist yet.
    // <ThemeProvider startingTheme={startingTheme}>
    <div
      className={
        theme === "light" ? "container-  light" : "container-fluid dark"
      }
    >
      {children}
    </div>
    // </ThemeProvider>
  );
}

export default Layout;
