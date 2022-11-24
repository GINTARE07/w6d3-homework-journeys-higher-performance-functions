const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
   })
  return result

};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return result

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return transport === journey.transport;
  })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
   return this.journeys.filter((journey) => {
    return journey.distance > minDistance
  });
  
};

Traveller.prototype.calculateTotalDistanceTravelled = function (distance) {
  const result = this.journeys.reduce((x, journey) => {
    return x + journey
  })
  return result
};


//Traveller.prototype.getUniqueModesOfTransport = function () {
  //const result = this.journeys.


module.exports = Traveller;
