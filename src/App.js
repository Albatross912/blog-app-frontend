import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:post_id" element={<Post />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
