import AppDispatcher from '../dispatchers/app_dispatcher';
import TramStopConstants from '../constants/tram_stop_constants';

var EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

class TramStopStore extends EventEmitter {
  constructor() {
    this.tramstops = [];
  }

  addTramStop(tramStop) {
    this.tramstops.push(tramStop);
    console.log(`adding stop #${tramStop} to [${this.tramstops}]`);
  }

  get(id) {
    this.tramStops[id] || null;
  }

  getAll() {
    this.tramStops;
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
