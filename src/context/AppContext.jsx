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

/**
 * Global state provider component.
 * Wraps children with AppContext, providing theme and user state along
 * with setter functions to update them.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components that can access the context.
 * @returns {JSX.Element} The context provider wrapper.
 */
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

/**
 * Custom hook to access the global AppContext.
 * Must be used within an AppProvider. Throws an error if called outside of one.
 * @returns {{theme: string, user: object|null, setTheme: Function, setUser: Function}} The context value.
 */
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
