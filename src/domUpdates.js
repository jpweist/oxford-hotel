import $ from 'jquery';
// import Hotel from './Hotel';
// import Rooms from './Rooms';

const domUpdates = {

  loadManagerScreen(user) {
    window.location = '/manager.html';

  },

  loadCustomerScreen(userID) {
    window.location = '/customer.html'
    console.log('User Id: ', userID)
  }

}

export default domUpdates;
