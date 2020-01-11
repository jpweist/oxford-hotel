class Hotel {
  constructor() {
    this.data = null;
  }
  getAPIData() {
    // console.log(this.data)
  }
  findUserById(id) {
    return this.data.users.filter(user => user.id === id)
  }
  findUserByName(name) {
    return this.data.users.filter(user => user.name === name)
  }
  findBookingsByDay(day) {
    return this.data.bookings.filter(booking => booking.date === day)
  }
  findRevenueAnyDay(day) {
    return this.data.bookings.filter(booking => booking.date === day);
  }
}


export default Hotel;
