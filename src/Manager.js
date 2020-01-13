import User from './User.js';

class Manager extends User {
  constructor(users, bookings, rooms, dateToday) {
    super(users, bookings, rooms, dateToday)
    this.roomsBookedToday;
    this.bookingsForTheDay;
    this.revenueToday = 0;


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
      // console.log('day', day)
      this.roomsBookedToday = [];
      this.bookingsForTheDay = [];
       return this.bookings.forEach(booking => {
         // console.log(booking);
         this.rooms.forEach(room => {
           // console.log(room)
           if (booking.date === day && booking.roomNumber === room.number ) {
             // console.log(booking);
             this.bookingsForTheDay.push(booking)
             this.roomsBookedToday.push(room);

           }
           // console.log(this.roomsBookedToday)
         })
         return this.roomsBookedToday;

      })
      // console.log(this.roomsBookedToday)
    }

    findRevenueAnyDay(day) {         //Should find revenue for any given day
      this.roomsBookedToday.forEach(room => {
          // console.log(room.costPerNight)
          this.revenueToday += room.costPerNight;
          // console.log(totalRevenuePerDay)
          this.revenueToday = Math.floor(this.revenueToday)
        })
        return this.revenueToday;
      // console.log(this.revenueToday)
    }


}


export default Manager;
