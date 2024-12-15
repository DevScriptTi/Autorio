import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [child , setChild] = useState(null) 
  auth = ture
  useEffect(() => {
    if (auth) {
      setChild(children)
    }else{
      navigate('/')
    }
  });
  return <>{child}</>;
};
