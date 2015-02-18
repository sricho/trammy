import request from 'superagent';

class TramStopServiceApi {
  loadStop(stop, callback) {
    request.get(`/stop_information/${stop}`, (error, result) => {
      callback(error, JSON.parse(result.text));
    });
  }

  getTramPredictions(stop, callback) {
    request.get(`/stop/${stop}`, (error, result) => {
      callback(error, JSON.parse(result.text));
    });
  }
}

export default new TramStopServiceApi