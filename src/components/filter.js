import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSortAmountUpAlt, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'

const Filter = ({ handleSearch, handleAscending, handleDescending }) => {

  return (
    <>
      <div className="filter">
        <form>
          <label>Search Characters by:  </label>
          <div class="inputWithIcon">
            <input type="text" name="search" onKeyUp={e => handleSearch(e.target.value)} className="form-control" placeholder="Character name" />
            <i><FontAwesomeIcon icon={faSearch} /></i>
          </div>
          
          <div className="btn-pos">
            <button type="button" name="asce" className="btn btn-default" onClick={handleAscending}><FontAwesomeIcon icon={faSortAmountUpAlt} /> Ascending </button>
            <button type="button" name="dsce" className="btn btn-default" onClick={handleDescending}><FontAwesomeIcon icon={faSortAmountDownAlt} />  Descending </button>
          </div>
          <div className="clearfix"></div>
        </form>
      </div>
    </>
  );
};


export default Filter;