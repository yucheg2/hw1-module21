import { Link, Switch, useParams, Route } from "react-router-dom";

function HomePage () {
  return (
    <div>
    <h1> HomePage </h1>
    <Link to="/users"> список челов </Link>
  </div> 
  )
}

function UsersLayout() {
  const {userId}=useParams()
  return  (
  <div> 
    <Link to="/">На главную</Link>
    {userId
      ? <Switch>
          <Route path={`/users/:userId/edit`} component={EditUserPage}/>
          <Route path={`/users/:userId`} component={UserPage}/>
      </Switch>
      : <UsersListPage/>
    }
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
  const userId = useParams()
  return (
  <div>
    <h1>Страница чела</h1>
    <ul>
      <li><Link to="/users">список челов</Link></li>
      <li><Link to={"/users/" + userId.userId + "/edit"}>отредачим челика</Link></li>
      {"Челикс нумба " + userId.userId}
    </ul>
  </div>
)
}

function EditUserPage() {
  const {userId} = useParams()
  return (
    <div>
      <h1>Редактировать чела</h1>
      <li><Link to={"/users/" + userId}>Страница чела</Link></li>
      <li><Link to={"/users/" + (Number(userId)+1)}>другой челик</Link></li>
      <li><Link to="/users">список челов</Link></li>
    </div>
  )
}

function App() {
  // const routes = useRoutes([
  //   { path: "/", element: <HomePage/>},
  //   { path: "users", element: <UsersLayout/>, children:[
  //     { path: "", element:<UsersListPage/>},
  //     { path: ":userId", children: [
  //       {path: "", element: <Navigate to="profile"/>},
  //       {path: "profile", element: <UserPage/>},
  //       {path: "edit", element:<EditUserPage/>}
  //     ]}
  //     ] 
  //   },
  //   { path: "*", element: <Navigate to="/"/> }
  // ])
  return (
    <>
      <h1>app</h1>
      <hr/>
      <Switch>
        <Route path="/users/:userId?" component={UsersLayout}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </>
  );
}

export default App;
