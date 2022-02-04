import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg"
import "../styles/Home.css"

function Home() {
    return (
        <div className='home'style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className='headerContainer' >
                <h1> Pizza Planet </h1>
                <p> Pizza to Fit All Taste </p>
                <Link to="/menu">
                    <button> Order Now </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
