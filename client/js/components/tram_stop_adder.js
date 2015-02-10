import React from 'react';
import TramStopActions from '../actions/tram_stop_actions';

const TramStopAdder = React.createClass({

  onChangeHandler(event) {
    this.setState({body: event.target.value});
  },

  onSubmitHandler() {
    if(this.state) {
      TramStopActions.addStop(this.state.body)
    }

    this.setState({body: ''});
  },

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeHandler} />
        <button onClick={ this.onSubmitHandler }>Add Stop</button>
      </div>
    );
  }

});

export default TramStopAdder;