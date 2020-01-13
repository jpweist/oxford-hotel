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
    expect(user.currentUser).to.deep.equal({ id: 1, name: 'Leatha Ullrich' })
  });

});
