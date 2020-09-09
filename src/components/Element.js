import React, { Component } from 'react';
import Countdown from './Countdown';


class Images extends Component {
    render() {
        return (
            <div>
                <video autoPlay>
                    <source src="https://ads-cdn.fptplay.net/static/banner/2019/10/8ac71609338549ddae2575169a5915c4_3860.mp4"></source>
                </video>
                <Countdown startCount='20'></Countdown>
            </div>
        );
    }
}

export default Images;