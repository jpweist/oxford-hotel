class Hotel {
    constructor(users, bookings, rooms, dateToday) {
      this.users = users;
      this.bookings = bookings;
      this.rooms = rooms;
      this.dateToday = dateToday;
      this.currentUser;
      this.searchedUser = { userID: 0, name: '', bookings: [], rooms: [], totalSpent: 0};
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

  findUserById(id) {
    let serchedById;
    console.log(user)
    serchedById = this.users.filter(user => user.id === id)
    // console.log(serchedById, this.searchedUser)
    this.searchedUser.user.push(serchedById)
    // console.log(this.searchedUser.user)
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
  findUserBookings() {
    this.bookings.forEach(booking => {
      // console.log(booking.userID, this.searchedUser.userID)
      if (booking.userID === this.searchedUser.userID) {
        // console.log(booking.userID, this.searchedUser.userID)
        this.searchedUser.bookings.push(booking)

      }
    })

    // console.log(this.searchedUser)

  }
  findBookingsByDay(day) {
    this.bookingsByDate = [];
     this.bookings.forEach(booking => {
      if (booking.date === day) {
        this.bookingsByDate.push(booking);
      }
    })
    return this.bookingsByDate;
  }
  findRevenueAnyDay(day) {
    return this.bookings.filter(booking => {
      this.rooms.forEach(room => {
        if (booking.date === day && booking.roomNumber === room.number) {
          this.revenuePerDay += room.costPerNight;
        }
      })
    })
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
    console.log(this.searchedUser.totalSpent)
  }
  findRevenueToday(day) {
    return this.bookings.filter(booking => {
      this.rooms.forEach(room => {
        if (booking.date === day && booking.roomNumber === room.number) {
          this.revenueToday += Math.floor(room.costPerNight);
        }
      })
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
  // we want to find the rooms booked today
  findRoomsBookedToday() {
    this.bookings.forEach(booking => {
      this.rooms.reduce((acc, room) => {
        if (booking.roomNumber == room.number) {
          acc.push(room);
        }
        this.roomsBookedToday = acc;
        return acc;
      }, [])
    })
    this.percentOfRoomsAvailableToday = (this.roomsBookedToday.length * this.rooms.length);
    // console.log(this.percentOfRoomsAvailableToday)
    return this.roomsBookedToday;
  }
  findAvailableRoomsByDate(day) {
    this.bookings.forEach(booking => {
      console.log(booking.date)
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
