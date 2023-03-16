import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import hero from '../assets/img/air-pollution.png';
import DetailCard from '../components/DetailCard';
import { getPollution } from '../redux/cities/citiesSlice';

const Details = () => {
  const { name } = useParams();
  const [params] = useSearchParams();
  const lat = params.get('lat');
  const lon = params.get('lon');

  const dispatch = useDispatch();

  const { cities: { cities, isLoading, error } } = useSelector((state) => state);
  const city = cities.find((city) => city.city.toLowerCase() === name?.toLowerCase());

  useEffect(() => {
    dispatch(getPollution({ lat, lon, name }));
  }, [dispatch, lat, lon, name]);

  return (
    <main className="details">
      <section className="main-section">
        <div className="hero">
          <figure className="img-wrapper">
            <img src={hero} alt="Pollution" className="hero-img" />
          </figure>
          <div className="title">
            <h2>{city?.city}</h2>
          </div>
        </div>
        <h4 className="stats-header">CITY POLLUTION BREAKDOWN</h4>
        <div className="details-wrapper">
          {
            isLoading
            && <span className="loading">Loading...</span>
          }
          {
            error
            && <span className="error">An error has occured :-(</span>
          }
          {
            city?.list
            && city
              ?.list
              .map((listItem) => (
                <DetailCard
                  key={listItem.dt}
                  dt={listItem.dt}
                  components={listItem.components}
                />
              ))
        }
        </div>
      </section>
    </main>
  );
};

export default Details;
