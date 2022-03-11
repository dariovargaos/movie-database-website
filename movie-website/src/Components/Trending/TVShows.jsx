import React from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import "./Trending.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class TVShows extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
        .then(results => results.json())
        .then(data => {
            this.setState({
                isLoaded: true,
                data: data.results
            })
        },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        );
    }

    render() {

        const {error, isLoaded, data} = this.state;
        if (error){
            return <div>Error: {error.message}</div>
        }else if (!isLoaded){
            return <div>Data is loading...</div>
        }else {
            return(
                <div className="scroll-tray">
                    <div key={data.id}>
                    {data.map(data => (
                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.name} className="scroll-tray-image"/>
                    ))}
                    </div>
                </div>
            )
        }
    }
}