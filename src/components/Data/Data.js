import React from 'react';
import './Data.css';

export default function Data(props) {
  const { results, info } = props;

  return (
    <div className="dataContainer">
      <div className="dataInfo">
        {info ? `About ${info.formattedTotalResults} results (${info.formattedSearchTime} seconds)` : ""}
      </div>
      {
        results.length > 0
          ? results.map((result) => (
            <div className="dataDetails">
              <a href={result.displayLink}>{result.displayLink}</a>
              <a href={result.link}>{result.title}</a>
              <span>{result.snippet}</span>
            </div>
          ))
          : null
      }
    </div>
  );
};