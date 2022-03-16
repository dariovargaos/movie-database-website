import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetails, Search, Rate } from './Components';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='view' element={<MovieDetails />}>
        <Route path=':movieID' element={<MovieDetails />}/>
      </Route>

      <Route path='search' element={<Search />} />

      <Route path="rate" element={<Rate />}>
        <Route path=":movieID" element={<Rate />}></Route>
      </Route>

    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
