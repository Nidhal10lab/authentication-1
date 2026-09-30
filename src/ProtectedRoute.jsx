import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loginStatus = localStorage.getItem("isLoggedin");

  if (loginStatus !== "true") {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;