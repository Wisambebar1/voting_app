import { useUserContext } from './Context'
const LoginPage = () => {
    const { login } = useUserContext();
  
    return (
      <div>
        <h1>Login</h1>
        <button onClick={login}>Login</button>
      </div>
    );
  };
  
  export default LoginPage;