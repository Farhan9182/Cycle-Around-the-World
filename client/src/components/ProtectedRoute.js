import { Navigate} from 'react-router-dom';
import { isTokenExpired, getToken } from './services/tokenService';

const ProtectedRoute = ({ element }) => {
  return isTokenExpired() || !getToken() ? (
    // If not authenticated, navigate to the /login
    <Navigate to="/login" replace />
  ) : (
    <>{element}</>
  );
};

export default ProtectedRoute;
