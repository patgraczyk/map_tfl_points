const PubSub = require('../helpers/pub_sub');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Bike:bikes-loaded', (evt) => {
    this.populateSelect(evt.detail);
  });
  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function (bikes) {
  bikes.forEach((bike, index) => {
    const option = this.createBike(bike, index);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createBike = function (bike, index) {
  const option = document.createElement('option');
  option.textContent = bike.commonName;
  option.value = index;
  return option;
};

module.exports = SelectView;
