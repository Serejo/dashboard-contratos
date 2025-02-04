import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-80 p-6 bg-gray-100 rounded-xl">
        <h1 className="text-xl mb-4">Login</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
