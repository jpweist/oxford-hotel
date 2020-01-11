import $ from 'jquery';
// import Hotel from './Hotel';
// import Rooms from './Rooms';
import dateToday from './index.js'
const domUpdates = {

  loadManagerScreen(user) {
    window.location = '/manager.html';
    console.log(dateToday)


  },

  loadCustomerScreen(userID) {
    window.location = '/customer.html'
    console.log('User Id: ', userID)
  }

}

export default domUpdates;
