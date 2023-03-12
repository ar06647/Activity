import React from "react";
import { users } from "./Components/Users";
import User from "./Components/User";

const App = () => {
  return (
    <div className="app">
      <div className="user-list">
        {users.map((user, index) => (
          <User user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
