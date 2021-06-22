import { useEffect, useState } from "react";
import classes from "./Users.module.css";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    _handleFetchCall();
  }, []);

  const _handleFetchCall = () => {
    const users = ["aniruppat", "reddy-s"];
    users.forEach(async (user) => {
      try {
        let request = await fetch(`https://api.github.com/users/${user}`);
        if (request.status !== 200) {
          throw new Error("Something went wrong.");
        }
        let resposne = await request.json();
        setUsersData((prevData) => {
          return [...prevData, resposne];
        });
      } catch (error) {
        alert(error.message);
      }
    });
  };

  console.log(usersData);

  return (
    <div>
      <table className={classes.table}>
        <tr>
          <th>Name</th>
          <th>Bio</th>
        </tr>
        {usersData.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.bio}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Users;
