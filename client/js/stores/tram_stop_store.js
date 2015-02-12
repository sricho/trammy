import AppDispatcher from '../dispatchers/app_dispatcher';
import TramStopConstants from '../constants/tram_stop_constants';
import TramStop from '../utils/tram_stop';

var EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

class TramStopStore extends EventEmitter {
  constructor() {
    this.tramStops = [];
  }

  addTramStop(stopId) {
    var stop = new TramStop(stopId);
    this.tramStops.push(stop);
    console.log(`adding ${stop} to [${this.tramStops}]`);
  }

  loadTramStop(stopId, stopInfo) {
    console.log('attempting to load', stopId, stopInfo);
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
    case TramStopConstants.LOAD_STOP:
      tramStopStore.loadTramStop(action.stopId, action.stop);
      break;
    case TramStopConstants.ADD_STOP:
      tramStopStore.addTramStop(action.stop);
      break;
  }

  tramStopStore.emitChange();
});

export default tramStopStore
