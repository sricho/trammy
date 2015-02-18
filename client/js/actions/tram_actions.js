import AppDispatcher from '../dispatchers/app_dispatcher';
import TramConstants from '../constants/tram_constants';
import TramStopServiceApi from '../utils/tram_stop_service_api';

class TramActions {
  importTramsForStop(stopId) {
    TramStopServiceApi.getTramPredictions(stopId, (error, trams) => {
      AppDispatcher.handleViewAction({
        actionType: TramConstants.IMPORT_TRAMS,
        stopId: stopId,
        trams: trams
      });
    });
  }
}

export default new TramActions;