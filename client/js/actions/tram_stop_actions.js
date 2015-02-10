import AppDispatcher from '../dispatchers/app_dispatcher';
import TramStopConstants from '../constants/tram_stop_constants';

class TramStopActions {
  loadStop(stopId) {
    AppDispatcher.handleViewAction({
      actionType: TramStopConstants.LOAD_STOP,
      stop: stopId });
  }

  addStop(stopId) {
    AppDispatcher.handleViewAction({
      actionType: TramStopConstants.ADD_STOP,
      stop: stopId });
  }
}

export default new TramStopActions