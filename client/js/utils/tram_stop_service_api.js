import request from 'superagent';

class TramStopServiceApi {
  loadStop(stop, callback) {
    request.get(`/stop_information/${stop.id}`, (error, result) => {
      console.log(result.text)
      callback(error, JSON.parse(result.text));
    });
  }
}

export default new TramStopServiceApi