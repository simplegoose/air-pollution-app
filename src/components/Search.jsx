import React from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { filterCities } from '../redux/cities/citiesSlice';

const Search = () => {
  const dispatch = useDispatch();

  const search = (e) => {
    const { value } = e.target;

    dispatch(filterCities(value));
  };
  return (
    <div className="search-wrapper">
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={search}
        className="search"
        placeholder="Search by City"
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default Search;
