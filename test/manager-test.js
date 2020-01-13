import chai from 'chai';
const expect = chai.expect;

import Manager from '../src/Manager';
import sampleData from './sample-data';




describe('Manager', () => {

  let manager, users, bookings, rooms, currentUser, dateToday;

  beforeEach(() => {
    dateToday = "2019/11/20";
    users = sampleData.users;
    bookings = sampleData.bookings;
    rooms = sampleData.rooms;
    manager = new Manager(users, bookings, rooms, dateToday);

  });

  it('should be an instance of Manager', () => {
    expect(manager).to.be.an.instanceof(Manager);
  });

  it('Should find user by name', () => {
    manager.findUserByName('Leatha Ullrich');
    manager.findUserBookings();
    expect(manager.searchedUser.userID).to.deep.equal(1);
    expect(manager.searchedUser.name).to.deep.equal('Leatha Ullrich');

  });

  it('should have a method to find the bookings for today', () => {
    manager.findBookingsToday(dateToday);
    expect(manager.roomsBookedToday).to.deep.equal([{ number: 1,
  roomType: 'residential suite',
  bedSize: 'queen',
  numBeds: 1,
  costPerNight: 358.4 }, { number: 2,
  roomType: 'suite',
  bedSize: 'full',
  numBeds: 2,
  costPerNight: 477.38 }]);
  })

  it('should have a method to find revenue for the day', () => {
    manager.findBookingsToday(dateToday);
    manager.findRevenueAnyDay(dateToday);
    expect(manager.revenueToday).to.equal(835);
  });

});
