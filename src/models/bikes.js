const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Bike = function(){
this.bikes = null;
this.bikesData=null;
}

Bike.prototype.getData = function() {
  const request = new Request('https://api.tfl.gov.uk/bikepoint');
  request.get((data) => {
    this.bikes = data;
    PubSub.publish('Bike:bikes-loaded', this.bikes);
    console.log(this.bikes)
  })
}

Bike.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:change', (evt)  => {
  const bikeIndex = evt.detail;
  this.publishBikebyLocation(bikeIndex);
})
}

Bike.prototype.bikesByLocation = function(bikeIndex) {
  const selectedBike = this.bikes[bikeIndex];
  return this.bikes.map((selectedBike) => {
    return selectedBike.commonName;
  });
};

Bike.prototype.publishBikebyLocation =function(bike){
  const bikeSelected = this.bikesByLocation(bike);
  PubSub.publish('Bikes:bike-selected-ready', bikeSelected);
  console.log(bikeSelected);
}

module.exports = Bike;
