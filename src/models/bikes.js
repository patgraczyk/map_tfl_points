const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Bike = function(){
this.bikes = null;
}

Bike.prototype.getData = function() {
  const request = new Request('https://api.tfl.gov.uk/bikepoint');
  request.get((data) => {
    this.bikes = data;
    PubSub.publish('Bike:bikes-loaded', this.bikes);

    // this.getAsteroidsNames(this.asteroids);
    console.log(this.bikes)
  })
}


module.exports = Bike;
