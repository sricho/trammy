class TramStop {
  constructor(id, options) {
    this.id = id;
    this.stopName = options.StopName || 'Unknown Stop';
    this.direction = options.CityDirection || 'Unknown Direction';
    this.flagStopNo = options.FlagStopNo || 'Unknown FlagStopNo';
  }

  toString() {
    return(`TramStop #${this.id}`);
  }
}

export default TramStop;