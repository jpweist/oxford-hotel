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

});
