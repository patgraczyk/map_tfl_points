const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')
const BikeDetailsView = require('../views/bikes_details_view.js')

const AllBikesView = function(container) {
  this.container = container;
  this.bikes = [];
}

AllBikesView.prototype.bindEvents = function(){
  PubSub.subscribe('Bike:bikes-loaded', (event) => {
    this.bikes = event.detail;
    console.log(this.bikes);
    this.render();
  })
}

AllBikesView.prototype.render = function(){
  this.bikes.forEach(bike => {
    const bikeDetailsView = new BikeDetailsView(this.container, bike);
    bikeDetailsView.render();
    // console.log(bike)
  })
}


module.exports = AllBikesView;
// AllBikesView.prototype.render = function(){
//   this.bikes.forEach(bike => {
//     bike.commonName;
//     console.log(bike.commonName);
//   })
// }
