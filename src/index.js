
import $ from 'jquery';
import './css/base.scss';





$('.login-button').on( "click", function() { // login manager or customer

  let userName = $('.user-login').val();
  let userpassword = $('.password').val();

  if (userName === 'manager' && userpassword === 'overlook2019') {
    // console.log(userName)

    window.location = '/manager.html';
  }
   if (userName === 'customer' && userpassword === 'overlook2019') {
     // let customer1 = new Customer(userName);
     // console.log(userName)
    window.location = '/customer.html'
  }
  if (userName !== 'manager' && userpassword !== 'overlook2019' || userName !== 'customer' && userpassword !== 'overlook2019') {
    console.log('failed login')
  }
})
