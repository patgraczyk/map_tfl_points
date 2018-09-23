const Bike = require('./models/bikes.js')
const AllBikesView = require('./views/all_bikes_view.js')
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded')

  const selectElement = document.querySelector('#bike-dropdown');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#list-bikes')
  const allBikes = new AllBikesView(listContainer);
  allBikes.bindEvents();

  const bike = new Bike();
  bike.getData();
  bike.bindEvents();

})
