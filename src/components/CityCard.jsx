import { ArrowCircleRightOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getCordinates } from '../redux/cities/citiesSlice';

const CityCard = ({ city }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(city).length < 2) {
      dispatch(getCordinates(city.city));
    }
  }, [dispatch, city]);

  return (
    <NavLink to={`/details/${city.city}?lat=${city.lat}&lon=${city.lon}`}>
      <article className="city">
        <ArrowCircleRightOutlined />
        <div className="titles">
          <h5>{city.city}</h5>
          <h6>
            Country:
            {' '}
            {city.country}
          </h6>
        </div>
      </article>
    </NavLink>
  );
};

CityCard.propTypes = {
  city: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default CityCard;
