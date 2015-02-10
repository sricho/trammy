import React from 'react';
import TramStop from './tram_stop';

var TramStopList = React.createClass({
  displayName: "TramStopList",

  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <small>See <a href="/stop/1211">/stop/1211/</a> for JSON response that will be used.</small>
        <p><strong>Tram stop placeholders below:</strong></p>
        <TramStop stop={1221} />
      </div>
    )
  }
})

export default TramStopList;