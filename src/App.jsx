import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <Outlet />
        <Rightbar />
      </div>
    </div>
  );
};

function App() {
  const currentUser =true;
  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
