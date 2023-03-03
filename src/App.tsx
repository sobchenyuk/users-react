import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Users} from "./features/users/Users";
import {Albums} from "./features/albums/Albums";
import {Posts} from "./features/posts/Posts";
import './App.css';
import {Pages} from "./template/Pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
              <Route path="/" element={<Pages />}>
                  <Route
                      index
                      element={<Users />}
                  />
                  <Route
                      path=":userId/posts"
                      element={<Posts />}
                  />
                  <Route
                      path=":userId/albums"
                      element={<Albums />}
                  />
              </Route>
          </Routes>
      </header>
    </div>
  );
}

export default App;
