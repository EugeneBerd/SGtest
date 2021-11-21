import React, { useState } from "react";
import { Navigate } from "react-router";
import { Slider } from "@mui/material";
import "./Inputs.scss";

function Inputs() {
  const isLoggedIn = window.localStorage.getItem("user");
  const [days, setDays] = useState(54);
  const [amount, setAmount] = useState(10000);
  const amountMarks = [
    { value: 1000, label: "1000" },
    { value: 10000, label: "10000" },
    { value: 20000, label: "20000" },
  ];
  const percentMarks = [
    {
      value: 3,
      label: "3",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 14,
      label: "14",
    },
    {
      value: 54,
      label: "54",
    },
    {
      value: 70,
      label: "70",
    },
  ];

  function changeAmount(event) {
    setAmount(event.target.value);
    if (event.target.value >= 10000) {
      return setDays(54);
    } else return setDays(14);
  }

  function changeDays(event) {
    console.log(event.target.value);
    if ((days === 54) & (event.target.value <= days)) {
      return setDays(54);
    }
    if ((days === 14) & (event.target.value >= days)) {
      return setDays(14);
    } else {
      return setDays(event.target.value);
    }
  }

  if (isLoggedIn) {
    return (
      <div className="slider-container">
        <Slider
          aria-label="amount"
          defaultValue={10000}
          onChange={changeAmount}
          valueLabelDisplay="auto"
          marks={amountMarks}
          step={1000}
          min={1000}
          max={20000}
        />

        <Slider
          aria-label="days"
          defaultValue={54}
          value={days}
          step={null}
          onChange={changeDays}
          marks={percentMarks}
          max={70}
          min={3}
          valueLabelDisplay="off"
        />
        <div>
          days: {days}, amount: {amount}
        </div>
      </div>
    );
  } else return <Navigate to="/login" />;
}

export default Inputs;
