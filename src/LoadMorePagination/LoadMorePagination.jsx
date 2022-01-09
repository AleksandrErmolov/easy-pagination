import React, { useEffect, useState } from "react";
import "../App.css";

export default function LoadMorePagination() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="container__load">
      {items.slice(0, visible).map((item) => (
        <div className="card">
          <div className="id">
            <span className="item__id">{item.id}</span>
          </div>
          <p className="item__text">{item.body}</p>
        </div>
      ))}
      <button className="load__button" onClick={showMoreItems}>
        Load more
      </button>
    </div>
  );
}
