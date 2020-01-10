
import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js'




$('.login-button').on( "click", function() { // login manager or customer

  let userName = $('.user-login').val();
  let userpassword = $('.password').val();

  if (userName === 'manager' && userpassword === 'overlook2019') {
    domUpdates.loadManagerScreen(userName)
  }
   if (userName === 'customer' && userpassword === 'overlook2019') {
    domUpdates.loadCustomerScreen(userName)
  }
  if (userName !== 'manager' && userpassword !== 'overlook2019' || userName !== 'customer' && userpassword !== 'overlook2019') {
    console.log('failed login')
    $('.user-login, .password').addClass('.error')
  }
})
