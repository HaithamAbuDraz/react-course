import { useState } from "react";

const useInput = (initialValue) => {
  const [user, setUser] = useState(initialValue);

  const reset = () => {
    setUser(initialValue);
  };

  const bind = {
    type: 'text',
    value: user,
    onChange: (e) => setUser(e.target.value)
  };

  return [user, bind, reset];
}

export default useInput;