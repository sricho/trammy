import AppDispatcher from '../dispatchers/app_dispatcher';
import TramStopConstants from '../constants/tram_stop_constants';

var EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

class TramStopStore extends EventEmitter {
  constructor() {
    this.tramStops = [1551, 1221];
  }

  addTramStop(tramStop) {
    this.tramStops.push(tramStop);
    console.log(`adding stop #${tramStop} to [${this.tramStops}]`);
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
      tramStopStore.loadTramStop(action.stop);
      break;
    case TramStopConstants.ADD_STOP:
      tramStopStore.addTramStop(action.stop);
      break;
  }

  tramStopStore.emitChange();
});

export default tramStopStore
