import { useState } from "react";
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BookApi from "./Components/BookApi";
import RegisterForm from "./Components/RegisterForm";
import NavigationBar from "./Components/NavBar";

function App() {
  const [searchedValue, setSearchedValue] = useState("");

  const setSearchVal = (val) =>{
    setSearchedValue(val)
  }

  return (
    <BrowserRouter>
      <div>
        <NavigationBar setSearchedValue={setSearchVal} />
        <Routes>
          <Route
            path="/"
            element={<BookApi search={searchedValue} />}
          />
          <Route path="/RegisterForm" element={<RegisterForm />} />
        </Routes>
        <footer>
          <p className="info">
            By Manmeet Singh
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
