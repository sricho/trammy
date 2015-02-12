import React from 'react';
import TramStopActions from '../actions/tram_stop_actions';

const TramStopAdder = React.createClass({

  getInitialState() {
    return {
      body: ''
    };
  },

  onChangeHandler(event) {
    this.setState({body: event.target.value});
  },

  onSubmitHandler(event) {
    TramStopActions.addStop(this.state.body)
    this.setState({body: ''});
  },

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeHandler} value={this.state.body} />
        <button onClick={ this.onSubmitHandler }>Add Stop</button>
      </div>
    );
  }

});

export default TramStopAdder;