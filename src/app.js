const Bike = require('./models/bikes.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded')

  const bike = new Bike();
  bike.getData();

})
