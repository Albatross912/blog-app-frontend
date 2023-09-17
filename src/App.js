import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Posts></Posts>
      <Footer></Footer>
      {/* <Routes>
        <Route path="/" element={[<Home />]} />
        <Route path="/checkout" element={[<Checkout />]} />
      </Routes> */}
    </div>
  </Router>
  );
}

export default App;
