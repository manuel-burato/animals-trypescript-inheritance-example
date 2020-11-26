import { WalkingAnimal } from "../interfaces";
import { Animal } from "./";

export class Dog extends Animal implements WalkingAnimal {
    protected starvationTimeout: number = 50000

    public walk() {
        this.currentSpeed = 15
    }

    public run() {
        this.currentSpeed = 90
    }
}