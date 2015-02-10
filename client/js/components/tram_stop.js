import React from 'react';

var TramStop = React.createClass({
  displayName: "TramStop",

  render() {
    return (
      <div className="service-card">
        Tram stop component for stop #{this.props.stop}
      </div>
    );
  }

});

export default TramStop;