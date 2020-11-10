import { Redirect } from 'react-router-dom';
import { useAuth } from "./ProvideAuth.component";

const AuthButton = () => {
  const auth = useAuth();

  return auth.user ? '' : (
      <Redirect
        to={{
          pathname: '/home'
        }}
      />
    )
}

export default AuthButton;