import React, {  Component } from 'react';

class Display extends Component {

    constructor() {
        super()
        this.state = {
            wData: null
        }
    }

    componentDidMount() {
        const zip = this.props.zip
        const API = "http://api.openweathermap.org/data/2.5/weather?q="
            + zip +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
        fetch(API)
            .then(resp => resp.json())
            .then(json => this.setState({
                wData: json
            }))
    }

    render() {
        const wData = this.state.wData
        if(!wData) return <div>Loading</div>

        const weather = wData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return(
            <div>
                <h1>
                    {weather.main} in {wData.name}
                    <img src={iconUrl} alt={wData.description} />
                </h1>
                <p>Current: {wData.main.temp}°</p>
                <p>High: {wData.main.temp_max}°</p>
                <p>Low: {wData.main.temp_min}°</p>
                <p>Wind Speed: {wData.wind.speed} mi/hr</p>
            </div>
        );
    }
}

export default Display