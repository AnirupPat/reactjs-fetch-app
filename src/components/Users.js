import { useEffect, useState } from "react";
import classes from "./Users.module.css";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    _handleFetchCall();
  }, []);

  const _handleFetchCall = () => {
    const users = ["aniruppat", "reddy-s", "sharansp"];
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
        <tbody>
          <tr>
            <th>Name</th>
            <th>Bio</th>
            <th>Location</th>
          </tr>
          {usersData.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.bio === null ? "Under construction" : user.bio} </td>
              <td>{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
