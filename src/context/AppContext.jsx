import { createContext, useContext, useState } from "react";

/**
 * Example context provider.
 * Rename and modify for your project's global state needs.
 *
 * Usage:
 * 1. Wrap your app or a subtree with <AppProvider>
 * 2. Access state with useAppContext() in any child component
 */

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, setState] = useState({
    // Add your global state here
    theme: "light",
    user: null,
  });

  const value = {
    ...state,
    setTheme: (theme) => setState((prev) => ({ ...prev, theme })),
    setUser: (user) => setState((prev) => ({ ...prev, user })),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
