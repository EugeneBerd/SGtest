import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";

function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(
    window.localStorage.getItem("user")
  );
  const navigate = useNavigate();
  const [phoneVal, setPhoneVal] = useState();
  const [passVal, setPassVal] = useState();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const regex = new RegExp(/^[a-zA-Z0-9._]+$/);

  useEffect(() => {
    if (isLoggedIn !== null) {
      navigate("/posts");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (phoneVal && passVal) {
      const login = phoneRef.current.state.value.replace(/[^0-9]/g, "");
      const password = passwordRef.current.value;
      setisLoggedIn([login, password]);
      window.localStorage.setItem("user", login);
    } else {
    }
  };

  const handleBlur = () => {
    const phoneValue = phoneRef.current.state.value;
    const validCheck = phoneValue.replace(/[^0-9]/g, "");
    if (validCheck.length < 12) {
      setPhoneVal(false);
    } else {
      setPhoneVal(true);
    }
  };

  const handleChange = () => {
    setPassVal(regex.test(passwordRef.current.value));
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <NumberFormat
            onBlur={() => handleBlur()}
            ref={phoneRef}
            allowEmptyFormatting
            mask="_"
            name="phone"
            format="+380 (##) ###-##-##"
          />
          {phoneVal === false && <div>please input full number</div>}
        </div>
        <div>
          <input
            onChange={() => handleChange()}
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        <div>
          {passVal && (
            <button data-testid="btn" type="submit">
              Submit
            </button>
          )}
          {passVal === false && (
            <div>please do not use Cyrillic characters</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
