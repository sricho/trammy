import React from 'react';
import TramStop from './tram_stop';
import TramStopAdder from './tram_stop_adder';
import TramStopActions from '../actions/tram_stop_actions';

var TramStopList = React.createClass({
  displayName: "TramStopList",

  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <small>See <a href="/stop/1211">/stop/1211/</a> for JSON response that will be used.</small>
        <br /><br />
        <TramStopAdder />
        <p><strong>Tram stop placeholders below:</strong></p>
        <TramStop stop={1221} />
      </div>
    )
  }
})

export default TramStopList;