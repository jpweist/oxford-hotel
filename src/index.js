
import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js'




$('.login-button').on( "click", function() { // login manager or customer

  let userName = $('.user-login').val();
  let userpassword = $('.password').val();
  let justName;


  if (userName === 'manager' && userpassword === 'overlook2019') {
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
