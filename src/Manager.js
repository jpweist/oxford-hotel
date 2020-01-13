import User from './User.js';

class Manager extends User {
  constructor(users, bookings, rooms, dateToday) {
    super(users, bookings, rooms, dateToday)
    this.roomsBookedToday = [];
    this.bookingsForTheDay = [];
    this.roomsAvailableToday = [];
    this.revenueToday = 0;
    this.percentOfRoomsAvailableToday = 0;
    this.numberOfRoomsAvaiableToday = 0;


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
      // this.roomsBookedToday = [];
      // this.bookingsForTheDay = [];
       return this.bookings.forEach(booking => {
         // console.log(booking);
         return this.rooms.forEach(room => {
           // console.log(room)
           if (booking.date === day && booking.roomNumber === room.number ) {
             // console.log(booking);
             this.bookingsForTheDay.push(booking)
             this.roomsBookedToday.push(room);
           }
           if (booking.roomNumber !== room.number && !this.roomsAvailableToday.includes(room)) {
             // console.log(room);
             this.roomsAvailableToday.push(room);

           }


         })
         // console.log(this.roomsAvailableToday)

      })
      // console.log(this.roomsBookedToday)
    }

    findRevenueAnyDay(day) {
      this.roomsBookedToday.forEach(room => {
          // console.log(room.costPerNight)
          this.revenueToday += room.costPerNight;
          // console.log(totalRevenuePerDay)
          this.revenueToday = Math.floor(this.revenueToday)
        })
        return this.revenueToday;
      // console.log(this.revenueToday)
    }

    findPercentBookedToday() {
      // console.log('roomsBookedToday', this.roomsBookedToday);
      // console.log('this.rooms', this.rooms)
      // console.log(this.rooms.length / this.roomsBookedToday.length )
      // console.log((this.roomsBookedToday.length / this.rooms.length)  * 100 )

      this.numberOfRoomsAvaiableToday = this.rooms.length - this.roomsBookedToday.length;
      this.percentOfRoomsAvailableToday = (this.roomsBookedToday.length / this.rooms.length) * 100;
      // console.log(this.percentOfRoomsAvailableToday)
      return this.percentOfRoomsAvailableToday;
    }

    // findRoomsAvaiableToday() {
    //   // console.log('day', day)
    //   // this.roomsBookedToday = [];
    //   // this.bookingsForTheDay = [];
    //    return this.bookings.forEach(booking => {
    //      // console.log(booking);
    //      return this.rooms.forEach(room => {
    //        // console.log(room)
    //        if (booking.roomNumber !== room.number && !this.roomsAvailableToday.includes(room)) {
    //          // console.log(room);
    //          this.roomsAvailableToday.push(room);
    //
    //        }
    //
    //
    //      })
    //      // console.log(this.roomsAvailableToday)
    //
    //   })
    //   // console.log(this.roomsBookedToday)
    //   return this.roomsAvailableToday;
    // }

}


export default Manager;
