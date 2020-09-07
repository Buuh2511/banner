import React, { Component } from 'react';
import './Countdown.css';

let tmp = 'Kết nối trong :';

class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 20
        }
    }
    render() {
        const { count } = this.state
        if (count <= 0) {
            tmp = <div className="connect">
                <a href="https://fpt.vn/vi">Kết nối ngay</a>
            </div>
            var tmp1 = <a href="https://fpt.vn/vi"><img src="https://ads-cdn.fptplay.net/static/banner/2019/09/5e0cbd0085067825813bff26741860e8_8996.png" width="50%" height="50%"></img></a>
        }
        else {
            var tmp2 = this.state.count + ' giây'
        }
        return (
            <div>
                <p className="count">{tmp} {tmp2}</p>
                {tmp1}
            </div>
        )
    }

    componentDidMount() {
        const { startCount } = this.props
        this.setState({
            count: startCount
        })
        this.doIntervalChange()
    }


    doIntervalChange = () => {
        this.myInterval = setInterval(() => {
            if (this.state.count > 0) {
                this.setState(prevState => ({
                    count: prevState.count - 1
                }))
            }

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

}

export default Countdown;