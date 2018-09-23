const PubSub = require('../helpers/pub_sub.js');


const BikeDetailsView = function(bikeListContainer, bike){
  this.bikeListContainer = bikeListContainer;
  this.bike = bike;
}

BikeDetailsView.prototype.render =function(){
  const bikeDetails = document.createElement('div');
  const bikeLocation = this.createHeading();
  bikeDetails.appendChild(bikeLocation);
  this.bikeListContainer.appendChild(bikeDetails);
  const bikeUl = this.createBikeUl();
  this.bikeListContainer.appendChild(bikeUl);
}

BikeDetailsView.prototype.createHeading = function(){
  const nameHeading = document.createElement('p');
  nameHeading.textContent = this.bike.commonName;
  return nameHeading;
}

BikeDetailsView.prototype.createBikeUl = function() {
  const bikeDetailsUl = document.createElement('ul');
  this.populateUl(bikeDetailsUl);
  return bikeDetailsUl;
}

BikeDetailsView.prototype.populateUl = function(ul) {
  const randomLi = document.createElement('li');
  randomLi.textContent = this.bike.id;
  ul.appendChild(randomLi);
}

module.exports = BikeDetailsView;
