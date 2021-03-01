import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthStatus } from "../../actions";
import { CheckBox } from "../../components";

const SignIn = () => {
  const authStore = useSelector((store) => store);
  const [auth, setAuth] = useState(authStore);
  const dispatch = useDispatch();
  const authenticate = (event) => {
    console.log(event.target.checked);
    setAuth(event.target.checked);
    dispatch(setAuthStatus(event.target.checked));
  };
  return (
    <>
      <CheckBox
        value={auth}
        checked={auth}
        onChange={authenticate}
        name="userAuth"
        label="I'm authenticated" />
    </>
  );
};

export default SignIn;
