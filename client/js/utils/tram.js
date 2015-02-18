import moment from 'moment';

class Tram {
  constructor(options) {
    this.routeNo                  = options.RouteNo;
    this.predictedArrivalDateTime = moment(options.PredictedArrivalDateTime);
    this.destination              = options.Destination;
    this.airConditioned           = options.AirConditioned;
    this.displayAc                = options.DisplayAC;
    this.disruptionMessage        = options.DisruptionMessage;
    this.specialEventMessage      = options.SpecialEventMessage;
    this.key                      = Math.random();
  }

  hasDisruption() {
    if(this.disruptionMessage) {
      return true;
    } else {
      return false;
    }
  }

  hasSpecialEvent() {
    if(this.specialEventMessage) {
      return true;
    } else {
      return false;
    }
  }
}

export default Tram;

// {
//   "__type":"NextPredictedRoutesCollectionInfo",
//   "AirConditioned":false,
//   "Destination":"Sth Melb Beach",
//   "DisplayAC":false,
//   "DisruptionMessage":
//   {
//     "DisplayType":"Text",
//     "MessageCount":0,
//     "Messages":[]
//   },
//   "HasDisruption":false,
//   "HasSpecialEvent":true,
//   "HeadBoardRouteNo":"1",
//   "InternalRouteNo":1,
//   "IsLowFloorTram":false,
//   "IsTTAvailable":true,
//   "PredictedArrivalDateTime":"\/Date(1424258880000+1100)\/",
//   "RouteNo":"1",
//   "SpecialEventMessage":"WHITE NIGHT 5pm 21 Feb-7am 22 Feb: Extra trams on most routes. CBD service changes affect trams. Info ptv.vic.gov.au",
//   "TripID":0,
//   "VehicleNo":2104
// }