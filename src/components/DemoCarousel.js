import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import kids1 from "../images/kids1.jpg";
import kids2 from "../images/kids2.jpg";
import kids3 from "../images/kids3.jpg";

export default function DemoCarousel() {
        return (
            <Carousel emulateTouch="true" interval="1000">
                <div>
                    <img src={kids1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={kids2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={kids3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }