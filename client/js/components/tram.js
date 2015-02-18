import React from 'react';

const Tram = React.createClass({

  getInitialState() {
    return {
      tram: this.props.tram
    };
  },

  render() {
    var tram = this.props.tram;
    var countdownTimer = tram.predictedArrivalDateTime.fromNow();
    
    return (
      <div>
        #{tram.routeNo} to {tram.destination} arriving {countdownTimer}.
      </div>
    );
  }

});

export default Tram;