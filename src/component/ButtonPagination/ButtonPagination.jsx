import React, { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./Countries/Countries";
import Pagination from "./Pagination/Pagination";

export default function ButtonPagination() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(15);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(res.data);
      setLoading(false);
      console.log(res.data);
    };

    getCountries();
  }, []);

  const lastCountryIndex = currentPage * countryPerPage;
  const firstCounryIndex = lastCountryIndex - countryPerPage;
  const currentCountry = countries.slice(firstCounryIndex, lastCountryIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    };
    
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage((prev) => prev - 1);


  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={currentCountry} loading={loading} />
      <Pagination
        countryPerPage={countryPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />

      <button className="btn btn-primary"onClick={prevPage}>Prev Page</button>
      <button className="btn btn-primary ms-2" onClick={nextPage}>Next Page</button>
    </div>
  );
}
