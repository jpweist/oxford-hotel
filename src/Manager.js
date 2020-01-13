import User from './User.js';

class Manager extends User {
  constructor(users, bookings, rooms, dateToday) {
    super(users, bookings, rooms, dateToday)
    this.roomsBookedToday;

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
    findBookingsToday(day) {
      this.roomsBookedToday = [];
       return this.bookings.forEach(booking => {
         // console.log(booking);
         this.rooms.forEach(room => {
           // console.log(room)
           if (booking.date === day && booking.roomNumber === room.number ) {
             // console.log(room);

             this.roomsBookedToday.push(room);

           }
           // console.log(this.roomsBookedToday)
         })
         return this.roomsBookedToday;

      })
      // console.log(this.roomsBookedToday)
    }


}


export default Manager;
