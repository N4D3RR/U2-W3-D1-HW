//1
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

console.log(u1, u2, u3, u4)

console.log(u3.compareAge(u4))
console.log(u3.compareAge(u2))
console.log(u1.compareAge(u2))

// 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  // verifico se due animali hanno lo stesso padrone
  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName
  }
}

const pets = []

const petNameInput = document.getElementById("petName")
const ownerNameInput = document.getElementById("ownerName")
const speciesInput = document.getElementById("species")
const breedInput = document.getElementById("breed")
const petForm = document.getElementById("petForm")
const petList = document.getElementById("petList")
const ownerResults = document.getElementById("ownerResults")

petForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // prendo i valori input al momento del submit
  const petName = petNameInput.value //const petName = document.getElementById("petName").value
  const ownerName = ownerNameInput.value //const ownerName = document.getElementById("ownerName").value
  const species = speciesInput.value
  const breed = breedInput.value

  // Crea nuovo oggetto Pet
  const newPet = new Pet(petName, ownerName, species, breed)
  pets.push(newPet)

  // aggiorna la lista
  displayPets()

  petForm.reset()
})

// Funzione per visualizzare la lista
const displayPets = function () {
  petList.innerHTML = ""
  // creo li da appendere nel DOM dai dati di newPet
  pets.forEach((pet) => {
    const listItem = document.createElement("li")
    listItem.textContent = `Nome: ${pet.petName}, Specie: ${pet.species} - Razza ${pet.breed}, Padrone: ${pet.ownerName}`
    petList.appendChild(listItem)
  })
  console.log(pets)
  checkSharedOwners()
}

// Funzione per verificare animali con stesso padrone
const checkSharedOwners = function () {
  ownerResults.innerHTML = ""

  for (let i = 0; i < pets.length; i++) {
    // i+1 comparo i con gli altri
    for (let j = i + 1; j < pets.length; j++) {
      if (pets[i].hasSameOwner(pets[j])) {
        const message = document.createElement("li")
        message.textContent = `${pets[i].petName} e ${pets[j].petName} condividono lo stesso padrone: ${pets[i].ownerName}`
        ownerResults.appendChild(message)
      }
    }
  }
}
