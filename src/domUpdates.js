import $ from 'jquery';
// import Hotel from './Hotel';
// import Rooms from './Rooms';
import dateToday from './index.js'

const domUpdates = {

  loadManagerScreen(user) {
    // window.location = '/manager.html';
    // console.log(dateToday)

    $('.manager-view').toggleClass('hide-class');
    $('.login-page').toggleClass('hide-class');


  },

  loadCustomerScreen(userID) {
    // window.location = '/customer.html'
    // console.log('User Id: ', userID)
    $('.customer-page').toggleClass('hide-class');
    $('.login-page').toggleClass('hide-class');
  }

}

export default domUpdates;
