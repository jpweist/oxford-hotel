import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import sampleData from './sample-data';


describe('Hotel', () => {
  let hotel, users, bookings, rooms, currentUser, dateToday;

  beforeEach(() => {
    dateToday = "2019/11/20";
    users = sampleData.users;
    bookings = sampleData.bookings;
    rooms = sampleData.rooms;
    hotel = new Hotel(users, bookings, rooms, dateToday);
    // hotel.data = sampleData;
    // hotel.users = sampleData.users;
    // hotel.bookings = sampleData.bookings;
    // hotel.rooms = sampleData.rooms;
  });

  it('Should be an Instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('Should hold the data for users names', () => {
    // console.log(hotel)
    expect(hotel.users).to.deep.equal([
      {id: 1, name: 'Leatha Ullrich'},
      {id: 2, name: 'Rocio Schuster'}
    ]);
  });

  it('Should get a user by id', () => {
    // console.log(hotel.data.users[0].id)
    hotel.findUserById(1);
    expect(hotel.searchedUser.user).to.deep.equal(
      [ [ { id: 1, name: 'Leatha Ullrich' } ] ]);
  })

  it('Should find user by name', () => {
    hotel.findUserByName('Leatha Ullrich');
    hotel.findUserBookings();
    expect(hotel.searchedUser.user).to.deep.equal(
      [ { id: 1, name: 'Leatha Ullrich' } ])
  })

  it('Should find bookings for any given day', () => {
    hotel.findBookingsByDay("2019/11/20");
    expect(hotel.findBookingsByDay("2019/11/20")).to.deep.equal([{
      id: 1572293130170,
      userID: 1,
      date: "2019/11/20",
      roomNumber: 1
    }, {
      id: 1572293130171,
      userID: 2,
      date: "2019/11/20",
      roomNumber: 2
    }])
  })

  it('Should find revenue for any given day', () => {
    hotel.findRevenueAnyDay("2019/11/20");
    // console.log(hotel.bookings[0].date, hotel.rooms)
    expect(hotel.revenuePerDay).to.equal(835.78);
  });

  it.skip('Should find rooms available today', () => {
    hotel.findRoomsAvailableToday(hotel.dateToday)
    expect(hotel.roomsAvaiableToday).to.deep.equal([ { number: 1,
    roomType: 'residential suite',
    bedSize: 'queen',
    numBeds: 1,
    costPerNight: 358.4 },
  { number: 3,
    roomType: 'single room',
    bedSize: 'king',
    numBeds: 1,
    costPerNight: 491.14 },
  { number: 4,
    roomType: 'single room',
    bedSize: 'queen',
    numBeds: 1,
    costPerNight: 429.44 } ]);

  });

  it('Should have a method to find rooms booked today', () => {
    hotel.findRoomsBookedToday("2019/11/01")
    expect(hotel.roomsBookedToday).to.deep.equal([ { number: 2,
    roomType: 'suite',
    bedSize: 'full',
    numBeds: 2,
    costPerNight: 477.38 } ])
  });

  it('Should find revenue for Today', () => {
    hotel.findRevenueToday("2019/11/20");
    expect(hotel.revenuePerDay).to.equal(835.78);
  })

  it('Should have method to get the rooms/Money the user booked', () => {
    hotel.findUserByName('Leatha Ullrich');
    // console.log(hotel.rooms)
    hotel.findTotalSpentByUser('Leatha Ullrich').to.equal();


  })

  it.skip('Should have a method to Book A Room', () => {
  })
});
