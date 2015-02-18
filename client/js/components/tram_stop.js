import React from 'react';
import TramStopActions from '../actions/tram_stop_actions';
import TramStopStore from '../stores/tram_stop_store';
import TramStore from '../stores/tram_store';
import TramActions from '../actions/tram_actions';
import Tram from './tram';

var TramStop = React.createClass({
  displayName: "TramStop",

  getInitialState() {
    return ({
      stop: this.props.stop,
      trams: []
    });
  },

  componentWillMount() {
    TramStore.addListener('trams-changed', this._setTrams);
    TramActions.importTramsForStop(this.state.stop.id);
  },

  componentDidMount() {
    setInterval(() => {
      TramActions.importTramsForStop(this.state.stop.id);
    }, 30000)
  },

  componentWillUnmount() {
    TramStore.removeListener('trams-changed', this._setTrams);
  },

  _setTrams() {
    this.setState({trams: TramStore.getTramsForStop(this.state.stop.id)})
  },

  render() {
    var trams = this.state.trams.map((tram) => {
      return(<Tram key={tram.key} tram={tram} />);
    });

    return (
      <div className="service-card">
        <h3>Stop {this.state.stop.flagStopNo} {this.state.stop.direction}</h3>
        <p>{this.state.stop.stopName}</p>
        {trams} 
      </div>
    );
  }

});

export default TramStop;