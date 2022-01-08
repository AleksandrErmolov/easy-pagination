import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import ScrollPagination from "./component/ScrollPagination/ScrollPagination";

function App() {
  return (
    <div className="main_container">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="scroll" element={<ScrollPagination />} />
      </Routes>
    </div>
  );
}

export default App;
