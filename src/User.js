import Hotel from './Hotel.js';

class User extends Hotel {
  constructor(users, bookings, rooms, dateToday, userNum) {
    super(users, bookings, rooms, dateToday)
    // this.currentUser = userNum;
    // this.searchedUser = { userID: userNum, name: '', bookings: [], rooms: [], totalSpent: 0 }

  }
  findUserById(id) {
    let serchedById;
    this.currentUser = id;

    // console.log(id)
    serchedById = this.users.filter(user => {
      // console.log(user.id, user.name, id)
      if (user.id === parseInt(id)) {
        this.searchedUser.userID = user.id;
        this.searchedUser.name = user.name;

        // console.log('this.currentUser: ', this.currentUser)
      }
      // this.searchedUser.userID = this.currentUser.id;
      // this.searchedUser.name = this.currentUser.name;
    })
    // console.log(this.searchedUser)
  }
  findUserBookings() {
    this.searchedUser.bookings = [];
    this.bookings.forEach(booking => {
      // console.log(booking.userID, this.searchedUser.userID)
      if (booking.userID === this.searchedUser.userID) {
        // console.log(booking, this.searchedUser.userID)
        this.searchedUser.bookings.push(booking)

      }
    })
    // console.log(this.searchedUser)


  }

}


export default User;
