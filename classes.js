class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`
    }
  }
}

const u1 = new User("Gino", "Paoli", 31, "Camogli")
const u2 = new User("Aldo", "Baglio", 78, "Sinnai")
const u3 = new User("Roberto", "Benigni", 81, "Padova")
const u4 = new User("Franco", "Benigni", 81, "Taranto")

console.log(u3.compareAge(u4))
