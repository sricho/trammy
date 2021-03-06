import React from 'react';
import TramStop from './tram_stop';
import TramStopAdder from './tram_stop_adder';
import TramStopActions from '../actions/tram_stop_actions';
import TramStopStore from '../stores/tram_stop_store';

var TramStopList = React.createClass({
  displayName: "TramStopList",

  componentWillMount() {
    this._setStops();
    TramStopStore.addListener('change', this._setStops);
  },

  componentWillUnmount() {
    TramStopStore.removeListener('change', this._setStops);
  },

  _setStops() {
    this.setState({stops: TramStopStore.getAll()});
  },

  render() {
    var stops = this.state.stops.map((stop) => {
      return(<TramStop key={stop.id} stop={stop} />);
    });

    return (
      <div>
        <h1>Favorites</h1>
        <TramStopAdder />
        {stops}
      </div>
    )
  }
})

export default TramStopList;