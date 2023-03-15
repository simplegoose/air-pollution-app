import React from 'react';
import PropTypes from 'prop-types';
import { ArrowCircleRightOutlined } from '@mui/icons-material';

const DetailCard = ({
  components,
}) => (
  <article className="detail">
    <div className="comp-arrow">
      <div className="components">
        {
          Object.entries(components).map(([key, value]) => (
            <span key={value}>
              {key.toUpperCase()}
              {' '}
              :
              {' '}
              {value}
            </span>
          ))
        }
      </div>
      <ArrowCircleRightOutlined />
    </div>
  </article>
);

DetailCard.propTypes = {
  components: PropTypes.objectOf({
    co: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    no: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    no2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    o3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    so2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pm2_5: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pm10: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nh3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default DetailCard;
