import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface RootState {
  auth: {
    token: string | null;
  };
}

function PrivateRoute({ children }) {
  const { token } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (token === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
