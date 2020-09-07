import React, { Component } from 'react';
import './Element.css';
import Countdown from './Countdown';

class Images extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="element">
                    <video autoPlay>
                        <source src="https://ads-cdn.fptplay.net/static/banner/2019/10/8ac71609338549ddae2575169a5915c4_3860.mp4"></source>
                    </video>
                    <Countdown startCount='2'></Countdown>
                </div>

            </div>

        );
    }
}

export default Images;