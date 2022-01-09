import { Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonPagination from "./component/ButtonPagination/ButtonPagination";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import ScrollPagination from "./component/ScrollPagination/ScrollPagination";
import LoadMorePagination from "./LoadMorePagination/LoadMorePagination";

function App() {
  return (
    <div className="main_container">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/scroll" element={<ScrollPagination />} />
        <Route path="/button" element={<ButtonPagination />} />
        <Route path="/load-more" element={<LoadMorePagination />} />
      </Routes>
    </div>
  );
}

export default App;
