import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="container">
        {/* <h1>User Profile</h1> */}
          <div className="row">
            <div className="col shadow">
              <div className="users">
                <UserList></UserList>
              </div>
            </div>
            {/* <div className="row"> */}
              <div className="col shadow ">
                <div className="Details">
                <Routes>
                  <Route
                    path="/"
                    element={<p>User Details Will Show Here...</p>}
                  ></Route>
                  <Route path="/user/:ID" element={<UserDetails />}></Route>
                </Routes>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
