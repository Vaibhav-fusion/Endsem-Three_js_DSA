import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import DSA from "./pages/DSA/DSA";
import Python from "./pages/Python/Python";
import Resources from "./pages/Resources/Resource";
// import Resources
import LeetCodePractice from "./pages/Leet/Leetcode";
import "./App.css";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");

  function renderPage() {
    if (page === "home") {
      return <Home setPage={setPage} />;
    } else if (page === "dsa") {
      return <DSA />;
    } else if (page === "python") {
      return <Python />;
    } else if (page === "resources") {
      return <Resources />;
    } else if (page === "leetcode") {
      return <LeetCodePractice />;
    } else {
      return <Home setPage={setPage} />;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
