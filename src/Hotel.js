class Hotel {
  constructor(data) {
    this.data = data;
  }
  findUserById(id) {
  return this.data.users.filter(user => user.id === id)
  }
  findUserByName(name) {
    return this.data.users.filter(user => user.name == name)
  }
}


export default Hotel;
