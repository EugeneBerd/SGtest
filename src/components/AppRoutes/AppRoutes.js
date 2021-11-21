import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import Posts from "../Posts/Posts";
import Error from "../Error/Error";
import Inputs from "../Inputs/Inputs";

function AppRoutes({ isLoggedIn }) {
  function RequireAuth() {
    if (!!isLoggedIn) {
      return <Navigate to="/posts" />;
    } else return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/" element={<RequireAuth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/inputs" element={<Inputs />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
