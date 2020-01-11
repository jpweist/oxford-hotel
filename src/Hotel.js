class Hotel {
    constructor(users, bookings, rooms, dateToday) {
      this.users = users;
      this.bookings = bookings;
      this.rooms = rooms;
      this.dateToday = dateToday;
      this.currentUser;
      this.numberOfRoomsAvailableToday = 0;
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
    return this.users.filter(user => user.id === id)
  }
  findUserByName(name) {
    return this.users.filter(user => user.name === name)
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
  findRevenueToday(day) {
    return this.bookings.filter(booking => {
      this.rooms.forEach(room => {
        if (booking.date === day && booking.roomNumber === room.number) {
          this.revenueToday += room.costPerNight;
        }
      })
    })
    console.log(this.revenueToday)
  }
  findRoomsAvailableToday(today) {
    this.bookings.forEach(booking => {
      this.rooms.reduce((acc, room) => {
        if (booking.roomNumber !== room.number) {
          acc.push(room);
        }
        this.roomsAvaiableToday = acc;
        return acc;
      }, [])
    })
    this.numberOfRoomsAvailableToday = this.roomsAvaiableToday.length;
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
