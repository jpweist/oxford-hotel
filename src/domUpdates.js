import $ from 'jquery';



const domUpdates = {

  loadManagerScreen(manager) {
    // window.location = '/manager.html';
    // console.log(dateToday, manager)
    $('.manager-view').toggleClass('hide-class');
    $('.login-page').toggleClass('hide-class');
    $('.total-revenue-today')
    .text(` Total Revenue Today $${manager.revenueToday}`);
    $('.percent-full-today')
    .text(` Percent Occupied Today ${manager.percentOfRoomsAvailableToday}%`)
    $('.number-of-rooms-available-today').text(`Rooms available today: ${manager.numberOfRoomsAvaiableToday}`)


  },

  loadCustomerScreen(user) {
    // window.location = '/customer.html'
    // console.log('User Id: ', userID)
    $('.customer-page').toggleClass('hide-class');
    $('.login-page').toggleClass('hide-class');
    $('.user-welcome').html(`<h1 class="user-welcome">Welcome ${ user.searchedUser.name } to Oxford Hotel Customer Bookings</h1>`);
    $('.user-total-spent').html(`<p class="user-total-spent">Total Spent On Rooms: $${ user.searchedUser.totalSpent }</p>`);


  },
  error() {
    $('.user-login').addClass('error')
    $('.password').addClass('error')
  }


}

export default domUpdates;
