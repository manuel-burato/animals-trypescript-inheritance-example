import { AnimalWithSpeed } from "./animal-with-speed.interface";

export interface FlyngAnimal extends AnimalWithSpeed {
    glide(): void
    nosedive(): void
}