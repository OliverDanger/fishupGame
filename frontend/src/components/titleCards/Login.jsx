import { useState, useContext } from "react";
import { UserContext } from "../../hooks/context/UserContext";


const Login = ({ backToTitle }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    errors: '',
  });

  const {
    userData,
    loginStatus,
    login,
  } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = { ...loginData };
    console.log('🎊', { username, password });
    login({ username, password });
  };

  const { username, password } = loginData;

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button onClick={backToTitle}>Back</button>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;