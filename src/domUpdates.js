import $ from 'jquery';
import './images/icons8-delete-bin-50.png'



const domUpdates = {

  loadManagerScreen(manager) {
    // window.location = '/manager.html';
    // console.log(dateToday, manager)
    // $('.manager-view').toggleClass('hide-class');
    // $('.login-page').toggleClass('hide-class');
    // $('.total-revenue-today')
    // .text(` Total Revenue Today $${manager.revenueToday}`);
    // $('.percent-full-today')
    // .text(` Percent Occupied Today ${manager.percentOfRoomsAvailableToday}%`)
    // $('.number-of-rooms-available-today').text(`Rooms available today: ${manager.numberOfRoomsAvaiableToday}`)


    $('body').html(`<section class="manager-view">
      <h1>Overlook Hotel Manger Bookings</h1>
      <p class="number-of-rooms-available-today"></p>
      <p class="total-revenue-today">Total Revenue Today $${manager.revenueToday}</p>
        <p class="percent-full-today">Percent Occupied Today ${manager.percentOfRoomsAvailableToday}%</p>

      <fieldset>
        <legend>Manager Control Board</legend>
        <label for="search user"  User>Search User:</label>
        <input class="search-name-value" type="text" name="" value="first and last name" aria-label="Search">
        <button class="search-name-button" type="button" name="button">Submit</button>
      </fieldset>
      <h2>Available Rooms</h2>
      <article class="manager-display">



      </article>
    </section>`)

  },

  loadCustomerScreen(user) {
    // window.location = '/customer.html'
    // console.log('User Id: ', userID)
    // $('.customer-page').toggleClass('hide-class');
    // $('.login-page').toggleClass('hide-class');
    // $('.user-welcome').html(`<h1 class="user-welcome">Welcome ${ user.searchedUser.name } to Oxford Hotel Customer Bookings</h1>`);
    // $('.user-total-spent').html(`<p class="user-total-spent">Total Spent On Rooms: $${ user.searchedUser.totalSpent }</p>`);
    $('body').html(`<section class="customer-page">
      <title>Oxford Customer Bookings</title>
      </head>
      <body>
      <h1 class="user-welcome">Welcome ${ user.searchedUser.name } to Oxford Hotel Customer Bookings</h1>
      <p class="user-total-spent">Total Spent On Rooms: $${ user.searchedUser.totalSpent }</p>
      <label for="">Search by Date</label>
      <input class="search-by-date-value" type="text" name="search by date" aria-label="Search by Date" value="2020/01/12">
      <button class="search-by-date-button" type="button" name="button">Search</button>
      <article class="user-search-results">
        <div>
          <h2>Your bookings:</h2>
          <span class='user-bookings'></span>
          <span class='booking'></span>

        </div>

      </article>
    </section>
  </body>`);


  },

  loadManagerSearch(manager) {

    $('.user-search-display').append(`<p> Name: ${ manager.searchedUser.name }, Total Spent: ${ manager.searchedUser.totalSpent }</p>`);
    $('.user-search-bookings').append(`<p> Name: ${ manager.searchedUser.name }, Total Spent: ${ manager.searchedUser.totalSpent }</p>`);
  },
  displayBookingsForUser(user) {
    let bookings = user.searchedUser.bookings;
    // console.log(bookings[0])
    bookings.forEach((elem) => {
      // console.log(elem.date)
      $('.user-bookings').append(
        `<div>
        <span class='booking'><button class="delete-booking" id="${elem.id}">Delete Booking</button> Date: ${elem.date}, Room: ${elem.roomNumber}</span>
        </div>
        `
      )
    })
    $('.delete-booking').on( "click", () => {
      let bookingId = event.target.id;
      console.log(bookingId)
    })
  },
  displayAvaiableRoomsForManager(manager) {
    let available = manager.roomsAvailableToday;
    // console.log(available[0])
    available.forEach((elem) => {
      // console.log(elem.id)
      $('.manager-display').append(
        `<div>
        <span class='booking'><button class="book-room" id="${elem.number}">Book</button>Room:${elem.number}, Type: ${elem.roomType}, Bed: ${elem.bedSize} $${elem.costPerNight}</span>
        </div>
        `
      )
    })
    $('.book-room').on( "click", () => {
      let roomNumber = event.target.id;
      console.log(roomNumber)
    });
  },
  userDateSearchResults() {
    let userDateSearch = user.roomsAvaiableByDate;
    console.log(userDateSearch)
    available.forEach((elem) => {
      // console.log(elem.date)
      $('.manager-display').append(
        `<div>
        <span class='booking'><button id="${elem.id}">Book</button>Room:${elem.number}, Type: ${elem.roomType}, Bed: ${elem.bedSize} $${elem.costPerNight}</span>
        </div>
        `
      )
    })

  },

  error() {
    $('.user-login').addClass('error')
    $('.password').addClass('error')
  }


}

export default domUpdates;
