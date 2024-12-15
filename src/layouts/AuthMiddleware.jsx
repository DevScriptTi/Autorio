import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { axiosClient } from "../Http/axiosClient";
import { setUser } from "../StateManagement/Slices/UsersSlices/UserSlices";

export const AuthMiddleware = ({ children }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosClient.get("api/user");
        let data = {};
        data.token = token;
        data.data = response.data[0].data;
        data.type = response.data[0].type;
        dispatch(setUser(data));
        setShow(true);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/");
      }
    };
    if (Object.keys(user.user).length === 0) {
      if (token) {
        fetchUser();
      } else {
        navigate('/')

      }
    } else {
      setShow(true);
    }
  }, [show, navigate]);
  return <>{show && children}</>;
};

export const AuthMiddlewareItem = ({ children }) => {
  const user = useSelector((state) => state.user);

  return <>{Object.keys(user.user).length !== 0 && children}</>;
};
