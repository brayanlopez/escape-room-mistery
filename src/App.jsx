import { useState } from "react";

import "./App.css";

import HomeView from "./views/home.view";
import LoginView from "./views/login.view";

const PASSWORD = "4213";
const PRINCIPAL_TEXT = "Nigeria";
const isNumericRegex = new RegExp(/^\d+$/);

function App() {
  const [passwordState, setPassworState] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onClickEnter = (callback) => {
    if (passwordState === PASSWORD) {
      setShowLogin(true);
    } else {
      setShowError(true);
      callback();
    }
  };

  const onClickShowPassword = () => {
    setShowError(false);
    setShowPassword(!showPassword);
  };

  const onChangePassword = (event) => {
    setShowError(false);
    const { value } = event.target;
    if (value.length < 5 && (isNumericRegex.test(value) || value === "")) {
      setPassworState(event.target.value);
    }
  };

  return (
    <>
      {showLogin ? (
        <HomeView principalText={PRINCIPAL_TEXT} />
      ) : (
        <LoginView
          showError={showError}
          showPassword={showPassword}
          onClickEnter={onClickEnter}
          handleClickShowPassword={onClickShowPassword}
          passwordState={passwordState}
          onChangePassword={onChangePassword}
        />
      )}
    </>
  );
}

export default App;
