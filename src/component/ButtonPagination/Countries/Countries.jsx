import React from 'react'

export default function Countries({ countries, loading }) {
    
    if (loading) { 
        return <h2>Loading.....</h2>
    }

    console.log('countries', countries[0]);

    return (
      <div>
        <ul className="list-group mb-2">
          {countries.map((country, index) => (
            <li className="list-group-item" key={index}>
              {country.name.common}
                  <img src={country.flags.svg} alt="flag" className="ml-2" style={{width:25}}/>
            </li>
          ))}
        </ul>
      </div>
    );
}
