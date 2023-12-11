import { useState } from "react";

const NewPlayer = ({ backToTitle }) => {
  const [newPlayerData, setNewPlayerData] = useState({
    username: '',
    password:'',
    password_confirmation: '',
    errors: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPlayerData({
      ...newPlayerData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('🎊',newPlayerData);
  };

  const { username, email, password, password_confirmation } = newPlayerData;

  return (
    <div>
      <h1>New Player</h1>
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
          <input
            placeholder="password confirmation"
            type="text"
            name="password_confirmation"
            value={password_confirmation}
            onChange={handleChange}
          />
        </div>
        <button onClick={backToTitle}>Back</button>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default NewPlayer;