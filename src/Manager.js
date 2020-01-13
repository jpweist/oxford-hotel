import User from './User.js';


class Manager extends User {
  constructor(users, bookings, rooms, dateToday) {
    super(users, bookings, rooms, dateToday)
  }
  delete() {

  }
}


export default Manager;
