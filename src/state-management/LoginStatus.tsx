import useAuth from "./auth/useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          {/* <a onClick={() => setUser('')} href="#"> */}
          <a onClick={() => dispatch({ type: "Logout" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      {/* <a onClick={() => setUser('mosh.hamedani')} href="#"> */}
      <a onClick={() => dispatch({ type: "Login", user: "mosh" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
