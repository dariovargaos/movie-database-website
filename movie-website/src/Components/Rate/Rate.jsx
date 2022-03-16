import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import "./Rate.css";
import CustomNavbar from "../Navbar/CustomNavbar";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Rate() {

    let params = useParams();
    const [rate, setRating] = useState();
    const navigate = useNavigate();
    const [session, setSession] = useState();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/authentication/guest_session/new/?api_keys=${API_KEY}&guest_session_id=${session}`)
            .then(response => response.json()) //proizvoljno ime
            .then(data => setSession(data.guest_session_id))
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        const movieRating = { "value": `${rate}`}
        fetch(` https://api.themoviedb.org/3/movie/${params.movieID}/rating?api_key=${API_KEY}`, {
            method: "POST",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify(movieRating)
        })
    }

    return(
        <>
            <CustomNavbar />
            <div className="main">
                <div className="custom-container-rate">
                    <h1>Thank you for rating this movie.</h1>
                    <h6>We are so happy that you are rating this movie.</h6>
                    <Form onSubmit={handleSubmit} className="d-flex">
                        <FormControl type="number" value={rate} placeholder="Enter your rating..." className="custom-input" min="1" max="10" onChange={e => setRating(e.target.value)}/>
                        <Button type="submit" className="custom-button">Submit</Button>
                    </Form>
                    <p className="help-text-error">Sorry, you can only rate on a scale form 1-10.</p>
                </div>
            </div>
        </>
    );
}