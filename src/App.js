import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import AddButton from "./components/AddButton";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post/:post_id" element={<Post />} />
            <Route path="/newpost" element={<NewPost />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
