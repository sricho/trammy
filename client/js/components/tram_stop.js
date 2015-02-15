import React from 'react';
import TramStopActions from '../actions/tram_stop_actions';
import TramStopStore from '../stores/tram_stop_store';

var TramStop = React.createClass({
  displayName: "TramStop",

  getInitialState() {
    return ({
      stop: this.props.stop
    });
  },

  render() {
    return (
      <div className="service-card">
        <h3>Stop {this.state.stop.flagStopNo} {this.state.stop.direction}</h3>
        <p>{this.state.stop.stopName}</p>
      </div>
    );
  }

});

export default TramStop;