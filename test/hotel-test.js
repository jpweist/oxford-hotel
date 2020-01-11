import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import sampleData from './sample-data';


describe('Hotel', function() {
  let hotel, user, bookings, rooms, currentUser;

  beforeEach(() => {
    user = sampleData.users;
    bookings = sampleData.bookings;
    rooms = sampleData.rooms;
    hotel = new Hotel(user, bookings, rooms);
    // hotel.data = sampleData;
    // hotel.users = sampleData.users;
    // hotel.bookings = sampleData.bookings;
    // hotel.rooms = sampleData.rooms;
  });

  it('Should be an Instance of Hotel', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('Should hold the data for users names', function() {
    // console.log(hotel)
    expect(hotel.users).to.deep.equal([
      {id: 1, name: 'Leatha Ullrich'},
      {id: 2, name: 'Rocio Schuster'}
    ]);
  });

  it('Should get a user by id', function() {
    // console.log(hotel.data.users[0].id)
    // hotel.findUserById(1);
    expect(hotel.findUserById(1)).to.deep.equal(
      [{id: 1, name: 'Leatha Ullrich'}]);
  })

  it('Should find user by name', function() {
    hotel.findUserByName('Leatha Ullrich');
    expect(hotel.findUserByName('Leatha Ullrich')).to.deep.equal(
      [{id: 1, name: 'Leatha Ullrich'}])
  })

  it('Should find bookings for any given day', function() {
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

  it('Should find revenue for any given day', function() {
    hotel.findRevenueAnyDay("2019/11/20");
    // console.log(hotel.bookings[0].date, hotel.rooms)
    expect(hotel.revenuePerDay).to.equal(835.78);
  })
});
