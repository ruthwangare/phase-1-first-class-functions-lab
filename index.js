const drivers = ["Sam", "Bob", "Freddy", "Carlos"];

// returnFirstTwoDrivers function
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// returnLastTwoDrivers function
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier function
function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
}

// fareDoubler function
const fareDoubler = createFareMultiplier(2);

// fareTripler function
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers function
function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}
