class Hotel {
  constructor(data) {
    this.data = data;
  }
  findUserById(id) {
  return this.data.users.filter(user => user.id === id)
  }
}


export default Hotel;
