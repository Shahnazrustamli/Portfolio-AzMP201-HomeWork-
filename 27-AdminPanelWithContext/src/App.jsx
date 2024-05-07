import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./assets/layout/Layout";
import Edit from "./assets/pages/Edit/Edit";
import Post from "./assets/pages/post/Post";
import Admin from "./assets/pages/admin/Admin";
import { useEffect, useReducer } from "react";
import { getAllData } from "./services/provider";
import { endPoints } from "./services/api";
import reducer from "./reducers/reducer";
import Users from "./assets/pages/Users/Users";
import LogIn from "./assets/pages/LogIn/LogIn";
import SignIn from "./assets/pages/register/SignIn";
import Detail from "./assets/pages/detail/Detail";

// import { BASE_URL } from "./services/api";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    api: [],
    suppliers: [],
  });
  useEffect(() => {
    getAllData(endPoints.suppliers).then((res) => {
      // console.log(res);
      dispatch({
        type: "setApi",
        api: res,
      });
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout dispatch={dispatch} />}>
            <Route
              path="admin"
              index
              element={<Admin state={state} dispatch={dispatch} />}
            />
            <Route path="edit" element={<Edit />} />
            <Route path="post" element={<Post />} />
            <Route path="users" element={<Users />} state={state} dispatch={dispatch} />
            <Route path="login" element={<LogIn />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="/admin/:id" element={<Detail />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
