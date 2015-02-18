import AppDispatcher from '../dispatchers/app_dispatcher';
import TramConstants from '../constants/tram_constants';
import Tram from '../utils/tram';

var EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'trams-changed';

class TramStore extends EventEmitter {
  constructor() {
    this.trams = {};
  }

  importTramsForStop(stopId, trams) {
    this.trams[stopId] = trams;
  }

  getTramsForStop(stopId) {
    if (!this.trams[stopId]) { return [] };
    
    return this.trams[stopId].map((tram) => {
      return(new Tram(tram));
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT)
  }
}

var tramStore = new TramStore();

AppDispatcher.register( (payload) => {
  var action = payload.action;

  switch(action.actionType) {
    case TramConstants.IMPORT_TRAMS:
      var trams = [];
      
      if (action.trams) {
        trams = action.trams.responseObject;
      }

      tramStore.importTramsForStop(action.stopId, trams);
      break;
  }

  tramStore.emitChange();
});

export default tramStore;