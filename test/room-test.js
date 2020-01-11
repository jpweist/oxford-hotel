import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import Room from '../src/Room';
import sampleData from './sample-data';

describe('Room', function() {
  let room;

  beforeEach(() => {
    room = new Room('manager');
    room.data = sampleData.rooms;

  });

  it('Should be an instance of Room', function() {
    expect(room).to.be.an.instanceof(Room);
  });

  it('Should find occupied rooms on a given day', function() {
    expect(room.findOccupiedRoomsByDay("2019/11/20")).to.deep.equal()
  })

});
