import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetails, Search } from './Components';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='view' element={<MovieDetails />}>
        <Route path=':movieID' element={<MovieDetails />}/>
      </Route>

      <Route path='search' element={<Search />} />

    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
