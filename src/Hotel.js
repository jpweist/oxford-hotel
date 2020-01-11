class Hotel {
    constructor(users, bookings, rooms, dateToday) {
      this.users = users;
      this.bookings = bookings;
      this.rooms = rooms;
      this.dateToday = dateToday;
      this.currentUser;
      this.roomsAvailable = [];
      this.roomsAvaiableToday = [];
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
  findAvailableRoomsByDay(day) {
    return this.bookings.filter(booking => {
      if (!booking.date === day) {
        console.log(bookings)

      }
    })

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
    return this.roomsAvaiableToday;
  }
}


export default Hotel;
