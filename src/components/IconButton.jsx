import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const IconButton = ({
  onClick,
  children,
}) => {
  const buttonRef = useRef();

  const buttonClick = () => {
    onClick();

    setTimeout(() => {
      buttonRef.current.blur();
    }, 300);
  };

  return (
    <button className="icon-button" type="button" onClick={buttonClick} ref={buttonRef}>
      { children }
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default IconButton;
