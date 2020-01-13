class Hotel {
    constructor(users, bookings, rooms, dateToday) {
      this.users = users;
      this.bookings = bookings;
      this.rooms = rooms;
      this.dateToday = dateToday;
      this.searchedUser = {};
      this.percentOfRoomsAvailableToday = 0; // we want the % instead
      this.roomsAvailable = [];
      this.roomsAvaiableToday = [];
      this.roomsBookedToday = [];
      this.roomsAvaiableByDate = [];
      this.revenuePerDay = 0;
      this.revenueToday = 0;
      this.bookingsByDate = [];
      this.roomsAvailableByDate = [];
    }
// this.searchedUser = { userID: 0, name: '', bookings: [], rooms: [], totalSpent: 0 }
  // findUserById(id) {
  //   let serchedById;
  //   serchedById = this.users.filter(user => user.id === id)
  //   console.log(serchedById[0].id, serchedById[0].name)
  //   this.searchedUser.userID = serchedById[0].id;
  //   this.searchedUser.name = serchedById[0].name;
  //   // console.log(this.searchedUser.userID, this.searchedUser.name)
  // }
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
  // findUserBookings() {
  //   this.bookings.forEach(booking => {
  //     // console.log(booking.userID, this.searchedUser.userID)
  //     if (booking.userID === this.searchedUser.userID) {
  //       // console.log(booking.userID, this.searchedUser.userID)
  //       this.searchedUser.bookings.push(booking)
  //
  //     }
  //   })
  //
  //   // console.log(this.searchedUser)
  //
  // }
  findBookingsByDay(day) {
     this.bookings.forEach(booking => {
      if (booking.date === day) {
        this.roomsBookedToday.push(booking);
      }
    })
    return this.bookingsByDate;
  }
  findRevenueAnyDay(day) {         //Should find revenue for any given day
    let totalRevenuePerDay = 0;
    this.roomsBookedToday.forEach(room => {
        // console.log(room)
      })
    this.revenueToday = totalRevenuePerDay
    // console.log(this.revenueToday)
  }
  findRoomsBookedByUser() {
    this.rooms.forEach(room => {
      // console.log(room.number, this.searchedUser.bookings.roomNumber)
      this.searchedUser.bookings.forEach(booking => {
        // console.log(room.number, booking.roomNumber)
        if (room.number === booking.roomNumber) {
          // console.log(room.number, booking.roomNumber)
          this.searchedUser.rooms.push(room)
          // console.log(this.searchedUser.rooms)
        }
      })

    })

  }
  findTotalSpendByUser() {
    let totalSpentUser = 0;
    this.searchedUser.rooms.forEach(room => {
      // console.log(room.costPerNight)
      totalSpentUser += room.costPerNight;
    })
    this.searchedUser.totalSpent = totalSpentUser;
    // console.log(this.searchedUser.totalSpent)
  }
  findRevenueToday() {
    // console.log(this.roomsBookedToday)
    this.roomsBookedToday.forEach(room => {
      // console.log(room)
    })
    // console.log(this.revenueToday)
  }
  findPercentOfRoomsAvailableToday(today) {
    this.bookings.forEach(booking => {
      this.rooms.reduce((acc, room) => {
        if (booking.roomNumber !== room.number) {
          acc.push(room);
        }
        this.roomsAvaiableToday = acc;
        return acc;
      }, [])
    })
    return this.roomsAvaiableToday;
  }
  // Should find bookings for any given day

  // findRoomsBookedToday(date) {
  //   // console.log(date)
  //   this.bookings.forEach(booking => {
  //     // console.log(booking.date, date)
  //   if (booking.date === date) {
  //   }
  //     this.rooms.reduce((acc, room) => {
  //       // console.log(booking.date, date)
  //         acc.push(room);
  //
  //       return acc;
  //     }, [])
  //   })
  //   // this.percentOfRoomsAvailableToday = (this.roomsBookedToday.length * this.rooms.length);
  //   // // console.log(this.percentOfRoomsAvailableToday)
  //   // return this.roomsBookedToday;
  //
  // }
  findAvailableRoomsByDate(day) {
    this.bookings.forEach(booking => {
      // console.log(booking.date)
      this.rooms.reduce((acc, room) => {
        if (booking.roomNumber !== room.number) {
          acc.push(room);
        }
        this.roomsAvaiableByDate = acc;
        return acc;
      }, [])
    })
    return this.roomsAvaiableByDate;

  }
  bookRoom(roomNumber, id, date, callback) {
    let item = {
      "userID": id,
      "date": date,
      "roomNumber": parseInt(roomNumber)
    }
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => callback(data))
  }
}

export default Hotel;
