import { useEffect } from "react";

const _handleFetchCall = () => {
  const users = ["aniruppat", "reddy-s"];

  users.forEach(async (user) => {
    try {
      let request = await fetch(`https://api.github.com/users/${user}`);
      console.log(request);
      if (request.status !== 200) {
        throw new Error("Something went wrong.");
      }
      let resposne = await request.json();
      console.log(resposne);
    } catch (error) {
      alert(error.message);
    }
  });
};
const Users = () => {
  useEffect(() => {
    _handleFetchCall();
  }, []);
  return <div></div>;
};

export default Users;
