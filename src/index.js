import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchPosts } from "./features/posts/postsSlice";
import { fetchUsers } from "./features/users/userSlice";

store.dispatch(fetchUsers());
store.dispatch(fetchPosts())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
