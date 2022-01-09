import React from "react";

export default function Pagination({ countryPerPage, totalCountries, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
                <a href="!#" className="page-link" onClick={(e) => {e.preventDefault(); return  paginate(number) }}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
