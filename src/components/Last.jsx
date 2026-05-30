import { UsernameContext } from "../App";

const Last = () => {
  return (
    <div>
      <UsernameContext.Consumer>
        {(username) => {
          return <h1>My username is {username}</h1>
        }}
      </UsernameContext.Consumer>
    </div>
  );
};

export default Last;
