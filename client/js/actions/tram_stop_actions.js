import AppDispatcher from '../dispatchers/app_dispatcher';
import TramStopConstants from '../constants/tram_stop_constants';
import TramStopServiceApi from '../utils/tram_stop_service_api';

class TramStopActions {
  addStop(stopId) {
    TramStopServiceApi.loadStop(stopId, (error, stopInfo) => {
      AppDispatcher.handleViewAction({
        actionType: TramStopConstants.ADD_STOP,
        stopId: stopId,
        stopInfo: stopInfo});
    });
  }
}

export default new TramStopActions