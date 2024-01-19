import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  // params: {id: '1'}, note `id` is a string
  const params = useParams();

  // http://localhost:5173/users/1?name=alice&age=25
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.toString()) // name=alice&age=25
  console.log(searchParams.get("name")) // alice

  const location = useLocation();
  console.log(location)
  // {pathname: '/users/1', search: '?name=alice&age=25', hash: '', state: null, key: 'default'}
  console.log(location.pathname) // /users/1

  return <p>User {params.id}</p>;
};

export default UserDetail;
