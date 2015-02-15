import AppDispatcher from '../dispatchers/app_dispatcher';
import TramStopConstants from '../constants/tram_stop_constants';
import TramStop from '../utils/tram_stop';

var EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

class TramStopStore extends EventEmitter {
  constructor() {
    this.tramStops = [];
  }

  addTramStop(stopId, stopInfo) {
    var stop = new TramStop(stopId, stopInfo);
    this.tramStops.push(stop);
  }

  get(id) {
    return this.tramStops[id] || null;
  }

  getAll() {
    return this.tramStops;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

var tramStopStore = new TramStopStore();

AppDispatcher.register( (payload) => {
  var action = payload.action;

  switch(action.actionType) {
    case TramStopConstants.ADD_STOP:
      var stopInfo = {};

      if (action.stopInfo.ResponseObject) {
        stopInfo = action.stopInfo.ResponseObject;
      }

      tramStopStore.addTramStop(action.stopId, stopInfo);
      break;
  }

  tramStopStore.emitChange();
});

export default tramStopStore
