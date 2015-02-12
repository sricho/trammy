import AppDispatcher from '../dispatchers/app_dispatcher';
import TramStopConstants from '../constants/tram_stop_constants';
import TramStopServiceApi from '../utils/tram_stop_service_api';

class TramStopActions {
  loadStop(stopId) {
    TramStopServiceApi.loadStop(stopId, (error, request) => {

      AppDispatcher.handleViewAction({
        actionType: TramStopConstants.LOAD_STOP,
        stopId: stopId,
        stop: request.ResponseObject
      });

    });
  }

  addStop(stopId) {
    AppDispatcher.handleViewAction({
      actionType: TramStopConstants.ADD_STOP,
      stop: stopId });
  }
}

export default new TramStopActions