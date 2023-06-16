import { Link, Navigate, Outlet, useParams, useRoutes } from "react-router-dom";

function HomePage () {
  return (
    <div>
    <h1> HomePage </h1>
    <Link to="/users"> список челов </Link>
  </div> 
  )
}

function UsersLayout() {
  return  (
  <div> 
    <Link to="/">На главную</Link>
    <Outlet/>
  </div>
  )
}

function UsersListPage () {
  return (<div>
  <h1>Список челов</h1>
  <ul>
    <li><Link to="/users/1">чел 1</Link></li>
    <li><Link to="/users/2">чел 2</Link></li>
    <li><Link to="/users/3">чел 3</Link></li>
  </ul>
</div>)
}

function UserPage() {
  return (
  <div>
    <h1>Страница чела</h1>
    <ul>
      <li><Link to="/users">список челов</Link></li>
      <li><Link to={"/users/" + useParams().userId + "/edit"}>отредачим челика</Link></li>
      {"Челикс нумба " + useParams().userId}
    </ul>
  </div>
)
}

function EditUserPage() {
  return (
    <div>
      <h1>Редактировать чела</h1>
      <li><Link to={"/users/" + useParams().userId}>Страница чела</Link></li>
      <li><Link to={"/users/" + (Number(useParams().userId)+1)}>другой челик</Link></li>
      <li><Link to="/users">список челов</Link></li>
    </div>
  )
}

function App() {
  const routes = useRoutes([
    { path: "/", element: <HomePage/>},
    { path: "users", element: <UsersLayout/>, children:[
      { path: "", element:<UsersListPage/>},
      { path: ":userId", children: [
        {path: "", element: <Navigate to="profile"/>},
        {path: "profile", element: <UserPage/>},
        {path: "edit", element:<EditUserPage/>}
      ]}
      ] 
    },
    { path: "*", element: <Navigate to="/"/> }
  ])
  return (
    <>
      <h1>app</h1>
      <hr/>
      {routes}
    </>
  );
}

export default App;
