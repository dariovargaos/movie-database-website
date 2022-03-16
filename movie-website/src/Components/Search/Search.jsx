import './Search.css';
import CustomNavbar from "../Navbar/CustomNavbar";
import { Button, Form, FormControl, Row, Card } from 'react-bootstrap';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Search() {

    document.title = "Search | Watch TV+"
    const [isLoaded, setLoaded] = useState(false);
    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    function handleChange(e){
        setSearchQuery({searchQuery: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&language=en-US&query=${searchQuery.searchQuery}&page=1&include_adult=false`
        fetch(url)
        .then(results => results.json())
        .then(data => {
            setResults(data.results);
            setLoaded(true);
        })
    }
    if(!isLoaded){
        return(
            <div>
                <CustomNavbar/>
                <div className='custom-container-search'>
                    <h3 className='search-title'>What are you looking for?</h3>
                    <p className='search-subtitle'>We have got everything you are looking for. Come explore!</p>
                    <Form className='d-flex' onSubmit={handleSubmit}>
                        <FormControl type="search" placeholder="Enter search term..." onChange={handleChange}className='input-search'/>
                        <Button className='custom-button' type="submit">Search</Button>
                    </Form>
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <CustomNavbar />
                <Row>
                    {results.map(results => 
                        <div key={results.id} className='mapped-results col-sm-3 col-sm-pull-12'>
                            <Link to={`/view/${results.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} className="mapped-image" alt={results.original_title} />
                            </Link>
                        </div>
                        )}
                    <Card>

                    </Card>
                </Row>
            </div>
        );
    }
}