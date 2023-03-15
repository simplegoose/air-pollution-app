import React, { useRef } from 'react';
import { ChevronLeft, Mic, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  };

  const navigate = useNavigate();
  const buttonRef = useRef();

  const navigateBack = () => {
    if (window && window.history.state.idx > 0) {
      navigate(-1);
    }

    setTimeout(() => {
      buttonRef.current.blur();
    }, 300);
  };

  return (
    <header className="header">
      <button className="button-back" type="button" onClick={navigateBack} ref={buttonRef}>
        <ChevronLeft />
      </button>
      <h1>{title}</h1>
      <div className="search">
        <Mic />
        <Search />
      </div>
    </header>
  );
};

export default Header;
