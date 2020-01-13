import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import sampleData from './sample-data';

describe('User Class Tests', function() {
  let user, users, bookings, rooms, currentUser, dateToday, userId;

  beforeEach(() => {
    userId = 1;
    dateToday = "2019/11/20";
    users = sampleData.users;
    bookings = sampleData.bookings;
    rooms = sampleData.rooms;
    user = new User(users, bookings, rooms, dateToday, userId);
  })

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a method to find the user info from id', () => {
    user.findUserById(1);
    expect(user.currentUser).to.deep.equal(1)
  });

  it('should have a method to find user bookings', () => {
    user.findUserById(1);
    user.findUserBookings()
    expect(user.searchedUser).to.deep.equal({ userID: 1,
  name: 'Leatha Ullrich',
  bookings:
   [ { id: 1572293130170,
       userID: 1,
       date: '2019/11/20',
       roomNumber: 1 },
     { id: 1572293130172,
       userID: 1,
       date: '2019/11/21',
       roomNumber: 1 },
     { id: 1572293130176,
       userID: 1,
       date: '2019/10/23',
       roomNumber: 1 } ] })
  });

  it('Should have a method to find rooms booked by user', () => {
    user.findUserById(1);
    user.findUserBookings()
    user.findRoomsBookedByUser();
    expect(user.searchedUser.rooms).to.deep.equal([ { number: 1,
    roomType: 'residential suite',
    bedSize: 'queen',
    numBeds: 1,
    costPerNight: 358.4 } ]);
  });

  it('should have a method to find Available Rooms By Date', () => {
    user.findUserById(1);
    user.findUserBookings();
    user.findAvailableRoomsByDate("2019/11/20");
    expect(user.roomsAvaiableByDate).to.deep.equal([ { number: 1,
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
    costPerNight: 429.44 } ])
  })

});
