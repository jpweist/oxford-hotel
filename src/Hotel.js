class Hotel {
    constructor(users, bookings, rooms) {
      this.users = users;
      this.bookings = bookings;
      this.rooms = rooms;
      this.currentUser;
      this.revenuePerDay = 0;
    }
  getAPIData() {
    // console.log(this.data)
  }
  findUserById(id) {
    return this.users.filter(user => user.id === id)
  }
  findUserByName(name) {
    return this.users.filter(user => user.name === name)
  }
  findBookingsByDay(day) {
    return this.bookings.filter(booking => booking.date === day)
  }
  findAvailableRoomsByDay() {
    return this.bookings.filter(booking => {
      !booking.date === day
      console.log(bookings)
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
}


export default Hotel;
