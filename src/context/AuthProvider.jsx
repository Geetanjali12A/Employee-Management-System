import { createContext, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const { employees = [], admin = [] } = getLocalStorage();

    const adminUser = admin.find(
      (a) => a.email === email && a.password === password
    );

    if (adminUser) {
      setUser({
        role: "admin",
        firstName: "Admin",
        ...adminUser,
      });
      return;
    }

    const employeeUser = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employeeUser) {
      setUser({
        role: "employee",
        ...employeeUser,
      });
      return;
    }

    alert("Invalid credentials");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;