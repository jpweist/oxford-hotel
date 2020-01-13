import User from './User.js';


class Manager extends User {
  constructor(users, bookings, rooms, dateToday) {
    super(users, bookings, rooms, dateToday)
  }
  findUserByName(name) {
    let totalCost = 0;
    return this.users.filter(user => {

      if (user.name === name ) {
        // console.log(user)
        this.searchedUser.userID = user.id;
        this.searchedUser.name = name;
        // console.log(this.searchedUser)
      }
    })

    }
  delete() {

  }
}


export default Manager;
