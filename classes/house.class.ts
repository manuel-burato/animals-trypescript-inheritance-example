import { AnimalWithSpeed, FlyngAnimal, SwimmingAnimal, WalkingAnimal } from "../interfaces";
import { ConfigurationStore } from "../utilities/configuration.store";

export class House {
    public walkingAnimals: WalkingAnimal[] = []
    public flyngAnimals: FlyngAnimal[] = []
    public swimmingAnimals: SwimmingAnimal[] = []
    
    constructor() { }

    enterfromDoor(animal: WalkingAnimal) {
        animal.walk()
        this.logEntrance(animal)
        this.walkingAnimals.push(animal)
    }

    enterFromWindow(animal: FlyngAnimal) {
        animal.glide()
        this.logEntrance(animal)
        this.flyngAnimals.push(animal)
    }

    get animalTotal(): number {
        return this.walkingAnimals.length + this.flyngAnimals.length + this.swimmingAnimals.length 
    }

    private logEntrance(animal: AnimalWithSpeed) {
        if(ConfigurationStore.MOVEMENT_LOG_ACTIVE)
            console.log(`<${animal.constructor.name}>`, (<any>animal)['name'], `is moving into house at ${animal.currentSpeed} speed`)
        
        animal.stop()
    }
}