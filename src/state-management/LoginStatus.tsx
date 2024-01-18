import useAuthStore from "./auth/AuthStore";

const LoginStatus = () => {
  // const { user, dispatch } = useAuth();
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          {/* <a onClick={() => setUser('')} href="#"> */}
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      {/* <a onClick={() => setUser('mosh.hamedani')} href="#"> */}
      <a onClick={() => login("mosh")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
