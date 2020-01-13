import Hotel from './Hotel.js';

class User extends Hotel{
  constructor(users, bookings, rooms, dateToday, userNum) {
    super(users, bookings, rooms, dateToday)
    this.currentUser = userNum;

  }
  findUserById(id) {
    let serchedById;
    // console.log(id)
    serchedById = this.users.filter(user => {
      if (user.id === id) {
        // console.log(user, id)
        this.currentUser = user;
        // console.log('this.currentUser: ', this.currentUser)
      }
    })
    // console.log(serchedById[0].id, serchedById[0].name)
    // this.searchedUser.userID = serchedById[0].id;
    // this.searchedUser.name = serchedById[0].name;
    // console.log(this.searchedUser.userID, this.searchedUser.name)
  }

}


export default User;
