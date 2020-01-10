import $ from 'jquery';

const domUpdates = {

  loadManagerScreen(user) {
    window.location = '/manager.html';
  },

  loadCustomerScreen(user) {
    window.location = '/customer.html'
    console.log(user)
  }

}

export default domUpdates;
