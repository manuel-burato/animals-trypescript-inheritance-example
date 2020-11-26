/**
 * Author: Manuel Burato
 * Project: Formazione Angular Capgemini 2020
 * Description: A cheatsheet of advanced typescript's inheritance tips,
 *   boxed in a nice, wild, application
 */

import { Dog, Cat, Firefly } from "./classes"
import { House } from "./classes/house.class"
import { ConfigurationStore } from "./utilities/configuration.store"
import { Manger } from "./utilities/manger.utility"

ConfigurationStore.MANGER_LOG_ACTIVE = false
ConfigurationStore.MOVEMENT_LOG_ACTIVE = true

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