import { useState } from "react";
import { useSelector } from "react-redux";

export const isAuth = () => {
  const user = useSelector((state) => state.user);
  if (Object.keys(user.user).length === 0) {
    return false;
  } else {
    return true;
  }
};

export const isAdmin = () => {
  const user = useSelector((state) => state.user);
  if (user.type === "admin") {
    return true;
  } else {
    return false;
  }
};

// export const IsAdmin = ({ children }) => {
//   const user = useSelector((state) => state.user);
//   const [showContent, setShowContent] = useState(false);

//   if (user.type === "admin") {
//     setShowContent(true);
//   }

//   return <>{showContent && { children }}</>;
// };

export const isVendor = () => {
  const user = useSelector((state) => state.user);
  if (user.type === "vendor") {
    return true;
  } else {
    return false;
  }
};
