'use strict';

/*
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 method
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
};

createBooking('LH123', 2);
createBooking('LH234', undefined, 1000);
*/

/*
const flight = 'LH234';
const ritik = {
  name: 'Ritik Sharma',
  passport: 2473588754,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2473588754) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, ritik);
console.log(flight);
console.log(ritik);
*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum = 239, name = 'Sarah Williams') {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const result = lufthansa.book.bind(eurowings, 999, 'Ritik Sharma');
result();
*/

/*
// IIFE
(function () {
  console.log('This will never run again.');
})();
*/