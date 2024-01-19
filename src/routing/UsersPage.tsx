import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const UsersPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <UserList />
        </div>
        <div className="col-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
