import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function Login() {
  const { login } = useContext(AuthContext); // ✅ THIS IS REQUIRED

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password); // ✅ updates user in context
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full px-8 py-2 mb-3"
            type="email"
            placeholder="Enter email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full px-8 py-2 mb-5"
            type="password"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="bg-emerald-600 text-white py-2 rounded-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
