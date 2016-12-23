import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import _ from 'lodash';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;
    const temperature = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temperature} color="red" unit="°C" /></td>
        <td><Chart data={pressure} color="blue" unit="hPa" /></td>
        <td><Chart data={humidity} color="green" unit="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// ES6 version
function mapStateToProps({weather}) {
  return { weather };
}

/*
// Normal version
function mapStateToProps(state) {
  return { weather: state.weather };
}
*/
export default connect(mapStateToProps)(WeatherList);
