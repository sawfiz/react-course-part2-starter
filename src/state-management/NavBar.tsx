import LoginStatus from './LoginStatus';
import useTasksStore from './tasks/store';

const NavBar = () => {
  const {tasks} = useTasksStore();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
