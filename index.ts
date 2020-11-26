import { Dog, Cat, Firefly } from "./classes"
import { House } from "./classes/house.class"
import { ConfigurationStore } from "./utilities/configuration.store"
import { Manger } from "./utilities/manger.utility"

ConfigurationStore.MANGER_OUTPUT_ACTIVE = false
ConfigurationStore.MOVEMENT_OUTPUT_ACTIVE = true

const pogo = new Dog("Pogo")
const heisenberg = new Cat("Heisenberg")
const draco = new Firefly("Draco")

Manger.feedAnimal(pogo)
Manger.feedAnimal(heisenberg)
Manger.feedAnimal(draco)

const myHouse = new House()
myHouse.enterfromDoor(pogo)
myHouse.enterfromDoor(heisenberg)
myHouse.enterFromWindow(draco)

console.log(`my house now contains ${myHouse.animalTotal} animals`)