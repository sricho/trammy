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
        Tram stop component for stop #{this.state.stop}
      </div>
    );
  }

});

export default TramStop;