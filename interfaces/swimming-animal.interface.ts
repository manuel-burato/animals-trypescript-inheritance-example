import { AnimalWithSpeed } from "./animal-with-speed.interface";

export interface SwimmingAnimal extends AnimalWithSpeed {
    cruise(): void
    dive(): void
}