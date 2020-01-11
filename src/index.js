
import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js'
import Hotel from './Hotel';
import Room from './Room';

var hotel, guest, manager, dateToday;
getDateToday()

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
  .then(data => {
    users = data[0]
    rooms = data[1]
    bookings = data[2]
    hotel = new Hotel(users, bookings, rooms, dateToday);
    console.log(hotel)
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
});

function getDateToday() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  dateToday = `${yyyy}/${mm}/${dd}`;
  console.log(dateToday)
  return dateToday;
}
