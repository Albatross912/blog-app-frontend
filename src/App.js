import React from "react"; 
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  useParams,
} from "react-router-dom";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import AddButton from "./components/AddButton";

function App() {
  const { post_id } = useParams();
  console.log(post_id);
  return (
    <Router>
      <div className="App">
        {/* {post_id == null && <Header backgroundImage="../assets/banner.jpeg" />}{" "}
        Conditionally render the Header */}
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
