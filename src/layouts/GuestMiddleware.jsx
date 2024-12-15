import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../Http/axiosClient";
import { setUser } from "../StateManagement/Slices/UsersSlices/UserSlices";

export const GuestMiddleware = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (token) {
        navigate("/");
    }
    setShow(true)
  }, [show, navigate]);
  return <>{show && children}</>;
};

export const GuestMiddlewareItem = ({ children }) => {
  const token = localStorage.getItem("token");

  return <>{!token && children}</>;
};
