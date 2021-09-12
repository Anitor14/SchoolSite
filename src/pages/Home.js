import React from 'react';
import DemoCarousel from '../components/DemoCarousel';
import Navbar from '../components/Navbar';
import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <DemoCarousel />
            <h1>I am the home component</h1>
        </div>
    )
}
