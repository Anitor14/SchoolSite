import React from 'react';
import Navbar from '../components/Navbar';
import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <h1>I am the home component</h1>
        </div>
    )
}
