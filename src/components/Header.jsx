import React from 'react';
import { ChevronLeft, Mic, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleSearch } from '../redux/search/searchSlice';
import IconButton from './IconButton';

const Header = ({ title }) => {
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateBack = () => {
    if (window && window.history.state.idx > 0) {
      navigate(-1);
    }
  };

  const searchOnClick = () => dispatch(toggleSearch());

  return (
    <header className="header">
      <IconButton onClick={navigateBack}>
        <ChevronLeft />
      </IconButton>
      <h1>{title}</h1>
      <div className="search">
        <Mic />
        <IconButton onClick={searchOnClick}>
          <Search />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
