import { FlyngAnimal } from "../interfaces";
import { Animal } from "./";

export class Firefly extends Animal implements FlyngAnimal {
    protected starvationTimeout: number = 10000

    public glide() {
        this.currentSpeed = 2
    }

    public nosedive() {
        this.currentSpeed = 30
    }
}