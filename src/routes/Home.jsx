import React from 'react';
import { useSelector } from 'react-redux';
import hero from '../assets/img/air-pollution.png';
import CityCard from '../components/CityCard';

const Home = () => {
  const { cities: { cities } } = useSelector((state) => state);

  return (
    <main className="home">
      <section className="main-section">
        <div className="hero">
          <figure className="img-wrapper">
            <img src={hero} alt="Pollution" className="hero-img" />
          </figure>
          <div className="title">
            <h2>MAJOR CITIES</h2>
            <h3>Air Pollution</h3>
          </div>
        </div>
        <h4 className="stats-header">STATS BY CITY</h4>
        <div className="cities">
          {
            cities
            && cities.map((city) => <CityCard key={city.city} city={city} />)
          }
        </div>
      </section>
    </main>
  );
};

export default Home;
