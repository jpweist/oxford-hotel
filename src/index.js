
import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js'
import Hotel from './Hotel';
import Room from './Room';

var hotel, guest, manager;

let users =
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(data => data.json())
  .then(data => data.users)
  .catch(error => console.log(error))

let rooms =
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(data => data.json())
  .then(data => data.rooms)
  .catch(error => console.log(error))

let bookings =
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(data => data.json())
  .then(data => data.bookings)
  .catch(error => console.log(error))

Promise.all([users, rooms, bookings])
  .then(allData => {
    users = allData[0]
    rooms = allData[1]
    bookings = allData[2]
    hotel = new Hotel(users, bookings, rooms);
    console.log(bookings)
  })

$('.login-button').on( "click", function() { // login manager or customer
  let hotel;
  let userName = $('.user-login').val();
  let userpassword = $('.password').val();
  let justName;


  if (userName === 'manager' && userpassword === 'overlook2019') {
    hotel = new Hotel();
    console.log(hotel, userName)
    domUpdates.loadManagerScreen(userName)
  }
   if (userName.substring(8, 0) === 'customer' && userpassword === 'overlook2019') {
    domUpdates.loadCustomerScreen(parseInt(userName.substring(8, 10)))
  }
  if (userName !== 'manager' && userpassword !== 'overlook2019' || justName !== 'customer' && userpassword !== 'overlook2019') {
    $('.user-login').addClass('error')
    $('.password').addClass('error')

  }
})
