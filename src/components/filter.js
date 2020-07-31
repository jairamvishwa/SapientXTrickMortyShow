import React, { useEffect, useState } from 'react';

const Filter = ({ handleSearch, handleAscending, handleDescending }) => {

  return (
    <>
      <div className="filter">
        <form>
          <label>Search Characters by: </label>
          <input type="text" name="search" onKeyUp={e => handleSearch(e.target.value)} className="form-control" placeholder="Character name" />
          <div className="btn-pos">
            <button type="button" name="asce" className="btn btn-default" onClick={handleAscending}> Ascending </button>
            <button type="button" name="dsce" className="btn btn-default" onClick={handleDescending}> Descending </button>
          </div>
          <div className="clearfix"></div>
        </form>
      </div>
    </>
  );
};


export default Filter;