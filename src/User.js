import Hotel from './Hotel.js';

class User extends Hotel {
  constructor(users, bookings, rooms, dateToday, userNum) {
    super(users, bookings, rooms, dateToday)
    // this.currentUser = userNum;
    // this.searchedUser = { userID: userNum, name: '', bookings: [], rooms: [], totalSpent: 0 }
    this.roomsAvaiableByDate = [];
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
  findRoomsBookedByUser() {
    this.searchedUser.rooms = [];
    this.searchedUser.totalSpent = 0;
    let numberOfNights = 0;
    this.rooms.forEach(room => {
      // console.log(room.number, this.searchedUser.bookings.roomNumber)

      this.searchedUser.bookings.forEach(booking => {
        if (room.number === booking.roomNumber) {
          numberOfNights++
        }
        // console.log('numberOfNights', numberOfNights)

        // console.log(room.number, booking.roomNumber)
        if (room.number === booking.roomNumber && !this.searchedUser.rooms.includes(room)) {
          // console.log(room.number, booking.roomNumber)
          this.searchedUser.rooms.push(room)
          this.searchedUser.totalSpent = numberOfNights * room.costPerNight;
          // console.log(this.searchedUser.totalSpent)
          // console.log(this.searchedUser.rooms)
        }
      })

    })

  }

  findAvailableRoomsByDate(day) {
    // console.log(day)
    this.bookings.forEach(booking => {
      // console.log(booking.date)
      this.rooms.reduce((acc, room) => {
        if (booking.roomNumber !== room.number) {
          // console.log(booking.roomNumber, room.number)
          acc.push(room);
        }
        this.roomsAvaiableByDate = acc;
        return acc;
      }, [])
    })
    // console.log(this.roomsAvaiableByDate)
    return this.roomsAvaiableByDate;

  }



}


export default User;
