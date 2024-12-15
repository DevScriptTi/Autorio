import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Client } from "./layouts/welcom/Client";
import { Welcom } from "./layouts/welcom/Welcom";
import { Framwork } from "./DevScript/Index/Framwork";
import { JoinUs } from "./layouts/auth/JoinUs/joinUs";
import "./Http/axiosGlobal";
import { Provider } from "react-redux";
import { store } from "./StateManagement/Stores/Store";
import { Dashboard } from "./layouts/dashboard/Dashboard";
import { AuthMiddleware } from "./layouts/AuthMiddleware";
import { Register } from "./layouts/auth/Register/Register";
import { GuestMiddleware } from "./layouts/GuestMiddleware";
import { Login } from "./layouts/auth/Login/Login";
import { JoinRequestIndex } from "./layouts/dashboard/JoinReques/index/Index";
import { Error } from "./layouts/Error";
import { Vendors } from "./layouts/dashboard/Vendors/Index/Vendors";
import { References } from "./layouts/dashboard/refrences/index/References";
import { Products } from "./layouts/dashboard/items/index/Products";
import { Categories } from "./layouts/dashboard/Categories/index/Categories";
import { Order } from "./layouts/welcom/Order/Order";
import { Orders } from "./layouts/dashboard/Orders/index/Order";
function App() {
  darkMode();

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                  <Client />
              }
            >
              <Route index element={<GuestMiddleware><Welcom /></GuestMiddleware>} />
              <Route
                path="order/:id"
                element={
                    <Order />
                }
              />
              <Route
                path="JoinUs"
                element={
                    <JoinUs />
                }
              />
              <Route
                path="Register"
                element={
                    <Register />
                }
              />
              <Route
                path="Login"
                element={
                    <Login />
                }
              />
              
            </Route>
            <Route
              path="/dashboard"
              element={
                <AuthMiddleware>
                  <Dashboard />
                </AuthMiddleware>
              }
            >
              <Route
                index
                element={<AuthMiddleware>"Statistic"</AuthMiddleware>}
              />
              <Route
                path="profile"
                element={<AuthMiddleware>"Profile"</AuthMiddleware>}
              />
              <Route
                path="vendors"
                element={<AuthMiddleware><Vendors/></AuthMiddleware>}
              />
              <Route
                path="refrences"
                element={
                  <AuthMiddleware>
                    <References/>
                  </AuthMiddleware>
                }
              />
              <Route
                path="vendors"
                element={<AuthMiddleware><Vendors/></AuthMiddleware>}
              />
              <Route
                path="joinRequests"
                element={
                  <AuthMiddleware>
                    <JoinRequestIndex />
                  </AuthMiddleware>
                }
              />
              <Route
                path="orders"
                element={<AuthMiddleware><Orders/></AuthMiddleware>}
              />
              <Route
                path="categories"
                element={<AuthMiddleware><Categories/></AuthMiddleware>}
              />
              <Route
                path="products"
                element={<AuthMiddleware><Products/></AuthMiddleware>}
              />
            </Route>
            <Route path="/framework" element={<Framwork />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

function darkMode() {
  const modeDark = localStorage.getItem("mode");
  if (modeDark == null) {
    localStorage.setItem("mode", "light");
  }
  const content = document.getElementsByTagName("html")[0];
  content.classList.add(localStorage.getItem("mode"));
}

export default App;
