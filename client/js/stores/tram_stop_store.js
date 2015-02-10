//This file is fucked.

import AppDispatcher from '../dispatchers/app_dispatcher';
import TramStopConstants from '../constants/tram_stop_constants';

var EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';


var _tramStops = [];

var _addTramStop = (tramStop) => {
  _tramStops.push(tramStop);
  console.log('adding to', _tramStops);
}


class TramStopStore extends EventEmitter {
  get(id) {
    _tramStops[id] || null;
  }

  getAll() {
    _tramStops;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

var tramStopStore = new TramStopStore();

AppDispatcher.register( (payload) => {
  var action = payload.action;

  switch(action.actionType) {
    case TramStopConstants.LOAD_STOP:
      _loadTramStop(action.stop);
      break;
    case TramStopConstants.ADD_STOP:
      _addTramStop(action.stop);
      break;
  }

  tramStopStore.emitChange();
});

export default tramStopStore