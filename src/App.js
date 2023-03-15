import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Details from './routes/Details';
import Home from './routes/Home';
import './sass/index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details/:name" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
