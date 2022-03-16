import './App.css';
import { CustomNavbar, Trending } from './Components';

export default function App() {
  return (
    <div className="main">
      <CustomNavbar/>
      <div id="hero">
        <h3 className="trending hero">Everything you are looking for. All in one place.</h3>
        <p className="trending">The biggest blockbusters, the boldest stories, and unforgettable classics that make us who we are.
        <br/>All this is available on <b>Watch TV+**</b>.</p>
      </div>

      <Trending type="trending/movie" timeframe="day"/>
      <Trending type="movie/top_rated" timeframe=""/>
      <Trending type="trending/movie" timeframe="week"/>
      

      <p className="legal">*TV Shows coming later this year.<br/> &copy; {new Date().getFullYear()} Dario Varga. All rights reserved.</p>
    </div>
  );
}
