import { AnimalWithSpeed } from "./animal-with-speed.interface";

export interface WalkingAnimal extends AnimalWithSpeed {
    walk(): void
    run(): void
}